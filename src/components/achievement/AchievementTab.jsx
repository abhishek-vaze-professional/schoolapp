import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import Achievement2324 from './Achievement2324';
import Achievement2425 from "./Achievement2425";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role='tabpanel' hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function AchievementTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} aria-label='basic tabs example'>
          <Tab label='2023 - 24' />
          <Tab label='2024 - 25' />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Achievement2324/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Achievement2425/>
      </CustomTabPanel>
    </Box>
  );
}

export default AchievementTab;
