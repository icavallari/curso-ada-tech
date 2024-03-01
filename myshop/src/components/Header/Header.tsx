import React, { useState } from "react";
import { Cart } from "../Cart/Cart";
import * as S from "./styles";

import { FiLogIn, FiLogOut, FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer, rootReducer } from "../../redux/root-reducer";

export const Header: React.FC = () => {
  const { user } = useSelector(
    (rootReducer: RootReducer) => rootReducer.userReducer
  );

  const [showCart, setShowCart] = useState(false);
  const isLogged = user !== null;

  const dispatch = useDispatch();

  function handleUserAuth() {
    //setLogged(!logged)
    if (user === null) {
      dispatch({
        type: "user/login",
        payload: {
          name: "rodrigo cavallari",
          email: "icavallari@hotmail.com",
        },
      });
    } else {
      dispatch({
        type: "user/logout",
      });
    }
  }

  return (
    <S.StyledHeader>
      <S.Wrapper>
        <S.HeaderTitle>Myshop.</S.HeaderTitle>

        <S.ButtonsWrapper>
          <S.AuthButton isLogged={isLogged} onClick={handleUserAuth}>
            {isLogged ? "Logout" : "Login"}
            {isLogged ? <FiLogOut /> : <FiLogIn />}
          </S.AuthButton>

          <S.CartButton onClick={() => setShowCart(!showCart)}>
            Carrinho <FiShoppingCart />
          </S.CartButton>
        </S.ButtonsWrapper>
      </S.Wrapper>

      <Cart showCart={showCart} />
    </S.StyledHeader>
  );
};
