import { Prisma, Product } from "@prisma/client";
import Image from "next/image";
import { CalculatePriceNoDiscount, formatCurrency } from "../_helpers/price";
import { ArrowDownIcon, HeartIcon, StarIcon } from "lucide-react";
import { Button } from "./ui/button";

interface ProductItemsProps {
  product: Prisma.ProductGetPayload<{
    include: {
      restaurant: {
        select: {
          name: true;
        };
      };
    };
  }>;
}

const ProductItem = ({ product }: ProductItemsProps) => {
  return (
    <div className="w-[150px] min-w-[150px] space-y-2">
      {/* imagem */}
      <div className="relative h-[150px] w-full">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="rounded-lg object-cover shadow-md"
        />

      



      </div>

      {/* nome do produto , preço e nome do restaurante. condicao: se o produto tiver desconto, que ele apareça taxado simples */}

      <div>
        <h2 className="truncate text-sm">{product.name}</h2>
        <div className="flex items-center gap-1">
          <h3 className="font-semibold">
            €{formatCurrency(CalculatePriceNoDiscount(product))}
          </h3>
          {product.discountPercentage > 0 && (
            <span className="text-xs text-muted-foreground line-through">
              €{formatCurrency(Number(product.price))}
            </span>
          )}
        </div>

        <span className="block text-xs text-muted-foreground">
          {product.restaurant.name}
        </span>
      </div>
    </div>
  );
};

export default ProductItem;
