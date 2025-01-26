import React from "react";
import useImage from "../common/useImage";
import "./user.css";
import "../common/common.css";
import {Box, Stack} from "@mui/material"
function StaffProfile(props) {
  const staff = props.user;
  const { loading, error, image } = useImage(staff.img, "staff");
  return (
    <Stack className='profileCont borderme capriolafont'>
      <Box className='picContainer '>
        <img src={image} className='pic' alt='profile pic' />
      </Box>
      <Box sx={{textAlign: "center", padding: "5px", fontFamily: "Montserrat, Sans-serif", color: "#62615C", fontSize: {xs:"Small", sm:"medium", md:"medium",lg:"large",xl:"x-large"}}} >{staff.name}</Box>
      <Box sx={{fontWeight: "bolder", padding: "5px", textAlign: "center", fontFamily: "Montserrat, Sans-serif", color: "#62615C", fontSize: {xs:"Small", sm:"small", md:"medium",lg:"large",xl:"x-large"}}} >{staff.designation}</Box>
      <Box sx={{fontWeight: "bold", padding: "5px", textAlign: "center", fontFamily: "Montserrat, Sans-serif", color: "#62615C", fontSize: {xs:"Small", sm:"small", md:"medium",lg:"large",xl:"x-large"}}} >{staff.edu}</Box>
      <Box sx={{fontFamily: "Montserrat, Sans-serif", color: "#62615C", fontSize: {xs:"Small", sm:"small", md:"medium",lg:"large",xl:"x-large"}}} className="justifyme">
        <ul>
          {staff.details.map((object, i) => (
            <li>{object}</li>
          ))}
        </ul>
      </Box>
    </Stack>
  );
}

export default StaffProfile;
