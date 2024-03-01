import { useSelector } from "react-redux";
import * as S from "./styles";
import { RootReducer } from "../../redux/root-reducer";

interface CartProps {
  showCart: boolean;
}

export const Cart: React.FC<CartProps> = ({ showCart }) => {
  const { cart } = useSelector(
    (rootReducer: RootReducer) => rootReducer.cartReducer
  );

  const total = cart.reduce((total, produto) => (total += produto.price), 0);

  return (
    <S.Container showCart={showCart}>
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
        <strong>Total: {total} R$</strong>
      </S.CartTotal>
    </S.Container>
  );
};
