import styled from "styled-components";

export const SearchBox = styled.div`
  width: 55%;
  max-width: 620px;
  display: flex;
  background: ${({ theme }) => theme.colors.headBackground};
  border-radius: 9.6px;

  @media only screen and (max-width: 768px) {
    width: 48px;
    margin-left: auto;
  }

  @media only screen and (max-width: 426px) {
    margin-left: 0;
  }
`;
export const SearchButton = styled.button`
  width: 48px;
  height: 48px;
  background: url("/search-icon.svg") center center no-repeat;
`;

export const SearchIcon = styled.img`
  margin: 0 auto;
  display: block;
`;

export const SearchInput = styled.input<{ $isActive?: boolean }>`
  width: calc(100% - 48px);
  color: ${({ theme }) => theme.colors.white};
  font-family: Inter;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  &::placeholder,
  &::-webkit-input-placeholder {
    color: #d4d4d8;
  }

  @media only screen and (max-width: 1024px) {
    font-size: 14px;
  }

  @media only screen and (max-width: 768px) {
    position: absolute;
    width: 100%;
    left: 0;
    top: 100%;
    z-index: 99;
    padding: 15px;
    background: #0860c4;
    opacity: ${({ $isActive }) => ($isActive ? "1" : "0")};
    visibility: ${({ $isActive }) => ($isActive ? "visible" : "hidden")};
    transition: all linear .5s;
  }
`;