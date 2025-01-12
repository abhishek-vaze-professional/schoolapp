import React, { useState } from "react";
import {
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme, Box, Stack
} from "@mui/material";
import DrawerComp from "./DrawerComp";
import "./common.css";
import { styled, alpha } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from "react-router-dom";


const TabHeader = () => {
  const navigate = useNavigate();
  const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      {...props}
    />
  ))(({ theme }) => ({
    '& .MuiPaper-root': {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color: 'rgb(55, 65, 81)',
      boxShadow:
        'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      '& .MuiMenu-list': {
        padding: '4px 0',
      },
      '& .MuiMenuItem-root': {
        '& .MuiSvgIcon-root': {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        '&:active': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity,
          ),
        },
      },
      ...theme.applyStyles('dark', {
        color: theme.palette.grey[300],
      }),
    },
  }));
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const pages = [{title:"About Us", path:"/dashboard"},
  {title:"Home", path:"/home"},
  {title:"Our School", path:"/school"},
  {title:"Administration", path:""},
  {title:"Results", path:"/result"},
  {title:"Achievements", path:"/achievement"},
  {title:"Life At SGVM", path:"/photoes"}];

  //{title:"Genesis of School", path:"/genesis"},
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
  const clickLink = (event, link) => {
    if(link !== "") {
      navigate(link);
      document.getElementById( 'head' ).scrollIntoView();
      handleClose();
    } else {
      handleClick(event);
    }
    
    
  }

  return (
    <React.Fragment>
      <Box sx={{ background: "transparent", top:10, right: 30, position: "absolute", zIndex:1100 }}>
        <Toolbar>
          
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                
              </Typography>
              <DrawerComp />
            </>
          ) : (

              <Stack direction="row" spacing={4} className="menuFont marginTop15" >
              {
                pages.map((page, index) => {
                  return <><Box sx={{
                    fontWeight: "bolder",fontFamily: "Montserrat-B, Sans-serif", color: "#074799", fontSize: {
                      xs:"x-Small", sm:"small", md:"medium",lg:"large",xl:"x-large"
                    }, cursor: "pointer"
                  }}><span onClick= {(event) => clickLink(event,page.path)}>{page.title}</span></Box>
                  <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={() => clickLink(null,"/management")} disableRipple>
          Management
        </MenuItem>
        <MenuItem onClick={() => clickLink(null, "/staff")} disableRipple>
          Faculty
        </MenuItem>
      </StyledMenu></>
                })
              }
            </Stack>
            
          )}
        </Toolbar>
      </Box>
    </React.Fragment>
  );
};


export default TabHeader;
