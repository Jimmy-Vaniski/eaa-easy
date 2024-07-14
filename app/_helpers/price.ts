import { Product } from "@prisma/client";
import { Euro } from "lucide-react";
import { Euphoria_Script } from "next/font/google";

export const CalculatePriceNoDiscount = (product: Product): number => {
  if (product.discountPercentage == 0) {
    return Number(product.price);
  }

  const discount = Number(product.price) * (product.discountPercentage / 100);

  return Number(product.price) - discount;
};

export const formatCurrency = (value: number): string => {
  return Intl.NumberFormat("pt-PT", {
    currency: "EUR",
    minimumFractionDigits: 2,
  }).format(value);
};
