import styled from "styled-components";
import { rgba } from "polished";

export const ProductWrapper = styled.div`
  max-width: 271px;
`;

export const ProductImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 271px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.secondary};
  position: relative;
`;

export const ProductBadge = styled.p`
  width: 89px;
  height: 24px;
  color: ${({ theme }) => theme.colors.ice};
  font-weight: 700;
  font-style: italic;
  font-size: 12px;
  line-height: 15.6px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 24px;
  background: #23dfc0;
  position: absolute;
  top: 12px;
  left: 12px;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductBrand = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 12px;
  font-weight: 500;
  line-height: 15.6px;
  text-transform: uppercase;
  margin-top: 16px;
  order: 2;
`;

export const ProductTitle = styled.h2`
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  min-height: 48px;
  margin-top: 5px;
  order: 3;
`;

export const ProductCod = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 12px;
  line-height: 15.6px;
  margin-top: 4px;
`;

export const ProductPriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ProductPriceBox = styled.div`
  color: ${({ theme }) => rgba(theme.colors.text, 0.65)};
  font-size: 12px;
  line-height: 15.6px;
  margin-top: 14px;
`;

export const ProdDiscountPrice = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  font-size: 22px;
  line-height: 33px;
  display: flex;
  align-items: flex-start;
  margin-top: 2px;

  small {
    font-size: 12px;
    line-height: 27px;
  }
`;

export const ProdDiscountTag = styled.p`
  width: 101px;
  height: 24px;
  font-weight: 700;
  font-size: 12px;
  line-height: 15.6px;
  text-align: center;
  color: #1e5d2da6;
  background: ${({ theme }) => theme.colors.prodBackground};
  margin-top: 12px;
  padding-top: 5px;
  position: relative;
  z-index: 0;

  &::before {
    content: "";
    width: 20px;
    height: 20px;
    background: ${({ theme }) => theme.colors.prodBackground};
    position: absolute;
    left: 4px;
    top: 50%;
    transform: rotate(45deg) translateX(-50%);
    transform-origin: top;
    border-radius: 5px;
    z-index: -1;
  }

  &::after {
    content: "";
    width: 4px;
    height: 4px;
    background: ${({ theme }) => theme.colors.white};
    position: absolute;
    left: -8px;
    top: 10px;
    border-radius: 100%;
  }
`;

export const ProductQuantityWrapper = styled.div`
  color: ${({ theme }) => theme.colors.textSecondary};
  display: flex;
  gap: 6px;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: 40px;
  padding: 4px 14px;
  margin-top: 12px;

  button {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

export const QuantityInputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 183px;
  background: ${({ theme }) => theme.colors.white};
  border: none;
  padding: 8px 0;
  border-radius: 24px;

  input {
    max-width: 25px;
    color: ${({ theme }) => theme.colors.text};
    text-align: center;
    &::-webkit-inner-spin-button, &::-webkit-outer-spin-button { 
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      margin: 0; 
    }
  }    
`;
