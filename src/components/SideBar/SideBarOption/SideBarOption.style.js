import styled from "styled-components";

export const SidebarOptionContainer = styled.div`
  display: flex;
  align-items: center;

  font-size: 12px;
  padding-left: 2px;
  cursor: pointer;
  color: white;

  :hover {
    opacity: 0.9;
    background-color: #340e36;
  }

  > h3 {
    font-weight: 500;
  }
`;

export const SidebarOptionChannel = styled.h3`
  padding: 10px 0;
  font-weight: 300;
  > span {
    padding: 15px;
  }
`;
