import React from "react";
import { Search, AccessTime, HelpOutline } from "@mui/icons-material";
import {
  HeaderContainer,
  HeaderLeft,
  HeaderAvatar,
  HeaderSearch,
  HeaderRight
} from "./Header.style";

const Header = () => {
  return (
    <HeaderContainer>
      {/* Header Left */}
      <HeaderLeft>
        <HeaderAvatar
        // Add onClick
        />
        <AccessTime className="access-time-icon" />
      </HeaderLeft>
      {/* Header Search */}
      <HeaderSearch>
        <Search />
        <input type="text" placeholder="Search PAPAFAM" />
      </HeaderSearch>

      {/* Header Right */}
      <HeaderRight>
        <HelpOutline />
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;
