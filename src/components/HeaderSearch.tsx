import styled from "styled-components";
import searchIcon from "../assets/search-icon.svg";

const SearchBox = styled.div`
  width: 55%;
  max-width: 620px;
  display: flex;
  background: #0378f23d;
  border-radius: 9.6px;
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

const SearchInput = styled.input`
  width: calc(100% - 48px);
  color: #fff;
  font-family: Inter;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0%;

  &::placeholder,
  &::-webkit-input-placeholder {
    color: #d4d4d8;
  }
`;
function HeaderSearch() {
  return (
    <SearchBox>
      <SearchButton>
        <SearchIcon src={searchIcon} alt="Buscar Produto" />
      </SearchButton>
      <SearchInput placeholder="Busque por produto, termo ou código" />
    </SearchBox>
  );
}

export default HeaderSearch;
