import React from "react";
import { Toolbar, Typography, useMediaQuery, useTheme, Box, Stack } from "@mui/material";
import DrawerComp from "./DrawerComp";
import "./common.css";
import TabMenu from "./TabMenu";

const TabHeader = () => {
  
  const pages = [
    { title: "About Us", path: "",
    submenu:[{ title: "SGVM At Glance", path: "dashboard"},{ title: "Admissions & Others", path: "home"},{ title: "Our School", path: "school"}]  },
    { title: "Administration", path: "", submenu:[{ title: "Management", path: "management"},{ title: "Faculty", path: "staff"}] },
    { title: "Results", path: "/result" },
    { title: "Achievements", path: "/achievement" },
    { title: "Photo Gallery", path: "/photoes" },
  ];

  //{title:"Genesis of School", path:"/genesis"},
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  

  return (
    <React.Fragment>
      <Box sx={{ background: "transparent", top: 10, right: 30, position: "absolute", zIndex: 1100 }}>
        <Toolbar>
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}></Typography>
              <DrawerComp />
            </>
          ) : (
            <Stack direction='row' spacing={4} className='menuFont marginTop15'>
              {pages.map((page) => {
                return (
                 <TabMenu page={page}/>
                );
              })}
            </Stack>
          )}
        </Toolbar>
      </Box>
    </React.Fragment>
  );
};

export default TabHeader;
