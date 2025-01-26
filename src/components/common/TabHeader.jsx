import React from "react";
import { Toolbar, Typography, useMediaQuery, useTheme, Box, Stack } from "@mui/material";
import DrawerComp from "./DrawerComp";
import "./common.css";
import TabMenu from "./TabMenu";
import { pages } from "./commonUtil";

const TabHeader = () => {
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
