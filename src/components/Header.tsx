import styled from "styled-components";
import HeaderSearch from "../components/HeaderSearch";
import MainNav from "../components/MainNav";
import Container from "../components/Container";
import MegaMenu from "../components/MegaMenu";
import logo from "../assets/logo.svg";
import helpIcon from "../assets/help-icon.svg";

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
`;

const Logo = styled.img`
  width: 184px;
  height: 20px;
`;

const HelpIcon = styled.img`
  width: 24px;
  height: 24px;
`;

function Header() {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Logo src={logo} alt="Mecanizou | Logo" loading="lazy" />
        <HeaderSearch />
        <MainNav />
        <HelpIcon src={helpIcon} alt="Ajuda" loading="lazy" />
      </HeaderContainer>
      <MegaMenu />
    </HeaderWrapper>
  );
}

export default Header;
