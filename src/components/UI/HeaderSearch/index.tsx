import searchIcon from "../../../assets/search-icon.svg";
import { useCallback, useState } from "react";

import { 
  SearchBox,
  SearchButton,
  SearchIcon,
  SearchInput,
 } from "./styles";

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
