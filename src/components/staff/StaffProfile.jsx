import React from "react";
import CardMedia from "@mui/material/CardMedia";
import useImage from "../common/useImage";
import "./user.css";
import "../common/common.css";
function StaffProfile(props) {
  const staff = props.user;
  const { loading, error, image } = useImage(staff.img);
  return (
    <div className='profileCont borderme capriolafont'>
      <div className='picContainer '>
        <img src={image} className='pic' alt='profile pic' />
      </div>
      <div className='sname'>{staff.name}</div>
      <div className='des'>{staff.designation}</div>
      <div className='edu '>{staff.edu}</div>
      <div className='det '>
        <ul>
          {staff.details.map((object, i) => (
            <li>{object}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default StaffProfile;
