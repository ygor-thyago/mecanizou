import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { toggleMiniCart } from "../features/cart/cartSlice";
import MiniCart from "./MiniCart";
import cartIcon from "../assets/cart-icon.svg";
import cartFilledIcon from "../assets/cart-filled-icon.svg";
import userIcon from "../assets/user-icon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useCallback, useEffect, useState } from "react";

const MainWrapper = styled.div`
  max-width: 256px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  @media only screen and (max-width: 1024px) {
    width: auto;
    margin-left: auto;
  }

  @media only screen and (max-width: 1024px) {
    margin-left: 0;
  }
`;

const CartMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 68px;
  height: 40px;
  border-radius: 40px;
  background: #0378f23d;
  padding: 0 18px 0 11px;
  position: relative;
`;

const MainIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const MainCartText = styled.span`
  color: #e4e4e7;
  font-size: 14px;
  line-height: 23.8px;
  text-align: center;
`;

const MainNavText = styled(MainCartText)`
  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;

const UserMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 10px 12px;
`;

function MainNav() {
  const dispatch = useDispatch();
  const { totalItems, isMiniCartOpen } = useSelector((state: RootState) => state.cart);
  const [totalCart, setTotalCArt] = useState(totalItems);

  const toggleModalCart = useCallback(() => {
    dispatch(toggleMiniCart(isMiniCartOpen ? false : true)); // Toggle minicart modal
  },[dispatch, isMiniCartOpen],)

  useEffect(() => {
    setTotalCArt(totalItems) // Update cart total items
  }, [totalItems])

  useEffect(() => {
    dispatch(toggleMiniCart(false));
  }, [dispatch])
  
  
  return (
    <MainWrapper>
      <CartMenu onClick={toggleModalCart}>
        <MainIcon src={(totalCart > 0 ? cartFilledIcon : cartIcon)} alt="Ícone do Carrinho de Produtos" />
        <MainCartText>{totalCart}</MainCartText>
        <MiniCart />
      </CartMenu>

      <UserMenu>
        <MainIcon src={userIcon} alt="Ícone do Menu da Oficina" />
        <MainNavText>Minha Oficina</MainNavText>
        <FontAwesomeIcon icon={faAngleDown} size="sm" color="#E4E4E7" />
      </UserMenu>
    </MainWrapper>
  );
}

export default MainNav;
