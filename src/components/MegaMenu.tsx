import styled from "styled-components";
import { useCallback, useState } from "react";
import Container from "../components/Container";
import quickQuoteIcon from "../assets/quick-quote-icon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faBars } from "@fortawesome/free-solid-svg-icons";

const MegaWrapper = styled.div`
  width: 100%;
  background: #fff;
`;

const MegaContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px ${({ theme }) => theme.spacing.large};

  @media only screen and (max-width: 1024px) {
    padding: 12px 15px;
  }

  @media only screen and (max-width: 768px) {
    position: relative;
  }
`;

const ToggleMegaNav = styled.button`
  display: none;
  color: #52525b;

  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

const MegaNav = styled.nav`
  width: 80%;
  max-width: 700px;
  @media only screen and (max-width: 768px) {
    width: 0;
  }
`;

const MegaList = styled.ul<{ $isActive?: boolean }>`
  display: flex;
  align-items: center;
  gap: 24px;
  list-style: none;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    left: 0%;
    top: 100%;
    position: absolute;
    background-color: #fff;
    padding: 0;
    z-index: 99;
    box-shadow: 0px 10px 12px -6px #0000001F;
    height: ${({ $isActive }) => ($isActive ? "285px" : "0px")};
    visibility: ${({ $isActive }) => ($isActive ? "visible" : "hidden")};
    transition: all linear .5s;

    li {
      opacity: ${({ $isActive }) => ($isActive ? "1" : "0")};
      transition: all linear ${({ $isActive }) => ($isActive ? ".2s" : "0")};
      transition-delay: ${({ $isActive }) => ($isActive ? ".5s" : "0s")};
    }
  }
`;

const MegaItem = styled.li`
  color: #52525b;
  font-family: Inter;
  font-size: 14px;
  line-height: 19.6px;
  display: flex;
  align-items: center;
  gap: 9px;

  @media only screen and (max-width: 1024px) {
    gap: 4px;
    max-width: 90px;
    font-size: 12px;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    max-width: none;
    padding: 0 15px 15px;

    &:first-child {
      padding-top: 15px;
    }
  }
`;

const QuickQuote = styled.button`
  width: 181px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: #3f3f46;
  font-size: 14px;
  line-height: 24px;
  border-radius: 100px;
  border: 1px solid #e4e4e7;
  padding-right: 5px;

  @media only screen and (max-width: 1024px) {
    font-size: 12px;
  }
`;

const QuoteIcon = styled.img`
  width: 20px;
  height: 20px;
  display: block;

  @media only screen and (max-width: 1024px) {
    width: 15px;
    height: 15px;
  }
`;

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
