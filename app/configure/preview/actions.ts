"use server";

import { BASE_PRICE, PRODUCT_PRICES } from "@/config/products";
import { db } from "@/db";
import { stripe } from "@/lib/stripe";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import { Order } from "@prisma/client";

export const createCheckoutSession = async ({
  configId,
  user,
}: {
  configId: string;
  user: KindeUser | null;
}) => {
  const configuration = await db.configuration.findUnique({
    where: { id: configId },
  });

  if (!configuration) {
    throw new Error("Configuration not found");
  }

  if (!user) {
    throw new Error("You must be logged in to create a checkout session");
  }

  const { material, finish } = configuration;

  let price = BASE_PRICE;

  if (material === "polycarbonate")
    price += PRODUCT_PRICES.material.polycarbonate;
  if (material === "silicone") price += PRODUCT_PRICES.material.silicone;
  if (material === "plastic") price += PRODUCT_PRICES.material.plastic;
  if (finish === "textured") price += PRODUCT_PRICES.finish.textured;
  if (finish === "smooth") price += PRODUCT_PRICES.finish.smooth;

  let order: Order | undefined = undefined;
  const existingOrder = await db.order.findFirst({
    where: {
      userId: user.id,
      configurationId: configuration.id,
    },
  });

  console.log("User ID:", user.id);
  console.log("Configuration ID:", configuration.id);

  if (existingOrder) {
    order = existingOrder;
  } else {
    order = await db.order.create({
      data: {
        amount: price / 100,
        userId: user.id,
        configurationId: configuration.id,
      },
    });
  }

  const product = await stripe.products.create({
    name: "Custom iPhone Case",
    images: [configuration.imageUrl],
    default_price_data: {
      currency: "USD",
      unit_amount: price,
    },
  });

  const stripeSession = await stripe.checkout.sessions.create({
    success_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/thank-you?orderId=${order.id}`,
    cancel_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/configure/preview?id=${configuration.id}`,
    payment_method_types: ["card"],
    mode: "payment",
    shipping_address_collection: { allowed_countries: ["US", "PH"] },
    metadata: {
      userId: user.id,
      orderId: order.id,
    },
    line_items: [
      {
        price: product.default_price as string,
        quantity: 1,
      },
    ],
  });
  return { url: stripeSession.url };
};
