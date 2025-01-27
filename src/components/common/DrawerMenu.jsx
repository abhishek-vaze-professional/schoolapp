import React from "react";
import { ListItemButton, ListItemIcon, ListItemText, Box } from "@mui/material";
import TabSubMenu from "./TabSubMenu";
import { Link, useNavigate } from "react-router-dom";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
function DrawerMenu(props) {
    const page = props.page;
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (path) => {
    setAnchorEl(null);
    props.closeDrawer();
    navigate(path);
  };
  return (
    <>
      <ListItemButton key={props.index}>
        <ListItemIcon>
          {page.path && (
            <ListItemText onClick={props.closeDrawer}>
              <Link to={page.path}>{page.title}</Link>
            </ListItemText>
          )}
          {!page.path && (
            <ListItemText>
              <Box aria-controls={open ? "basic-menu" : undefined} aria-haspopup='true' aria-expanded={open ? "true" : undefined} onClick={handleClick} sx={{ color: "#074799" }}>
                {page.title} {" "} <span><ExpandMoreIcon /> </span>
              </Box>
            </ListItemText>
          )}
        </ListItemIcon>
      </ListItemButton>
      {page.submenu && <TabSubMenu page={page} anchorEl={anchorEl} handleClose={handleClose}></TabSubMenu>}
    </>
  );
}

export default DrawerMenu;
