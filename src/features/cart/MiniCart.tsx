import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { CartItem as CartItemType } from "./MiniCart.types";
import { toggleMiniCart } from "./cartSlice";
import { useAnimate, stagger, useReducedMotion } from "framer-motion";
import cartBlueIcon from "../assets/cart-blue-icon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

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
} from "./MiniCart.styles";

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return; 

    animate(
      "div#mini-cart",
      {
        clipPath: isOpen
          ? "inset(0% 0% 0% 0% round 10px)"
          : "inset(10% 50% 90% 50% round 10px)",
      },
      {
        type: "spring",
        bounce: 0,
        duration: 0.5,
      }
    );

    animate(
      "li",
      isOpen
        ? { opacity: 1, scale: 1, filter: "blur(0px)" }
        : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
      {
        duration: 0.2,
        delay: isOpen ? staggerMenuItems : 0,
      }
    );
  }, [animate, isOpen, shouldReduceMotion]);

  return scope;
}

const MiniCart = () => {
  const { items, totalAmount, isMiniCartOpen } = useSelector(
    (state: RootState) => state.cart
  );

  const scope = useMenuAnimation(isMiniCartOpen);
  const dispatch = useDispatch();

  const toggleModalCart = () => dispatch(toggleMiniCart(!isMiniCartOpen));

  return (
    <MiniCartWrapper ref={scope} $isActive={isMiniCartOpen}>
      <MiniCartContainer id="mini-cart">
        <CartHeader>
          <strong>Itens no Carrinho</strong>

          <CloseMobileCart onClick={toggleModalCart}>
            <FontAwesomeIcon icon={faXmark} size="lg"/>
          </CloseMobileCart>

          {items.length > 0 && <p>R$ {totalAmount.toFixed(2)}</p>}
        </CartHeader>

        <CartList>
          {items.length === 0 ? (
            <li>Seu carrinho está vazio.</li>
          ) : (
            items.map((item: CartItemType) => (
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
