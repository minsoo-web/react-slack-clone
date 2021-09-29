import React from "react";
import styled from "styled-components";
import { Avatar } from "@mui/material";

const Header = () => {
  return (
    <HeaderContainer>
      {/* Header Left */}
      <HeaderLeft>
        <HeaderAvatar
        // Add onClick
        />
      </HeaderLeft>
      {/* Header Search */}
      {/* Header Right */}
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  background-color: #000;
`;

const HeaderLeft = styled.div``;

const HeaderAvatar = styled(Avatar)``;
