import React from "react";
import { SideBarContainer, SideBarHeader, SideBarInfo } from "./SideBar.style";
import {
  FiberManualRecord,
  Create,
  InsertComment,
  Inbox,
  Drafts,
  BookmarkBorder,
  PeopleAlt,
  Apps,
  FileCopy,
  ExpandLess,
  ExpandMore,
  Add
} from "@mui/icons-material";
import SideBarOption from "./SideBarOption/SideBarOption";
import { db } from "../../firebase";
import { useCollection } from "react-firebase-hooks/firestore";

const SideBar = () => {
  const [channels, loading, error] = useCollection(db.collection("rooms"));
  return (
    <SideBarContainer>
      {/*  */}
      <SideBarHeader>
        <SideBarInfo>
          <h2>PAPA FAM HQ</h2>
          <h3>
            <FiberManualRecord />
            Sonny Sanha
          </h3>
        </SideBarInfo>
        <Create />
      </SideBarHeader>
      {/*  */}

      <SideBarOption Icon={InsertComment} title="Threads" />
      <SideBarOption Icon={Inbox} title="Mentions & reactions" />
      <SideBarOption Icon={Drafts} title="Saved items" />
      <SideBarOption Icon={BookmarkBorder} title="Channel browser" />
      <SideBarOption Icon={PeopleAlt} title="People & user groups" />
      <SideBarOption Icon={Apps} title="Apps" />
      <SideBarOption Icon={FileCopy} title="File browser" />
      <SideBarOption Icon={ExpandLess} title="Show less" />

      <hr />

      <SideBarOption Icon={ExpandMore} title="Channel" />

      <hr />

      <SideBarOption Icon={Add} title="Add Channel" addChannelOption />

      {channels?.docs.map(doc => (
        <SideBarOption key={doc.id} title={doc.data().name} />
      ))}
    </SideBarContainer>
  );
};

export default SideBar;
