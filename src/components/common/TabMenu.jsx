import React from "react";

import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TabSubMenu from "./TabSubMenu";
function TabMenu(props) {
  const page = props.page;
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  
  const clickLink = (event, link) => {
    if (link !== "") {
      navigate(link);
      document.getElementById("head").scrollIntoView();
      handleClose();
    } else {
      handleClick(event);
    }
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box
        sx={{
          fontWeight: "bolder",
          fontFamily: "Montserrat-B, Sans-serif",
          color: "#074799",
          fontSize: {
            xs: "x-Small",
            sm: "small",
            md: "medium",
            lg: "large",
            xl: "x-large",
          },
          cursor: "pointer",
        }}
        
      >
        {page.submenu && (
          <span onClick={(event) => clickLink(event, page.path)} className="pointit">
            {page.title}{" "}<ExpandMoreIcon className="menuIcon" /> 
          </span>
        )}
        {!page.submenu && <span onClick={(event) => clickLink(event, page.path)} className="pointit">{page.title}  </span> }
      </Box>
      {page.submenu && (
        <TabSubMenu page={page} anchorEl={anchorEl} handleClose={handleClose}></TabSubMenu>
      )}
    </>
  );
}

export default TabMenu;
