import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText, Box, Menu, MenuItem
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";

const pages = [{title:"About Us", path:"/dashboard"},
  {title:"Home", path:"/home"},
  {title:"Our School", path:"/school"},
  {title:"Administration", children:[{title:"Management", path:"/management"}, {title:"Staff", path:"/staff"}]},
  {title:"Results", path:"/result"},
  {title:"Achievements", path:"/achievement"},
  {title:"Photo Gallery", path:"/photoes"}];
  //{title:"Genesis of School", path:"/genesis"},
const DrawerComp = () => {
  const navigate = useNavigate();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (path) => {
    setAnchorEl(null);
    setOpenDrawer(!openDrawer);
    navigate(path);
  };

  return (
    <React.Fragment>
      <>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          {pages.map((page, index) => (
            <ListItemButton key={index}>
              <ListItemIcon>
                {page.path && <ListItemText onClick={() => setOpenDrawer(!openDrawer)}><Link to={page.path} >{page.title}</Link></ListItemText>}
                {!page.path && <ListItemText><Box aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{color:"#074799"}}
                >{page.title}</Box></ListItemText>}
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
        {/*<List>
        <ListItemButton>
              <ListItemIcon>
                <ListItemText onClick={() => setOpenDrawer(!openDrawer)}><Link to="/home" >Home</Link></ListItemText>
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <ListItemText><Box aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}>Administration</Box></ListItemText>
              </ListItemIcon>
            </ListItemButton>
        </List> */}
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => handleClose("/management")}>Management</MenuItem>
        <MenuItem onClick={() => handleClose("/staff")}>Staff</MenuItem>
      </Menu>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="white" />
      </IconButton>
      </>
    </React.Fragment>
  );
};

export default DrawerComp;