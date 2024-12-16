import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import StudentCardList from "./StudentCardList";
import sscData from "../../data/sscList.json";
import '../common/common.css';

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
function ResultTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} aria-label='basic tabs example' className="subHeaders">
          <Tab label='2023 - 24' sx={{fontFamily: "Montserrat-B"}} />
          {/*<Tab label='2024 - 25' />*/}
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div className="leftit">
          <p><span>Result: 100%</span> <span className="padleft">Appeared : 37</span> <span className="padleft">Passed : 37</span>    </p>
          <ul>
            <li>24.33% students (9 Students) passed in Distinction</li>
            <li>37.83% students (14 Students) passed in First Class</li>
            <li>37.83% students (14 Students) passed in Second Class</li>
          </ul>
        </div>
        <br></br>
        <StudentCardList sscData={sscData.sscData}></StudentCardList>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        2024 - 25
      </CustomTabPanel>
    </Box>
  );
}

export default ResultTab;
