import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const pages = [{title:"About Us", path:"/dashboard"},
  {title:"Home", path:"/home"},
  {title:"Our School", path:"/school"},
  {title:"Staff", path:"/staff"},
  {title:"Results", path:"/result"},
  {title:"Achievements", path:"/achievement"},
  {title:"Life At SGVM", path:"/photoes"}];
  //{title:"Genesis of School", path:"/genesis"},
const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <React.Fragment>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          {pages.map((page, index) => (
            <ListItemButton key={index}>
              <ListItemIcon>
                <ListItemText onClick={() => setOpenDrawer(!openDrawer)}><Link to={page.path} >{page.title}</Link></ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="white" />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;