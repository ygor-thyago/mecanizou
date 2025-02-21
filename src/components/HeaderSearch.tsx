import styled from "styled-components";
import searchIcon from "../assets/search-icon.svg";
import { useCallback, useState } from "react";

const SearchBox = styled.div`
  width: 55%;
  max-width: 620px;
  display: flex;
  background: #0378f23d;
  border-radius: 9.6px;

  @media only screen and (max-width: 768px) {
    width: 48px;
    margin-left: auto;
  }

  @media only screen and (max-width: 426px) {
    margin-left: 0;
  }
`;
const SearchButton = styled.button`
  width: 48px;
  height: 48px;
  background: url("/search-icon.svg") center center no-repeat;
`;

const SearchIcon = styled.img`
  margin: 0 auto;
  display: block;
`;

const SearchInput = styled.input<{ $isActive?: boolean }>`
  width: calc(100% - 48px);
  color: #fff;
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
function HeaderSearch() {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const toggleMobileOpen = useCallback(() => {
    setMobileOpen(!mobileOpen)
  },[mobileOpen])
  
  return (
    <SearchBox>
      <SearchButton onClick={toggleMobileOpen}>
        <SearchIcon src={searchIcon} alt="Buscar Produto" />
      </SearchButton>
      <SearchInput $isActive={mobileOpen} placeholder="Busque por produto, termo ou código" />
    </SearchBox>
  );
}

export default HeaderSearch;
