import { useMiniCart } from "./useMiniCart";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import cartBlueIcon from "../../../../assets/cart-blue-icon.svg";

import {
  MiniCartWrapper,
  MiniCartContainer,
  CartHeader,
  CartList,
  CartItem,
  CartItemInfo,
  ProductImage,
  CartFooter,
  MiniCartIcon,
  CloseMobileCart,
} from "./styles";

const MiniCart = () => {
  const { isMiniCartOpen, items, closeMiniCart, totalAmount, scope } = useMiniCart();

  return (
    <MiniCartWrapper ref={scope} $isActive={isMiniCartOpen}>
      <MiniCartContainer id="mini-cart">
        <CartHeader>
          <strong>Itens no Carrinho</strong>

          <CloseMobileCart onClick={closeMiniCart}>
            <FontAwesomeIcon icon={faXmark} size="lg"/>
          </CloseMobileCart>

          {items.length > 0 && <p>R$ {totalAmount.toFixed(2)}</p>}
        </CartHeader>

        <CartList>
          {items.length === 0 ? (
            <li>Seu carrinho está vazio.</li>
          ) : (
            items.map((item) => (
              <CartItem key={item.id}>
                <ProductImage>
                  <img src={item.image} alt={item.title} />
                </ProductImage>
                <CartItemInfo>
                  <p>{item.title}</p>
                  <small>Qnt. {item.quantity}x</small>
                  <strong>
                    <small>R$ {item.price.toFixed(2)}</small>
                  </strong>
                </CartItemInfo>
              </CartItem>
            ))
          )}
        </CartList>

        <CartFooter>
          <a href="/">
            {"Ir para Carrinho"}
            <MiniCartIcon src={cartBlueIcon} alt="Ícone do Carrinho de Produtos" />
          </a>
        </CartFooter>
      </MiniCartContainer>
    </MiniCartWrapper>
  );
};

export default MiniCart;
