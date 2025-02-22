import styled from "styled-components";
import Container from "../Container";
import { rgba } from "polished";

export const MegaWrapper = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
`;

export const MegaContainer = styled(Container)`
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

export const ToggleMegaNav = styled.button`
  display: none;
  color: ${({ theme }) => theme.colors.text};

  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

export const MegaNav = styled.nav`
  width: 80%;
  max-width: 700px;
  @media only screen and (max-width: 768px) {
    width: 0;
  }
`;

export const MegaList = styled.ul<{ $isActive?: boolean }>`
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
    background-color: ${({ theme }) => theme.colors.white};
    padding: 0;
    z-index: 99;
    box-shadow: 0px 10px 12px -6px ${({ theme }) => rgba(theme.colors.black, 0.12)};
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

export const MegaItem = styled.li`
  color: ${({ theme }) => theme.colors.text};
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

export const QuickQuote = styled.button`
  width: 181px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 14px;
  line-height: 24px;
  border-radius: 100px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  padding-right: 5px;

  @media only screen and (max-width: 1024px) {
    font-size: 12px;
  }
`;

export const QuoteIcon = styled.img`
  width: 20px;
  height: 20px;
  display: block;

  @media only screen and (max-width: 1024px) {
    width: 15px;
    height: 15px;
  }
`;