import { useCallback, useState } from "react";
import quickQuoteIcon from "../../../assets/quick-quote-icon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faBars } from "@fortawesome/free-solid-svg-icons";

import { 
  MegaWrapper,
  MegaContainer,
  ToggleMegaNav,
  MegaNav,
  MegaList,
  MegaItem,
  QuickQuote,
  QuoteIcon,
} from "./styles";

function MegaMenu() {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const toggleMobileOpen = useCallback(() => {
    setMobileOpen(!mobileOpen)
  },[mobileOpen])

  return (
    <MegaWrapper>
      <MegaContainer>
        <ToggleMegaNav onClick={toggleMobileOpen}>
          <FontAwesomeIcon icon={faBars} size="lg"/>
        </ToggleMegaNav>
        <MegaNav>
          <MegaList $isActive={mobileOpen}>
            <MegaItem>
              Todas as Categorias
              <FontAwesomeIcon icon={faAngleDown} size="lg"/>
            </MegaItem>
            <MegaItem>
              Óleos e Lubrificantes
              <FontAwesomeIcon icon={faAngleDown} size="lg"/>
            </MegaItem>
            <MegaItem>
              Pneus
              <FontAwesomeIcon icon={faAngleDown} size="lg"/>
            </MegaItem>
            <MegaItem>
              Maquinários
              <FontAwesomeIcon icon={faAngleDown} size="lg"/>
            </MegaItem>
            <MegaItem>
              Ferramentas
              <FontAwesomeIcon icon={faAngleDown} size="lg"/>
            </MegaItem>
          </MegaList>
        </MegaNav>
        <QuickQuote>
          <QuoteIcon src={quickQuoteIcon} alt="Ícone de Orçamento" />
          Orçamento Rápido
        </QuickQuote>
      </MegaContainer>
    </MegaWrapper>
  );
}

export default MegaMenu;
