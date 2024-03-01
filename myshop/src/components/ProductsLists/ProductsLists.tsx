import { ProductCard } from "../ProductCard/ProductCard";
import { products } from "../../data/produts";
import * as S from "./styles";

export const ProductsLists: React.FC = () => {
  return (
    <S.Container>
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </S.Container>
  );
};
