import styled from "styled-components";
import { motion } from "framer-motion";
import { rgba } from "polished";

export const MiniCartWrapper = styled.div<{ $isActive?: boolean }>`
  top: 48px;
  left: 5px;
  position: absolute;
  z-index: 1000;
  visibility: ${({ $isActive }) => ($isActive ? "visible" : "hidden")};
  transition: all linear ${({ $isActive }) => ($isActive ? ".2s" : "0s")};
  transition-delay: ${({ $isActive }) => ($isActive ? ".3s" : "0s")};

  &::before {
    content: "";
    width: 20px;
    height: 20px;
    background: ${({ theme }) => theme.colors.white};
    position: absolute;
    left: 29px;
    top: -5px;
    transform: rotate(45deg);
    transform-origin: top;
    border-radius: 2px;
    z-index: -1;
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
    background-color: ${({ theme }) => theme.colors.white};
    
    &::before {display: none;}
  }
`;

export const MiniCartContainer = styled(motion.div)`
  width: 304px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  box-shadow: 0px 10px 12px -6px ${({ theme }) => rgba(theme.colors.black, 0.12)};
  display: flex;
  flex-direction: column;
  clip-path: inset(10% 50% 90% round 10px);

  @media only screen and (max-width: 768px) {
    border-radius: 0;
    height: 100vh;
    clip-path: none;
  }
`;

export const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  color: ${({ theme }) => rgba(theme.colors.textDark, 0.85)};
  font-size: 14px;
  font-weight: 500;
  line-height: 19.6px;

  strong {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.textDark};
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

export const CartList = styled.ul`
  color: ${({ theme }) => rgba(theme.colors.text, 0.85)};
  font-size: 14px;
  font-weight: 600;
  line-height: 19.6px;
  flex: 1;
  padding: 12px 16px;
  overflow-y: auto;
  list-style: none;
`;

export const CartItem = styled(motion.li)`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 22px;

  &:last-child {
    margin-bottom: 9px;
  }

  small {
    color: ${({ theme }) => theme.colors.text};
    font-size: 12px;
    line-height: 15.6px;
    opacity: .85;
  }

  strong small {
    opacity: 1;
  }
`;

export const CartItemInfo = styled.div`
  width: calc(100% - 76px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  p {
    margin-bottom: 7px;
  }

  small {
    color: ${({ theme }) => theme.colors.text};
    font-size: 12px;
    line-height: 15.6px;
    opacity: .85;
  }

  strong small {
    opacity: 1;
  }
`;

export const ProductImage = styled.div`
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.secondary};

  img {
    max-width: 80%;
    max-height: 80%;
  }
`;

export const CartFooter = styled.div`
  padding: 15px;
  text-align: center;
  border-top: 1px solid ${({ theme }) => theme.colors.secondary};

  a {
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
`;

export const MiniCartIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export const CloseMobileCart = styled.button`
  display: none;
  color: ${({ theme }) => theme.colors.text};

  @media only screen and (max-width: 768px) {
    display: block;
  }
`;