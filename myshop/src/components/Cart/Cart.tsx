import * as S from "./styles";
import { Product } from "../../data/produts";

interface CartProps {
  showCart: boolean;
  cart: Product[];
}

export const Cart: React.FC<CartProps> = ({ showCart, cart }) => {
  const total = cart.reduce((total, produto) => (total += produto.price), 0);

  return (
    <S.Container showcart={showCart}>
      <S.Title>Carrinho</S.Title>

      <S.CartProductsList>
        {cart.map((produto) => {
          return (
            <S.CartProductItem key={produto.id}>
              <strong>{produto.title}</strong> - {produto.price}
            </S.CartProductItem>
          );
        })}
      </S.CartProductsList>

      <S.CartTotal>
        <strong data-testid="total">Total: {total} R$</strong>
      </S.CartTotal>
    </S.Container>
  );
};
