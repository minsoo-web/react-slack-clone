import styled from "styled-components";

export const SideBarContainer = styled.div`
  color: white;
  background-color: var(--slack-color);
  flex: 0.3;

  border-top: 1px solid var(--border-color);
  max-width: 260px;
  margin-top: 60px;

  hr {
    margin: 10px 0;
    border: 1px solid var(--border-color);
  }
`;

export const SideBarHeader = styled.div`
  display: flex;

  padding: 13px;
  border-bottom: 1px solid var(--border-color);

  > .MuiSvgIcon-root {
    padding: 8px;
    font-size: 18px;
    color: var(--border-color);
    background-color: white;
    border-radius: 50%;
  }
`;

export const SideBarInfo = styled.div`
  flex: 1;
  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }

  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;

    > .MuiSvgIcon-root {
      margin-top: 1px;
      margin-right: 2px;

      font-size: 14px;
      color: green;
    }
  }
`;
