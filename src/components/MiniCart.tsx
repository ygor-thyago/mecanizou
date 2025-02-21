import styled from "styled-components";
import { useCallback, useEffect } from "react";
import { useAnimate, stagger, motion, useReducedMotion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import cartBlueIcon from "../assets/cart-blue-icon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { toggleMiniCart } from "../features/cart/cartSlice";

const MiniCartWrapper = styled.div<{ $isActive?: boolean }>`
  top: 48px;
  left: 5px;
  position: absolute;
  z-index: 1000;

  &::before {
    content: "";
    width: 20px;
    height: 20px;
    background: #FFF;
    position: absolute;
    left: 29px;
    top: -5px;
    transform: rotate(45deg);
    transform-origin: top;
    border-radius: 2px;
    z-index: -1;
    transition: all linear ${({ $isActive }) => ($isActive ? ".2s" : "0s")};
    transition-delay: ${({ $isActive }) => ($isActive ? ".3s" : "0s")};
    opacity: ${({ $isActive }) => ($isActive ? "1" : "0")};
  }

  @media only screen and (max-width: 1024px) {
    left: auto;
    right: 0;

    &::before {
      right: 29px;
      left: auto;
    }
  }

  @media only screen and (max-width: 768px) {
    position: fixed;
    top: 0;
    right: auto;
    left: ${({ $isActive }) => ($isActive ? "0" : "-150%")};
    transition: all linear .3s;
    background-color: #FFF;
    
    &::before {display: none;}
  }
`;

const MiniCartContainer = styled(motion.div)`
  width: 304px;
  background: #FFF;
  border-radius: 12px;
  box-shadow: 0px 10px 12px -6px #0000001F;
  display: flex;
  flex-direction: column;
  clip-path: inset(10% 50% 90% round 10px);

  @media only screen and (max-width: 768px) {
    border-radius: 0;
    height: 100vh;
    clip-path: none;
  }
`;

const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  color: #27272A73;
  font-size: 14px;
  font-weight: 500;
  line-height: 19.6px;

  strong {
    font-weight: 600;
    color: #27272A;
  }
  
  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;

    p {
      width: 100%;
      margin-top: 20px;
      text-align: right;
    }
  }
`;

const CartList = styled.ul`
  color: #52525BD9;
  font-size: 14px;
  font-weight: 600;
  line-height: 19.6px;
  flex: 1;
  padding: 12px 16px;
  overflow-y: auto;
  list-style: none;
`;

const CartItem = styled(motion.li)`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 22px;

  &:last-child {
    margin-bottom: 9px;
  }

  small {
    color: #52525B;
    font-size: 12px;
    line-height: 15.6px;
    opacity: .85;
  }

  strong small {
    opacity: 1;
  }
`;

const CartItemInfo = styled.div`
  width: calc(100% - 76px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  p {
    margin-bottom: 7px;
  }

  small {
    color: #52525B;
    font-size: 12px;
    line-height: 15.6px;
    opacity: .85;
  }

  strong small {
    opacity: 1;
  }
`;

const ProductImage = styled.div`
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: #F4F4F5;

  img {
    max-width: 80%;
    max-height: 80%;
  }
`;

const Footer = styled.div`
  padding: 15px;
  text-align: center;
  border-top: 1px solid #F4F4F5;

  a {
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #0958B5;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
`;

const MiniCartIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const CloseMobileCart = styled.button`
  display: none;
  color: #52525b;

  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

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
  }, [animate, isOpen]);

  return scope;
}

const MiniCart = () => {
  const { items, totalAmount, isMiniCartOpen } = useSelector((state: RootState) => state.cart);
  const scope = useMenuAnimation(isMiniCartOpen);
  const dispatch = useDispatch();

  const toggleModalCart = useCallback(() => {
    dispatch(toggleMiniCart(isMiniCartOpen ? false : true)); // Toggle minicart modal
  },[dispatch, isMiniCartOpen],)

  return (
    <MiniCartWrapper
      ref={scope}
      $isActive={isMiniCartOpen}
    >
      <MiniCartContainer id="mini-cart">
        <CartHeader>
          <strong>Itens no Carrinho</strong>

          <CloseMobileCart onClick={toggleModalCart}>
            <FontAwesomeIcon icon={faXmark} size="lg"/>
          </CloseMobileCart>

          {items.length > 0 && (
              <p>R$ {totalAmount.toFixed(2)}</p>
          )}
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
                  <strong><small>R$ {item.price.toFixed(2)}</small></strong>
                </CartItemInfo>
              </CartItem>
            ))
          )}
        </CartList>

        <Footer>
          <a href="/">
            {"Ir para Carrinho"}
            <MiniCartIcon src={cartBlueIcon} alt="Ícone do Carrinho de Produtos" />
          </a>
        </Footer>
      </MiniCartContainer>
    </MiniCartWrapper>
  );
};

export default MiniCart;
