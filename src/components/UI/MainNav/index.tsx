import { useMainNav } from "./useMainNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import MiniCart from "../../../features/cart/components/MiniCart";
import cartIcon from "../../../assets/cart-icon.svg";
import userIcon from "../../../assets/user-icon.svg";
import cartFilledIcon from "../../../assets/cart-filled-icon.svg";

import { 
  MainWrapper,
  CartMenu,
  MainIcon,
  MainCartText,
  MainNavText,
  UserMenu,
} from "./styles";

function MainNav() {
  const {  totalCart, toggleModalCart } = useMainNav();

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
