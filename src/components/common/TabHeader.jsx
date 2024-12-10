import React, { useState } from "react";
import {
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme, Box, Stack
} from "@mui/material";
import DrawerComp from "./DrawerComp";
import "./common.css";
import { Link } from "react-router-dom";

const TabHeader = () => {
  const pages = [{title:"Dashboard", path:"/dashboard"},
  {title:"Home", path:"/home"},
  {title:"Our School", path:"/school"},
  {title:"Staff", path:"/staff"},
  {title:"Results", path:"/result"},
  {title:"Achievements", path:"/achievement"},
  {title:"Genesis of School", path:"/genesis"},
  {title:"Gallary", path:"/photoes"}];
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

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
                  return <Box sx={{
                    fontWeight: "bolder",fontFamily: "Atma, Sans-serif", color: "#62615C", fontSize: {
                      xs:"x-Small", sm:"small", md:"medium",lg:"large",xl:"x-large"
                    }
                  }}><Link to={page.path} >{page.title}</Link></Box>
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
