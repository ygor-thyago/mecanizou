import styled from "styled-components";
import Container from "../Container";

export const HeaderWrapper = styled.header`
  color: white;
  background: ${({ theme }) => theme.colors.primary};
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.04);
  box-shadow: 0px 2px 2px -0.5px rgba(0, 0, 0, 0.08);
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 32px;
  
  @media only screen and (max-width: 1024px) {
    gap: 15px;
  }

  @media only screen and (max-width: 768px) {
    position: relative;
  }

  @media only screen and (max-width: 426px) {
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;

export const LogoWrapper = styled.div`
  @media only screen and (max-width: 426px) {
    text-align: center;
    width: 100%;
  }
`;


export const Logo = styled.img`
  width: 184px;
  height: 20px;

  @media only screen and (max-width: 1024px) {
    width: 130px;
    height: auto;
  }
  @media only screen and (max-width: 426px) {
    width: 200px;
  }
`;

export const HelpIcon = styled.img`
  width: 24px;
  height: 24px;
`;