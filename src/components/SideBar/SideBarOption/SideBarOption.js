import React from "react";
import { SidebarOptionChannel, SidebarOptionContainer } from "./SideBarOption.style";
import { db } from "../../../firebase";

const SideBarOption = ({ Icon, title, addChannelOption, id }) => {
  const addChannel = () => {
    const channelName = prompt("Please enter the channel name");
    if (channelName) {
      db.collection("rooms").add({
        name: channelName
      });
    }
  };

  const selectChannel = () => {};

  return (
    <SidebarOptionContainer onClick={addChannelOption ? addChannel : selectChannel}>
      {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidebarOptionChannel>
          <span>#</span> {title}
        </SidebarOptionChannel>
      )}
    </SidebarOptionContainer>
  );
};

export default SideBarOption;
