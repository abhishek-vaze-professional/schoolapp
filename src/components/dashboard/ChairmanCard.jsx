import React from "react";
import chairmanPic from "../../assets/images/Rajesh.jpeg";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import "../staff/user.css";


function ChairmanCard() {
  return (
    <Card sx={{ maxWidth: "500px", minWidth: "300px" }}>
      <CardMedia component='img' alt='profile pic' height='350px' image={chairmanPic}></CardMedia>
      <CardContent>
        <p className='heading' sx={{ marginBottom: 2 }}>
          Dr. Rajesh Bhatkurse
        </p>
        <p className="centerit">M.D. (Med) (Physician)</p>
        <p className="centerit">Fellowship in Diabetes(CMC Vellore)</p>
        <p className="centerit">Chairman - Shree Ganesh Vidyamandir</p>
      </CardContent>
    </Card>
  );
}

export default ChairmanCard;
