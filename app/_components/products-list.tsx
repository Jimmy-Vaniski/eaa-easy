// buusca todos os items com desconto maior que 0 trabalha junto com product-item

import ProductItem from "./product-item";
import { Prisma } from "@prisma/client";

interface ProductListProps {
  product: Prisma.ProductGetPayload<{
    include: {
      restaurant: {
        select: {
          name: true;
        };
      };
    };
  }>[];
}

const ProductList = async ({ product }: ProductListProps) => {
  return (
    <div className="px5 flex gap-4 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
      {product.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
