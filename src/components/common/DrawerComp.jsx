import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { pages } from "./commonUtil";

import DrawerMenu from "./DrawerMenu";

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const closeDrawer = () => {
    setOpenDrawer(false);
  }
  return (
    <React.Fragment>
      <>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={closeDrawer}
      >
        <List>
          {pages.map((page, index) => (
            <DrawerMenu page={page} index={index} closeDrawer={closeDrawer} />
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "#074799", position: "absolute", top: 6, left:{xs:145, sm:320, md:500}, zIndex:3100}}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="white" />
      </IconButton>
      </>
    </React.Fragment>
  );
};

export default DrawerComp;