import styled from "styled-components";
import HeaderSearch from "../HeaderSearch";
import MainNav from "../MainNav";
import Container from "../Container";
import MegaMenu from "../MegaMenu";
import logo from "../../assets/logo.svg";
import helpIcon from "../../assets/help-icon.svg";

const HeaderWrapper = styled.header`
  color: white;
  background: ${({ theme }) => theme.colors.primary};
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.04);
  box-shadow: 0px 2px 2px -0.5px rgba(0, 0, 0, 0.08);
`;

const HeaderContainer = styled(Container)`
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

const LogoWrapper = styled.div`
  @media only screen and (max-width: 426px) {
    text-align: center;
    width: 100%;
  }
`;


const Logo = styled.img`
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

const HelpIcon = styled.img`
  width: 24px;
  height: 24px;
`;

function Header() {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <LogoWrapper>
          <Logo src={logo} alt="Mecanizou | Logo" loading="lazy" />
        </LogoWrapper>
        <HeaderSearch />
        <MainNav />
        <HelpIcon src={helpIcon} alt="Ajuda" loading="lazy" />
      </HeaderContainer>
      <MegaMenu />
    </HeaderWrapper>
  );
}

export default Header;
