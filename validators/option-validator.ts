// bg-zinc-900 border-zinc-900
// bg-zinc-100 border-zinc-100
// bg-rose-950 border-rose-950
// bg-blue-950 border-blue-950
// bg-pink-300 border-pink-300

import { PRODUCT_PRICES } from "@/config/products";

export const COLORS = [
  {
    label: "Black",
    value: "black",
    tw: "zinc-900",
  },
  {
    label: "White",
    value: "white",
    tw: "zinc-100",
  },
  {
    label: "Red",
    value: "rose",
    tw: "rose-950",
  },
  {
    label: "Blue",
    value: "blue",
    tw: "blue-950",
  },
  {
    label: "Pink",
    value: "pink",
    tw: "pink-300",
  },
] as const;

export const MODELS = {
  name: "models",
  options: [
    {
      label: "iPhone X",
      value: "iphonex",
    },
    {
      label: "iPhone XR",
      value: "iphonexr",
    },
    {
      label: "iPhone XS",
      value: "iphonexs",
    },
    {
      label: "iPhone XS Max",
      value: "iphonexsmax",
    },
    {
      label: "iPhone 11",
      value: "iphone11",
    },
    {
      label: "iPhone 11 Pro",
      value: "iphone11pro",
    },
    {
      label: "iPhone 11 Pro Max",
      value: "iphone11promax",
    },
    {
      label: "iPhone 12",
      value: "iphone12",
    },
    {
      label: "iPhone 12 mini",
      value: "iphone12mini",
    },
    {
      label: "iPhone 12 Pro",
      value: "iphone12pro",
    },
    {
      label: "iPhone 12 Pro Max",
      value: "iphone12promax",
    },
    {
      label: "iPhone 13",
      value: "iphone13",
    },
    {
      label: "iPhone 13 mini",
      value: "iphone13mini",
    },
    {
      label: "iPhone 13 Pro",
      value: "iphone13pro",
    },
    {
      label: "iPhone 13 Pro Max",
      value: "iphone13promax",
    },
    {
      label: "iPhone 14",
      value: "iphone14",
    },
    {
      label: "iPhone 14 Plus",
      value: "iphone14plus",
    },
    {
      label: "iPhone 14 Pro",
      value: "iphone14pro",
    },
    {
      label: "iPhone 14 Pro Max",
      value: "iphone14promax",
    },
    {
      label: "iPhone 15",
      value: "iphone15",
    },
    {
      label: "iPhone 15 Plus",
      value: "iphone15plus",
    },
    {
      label: "iPhone 15 Pro",
      value: "iphone15pro",
    },
    {
      label: "iPhone 15 Pro Max",
      value: "iphone15promax",
    },
  ],
} as const;

export const MATERIALS = {
  name: "material",
  options: [
    {
      label: "Plastic",
      value: "plastic",
      description: "Durable and lightweight, offering basic protection.",
      price: PRODUCT_PRICES.material.plastic,
    },
    {
      label: "Silicone",
      value: "silicone",
      description:
        "Flexible and soft, providing a comfortable grip and shock absorption.",
      price: PRODUCT_PRICES.material.silicone,
    },
    {
      label: "Soft Polycarbonate",
      value: "polycarbonate",
      description:
        "Tough yet lightweight, with enhanced durability for extra protection.",
      price: PRODUCT_PRICES.material.polycarbonate,
    },
  ],
} as const;

export const FINISHES = {
  name: "finish",
  options: [
    {
      label: "Smooth Finish",
      value: "smooth",
      description: "A sleek and polished surface for a refined look.",
      price: PRODUCT_PRICES.finish.smooth,
    },
    {
      label: "Textured Finish",
      value: "textured",
      description: "A rougher surface for better grip and a unique feel.",
      price: PRODUCT_PRICES.finish.textured,
    },
  ],
} as const;
