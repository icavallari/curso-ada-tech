import { Product } from "../../data/produts";
import * as S from "./styles";
import { FiShoppingCart } from "react-icons/fi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer, rootReducer } from "../../redux/root-reducer";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { cart } = useSelector(
    (rootReducer: RootReducer) => rootReducer.cartReducer
  );
  const dispatch = useDispatch();

  function handleAddProductToCart() {
    dispatch({
      type: "cart/add-product",
      payload: product,
    });
  }

  function handleRemoveProductToCart() {
    dispatch({
      type: "cart/remove-product",
      payload: product,
    });
  }

  const isOnCart =
    cart.find((productOnCart) => productOnCart.id === product.id) !== undefined;

  return (
    <S.Card>
      <S.ProductImage src={product.image} alt={product.description} />

      <S.ProductTitle>{product.title}</S.ProductTitle>

      <S.ReviewPriceContainer>
        <S.Review>
          {Array.from({ length: 5 }).map((_, index) => {
            if (index + 1 <= Math.trunc(product.rating.rate)) {
              return <AiFillStar key={index} />;
            }
            return <AiOutlineStar key={index} />;
          })}
          ({` ${product.rating.rate}`})
        </S.Review>
        <S.Price>{product.price} R$</S.Price>
      </S.ReviewPriceContainer>

      <S.AddoToCartWrapper>
        {!isOnCart ? (
          <S.AddToCart onClick={handleAddProductToCart}>
            adicionar ao carrinho
            <FiShoppingCart />
          </S.AddToCart>
        ) : (
          <S.RemoveFromCart onClick={handleRemoveProductToCart}>
            remover do carrinho
            <FiShoppingCart />
          </S.RemoveFromCart>
        )}
      </S.AddoToCartWrapper>
    </S.Card>
  );
};
