import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import CardContent from '@mui/material/CardContent';
import CardDetails from '../staff/CardDetails';

import "../staff/user.css";

import { getAvatar } from "../common/commonUtil";
import { useNavigate } from "react-router-dom";
import useImage from "../common/useImage";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: "rotate(0deg)",
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: "rotate(180deg)",
      },
    },
  ],
}));
function StudentProfile(props) {
  const student = props.student;

  const { loading, error, image } = useImage(student.img, "ssc");
  return (
    <Card sx={{ maxWidth: 130, minWidth: 130, cursor: "pointer", minHeight:300 }}>
      <CardMedia component='img' height='auto' alt='profile pic' image={image}></CardMedia>
      <div>
            <p sx={{ marginBottom: 2 }}>{student.name}</p>
            <CardDetails text={student.perc} />
        </div>
    </Card>
  );
}

export default StudentProfile;
