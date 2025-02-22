import HeaderSearch from "../../UI/HeaderSearch";
import MainNav from "../../UI/MainNav";
import MegaMenu from "../MegaMenu";
import logo from "../../../assets/logo.svg";
import helpIcon from "../../../assets/help-icon.svg";

import { 
  HeaderWrapper,
  HeaderContainer,
  LogoWrapper,
  Logo,
  HelpIcon,
} from "./styles";

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
