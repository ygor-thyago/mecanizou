import styled from "styled-components";
import Container from "../components/Container";
import quickQuoteIcon from "../assets/quick-quote-icon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const MegaWrapper = styled.div`
  width: 100%;
  background: #fff;
`;

const MegaContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px ${({ theme }) => theme.spacing.large};
`;

const MegaNav = styled.nav`
  width: 80%;
  max-width: 700px;
`;

const MegaList = styled.ul`
  display: flex;
  align-items: center;
  gap: 24px;
  list-style: none;
`;

const MegaItem = styled.li`
  color: #52525b;
  font-family: Inter;
  font-size: 14px;
  line-height: 19.6px;
  display: flex;
  align-items: center;
  gap: 9px;
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
`;

const QuoteIcon = styled.img`
  width: 20px;
  height: 20px;
  display: block;
`;

function MegaMenu() {
  return (
    <MegaWrapper>
      <MegaContainer>
        <MegaNav>
          <MegaList>
            <MegaItem>
              Todas as Categorias
              <FontAwesomeIcon icon={faAngleDown} size="lg" color="#71717A" />
            </MegaItem>
            <MegaItem>
              Óleos e Lubrificantes
              <FontAwesomeIcon icon={faAngleDown} size="lg" color="#71717A" />
            </MegaItem>
            <MegaItem>
              Pneus
              <FontAwesomeIcon icon={faAngleDown} size="lg" color="#71717A" />
            </MegaItem>
            <MegaItem>
              Maquinários
              <FontAwesomeIcon icon={faAngleDown} size="lg" color="#71717A" />
            </MegaItem>
            <MegaItem>
              Ferramentas
              <FontAwesomeIcon icon={faAngleDown} size="lg" color="#71717A" />
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
