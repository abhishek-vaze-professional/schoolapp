import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import "../staff/user.css";
import useImage from "../common/useImage";


function TestimonialCard(props) {
    const user = props.user;
    console.log(user);
    const { loading, error, image } = useImage(user.img, "testimonials");
    console.log(image);
  return (
    <Card sx={{ maxWidth: "500px", minWidth: "300px" }}>
      <CardMedia component='img' alt='profile pic' height='350px' image={image}></CardMedia>
      <CardContent>
        <p className='heading' sx={{ marginBottom: 2 }}>
          {user.name}
        </p>
        <p className="centerit">{user.designation}</p>
        <p className="centerit">{user.year}</p>
      </CardContent>
    </Card>
  );
}

export default TestimonialCard;
