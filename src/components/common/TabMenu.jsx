import React from "react";
import { styled, alpha } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
function TabMenu(props) {
  const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      {...props}
    />
  ))(({ theme }) => ({
    "& .MuiPaper-root": {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color: "rgb(55, 65, 81)",
      boxShadow: "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      "& .MuiMenu-list": {
        padding: "4px 0",
      },
      "& .MuiMenuItem-root": {
        "& .MuiSvgIcon-root": {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        "&:active": {
          backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
        },
      },
      ...theme.applyStyles("dark", {
        color: theme.palette.grey[300],
      }),
    },
  }));
  const page = props.page;
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const clickLink = (event, link) => {
    if (link !== "") {
      navigate(link);
      document.getElementById("head").scrollIntoView();
      handleClose();
    } else {
      handleClick(event);
    }
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
            {page.title}{" "}<span><ExpandMoreIcon /> </span>
          </span>
        )}
        {!page.submenu && <span onClick={(event) => clickLink(event, page.path)} className="pointit">{page.title} </span>}
      </Box>
      {page.submenu && (
        <StyledMenu
          id='demo-customized-menu'
          MenuListProps={{
            "aria-labelledby": "demo-customized-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          {page.submenu &&
            page.submenu.map((menu) => {
              return (
                <span className="hlite">
                <MenuItem  onClick={() => clickLink(null, menu.path)} disableRipple>
                  <span style={{ color: "#155E95", fontWeight: "Bolder" }}>{menu.title}</span>
                </MenuItem></span>
              );
            })}
        </StyledMenu>
      )}
    </>
  );
}

export default TabMenu;
