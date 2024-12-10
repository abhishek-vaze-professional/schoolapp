import React from "react";
import CardMedia from "@mui/material/CardMedia";
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
      <Box sx={{textAlign: "center",fontFamily: "Capriola, Sans-serif", color: "#62615C", fontSize: {xs:"Small", sm:"medium", md:"medium",lg:"large",xl:"x-large"}}} className='sname'>{staff.name}</Box>
      <Box sx={{fontWeight: "bold", textAlign: "center", fontFamily: "Capriola, Sans-serif", color: "#62615C", fontSize: {xs:"Small", sm:"small", md:"medium",lg:"large",xl:"x-large"}}} className='des'>{staff.designation}</Box>
      <Box sx={{fontWeight: "bold",fontFamily: "Capriola, Sans-serif", color: "#62615C", fontSize: {xs:"Small", sm:"small", md:"medium",lg:"large",xl:"x-large"}}} className='edu '>{staff.edu}</Box>
      <Box className='det '>
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
