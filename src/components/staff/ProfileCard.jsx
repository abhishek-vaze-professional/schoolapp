import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import "./user.css";
import WorkIcon from '@mui/icons-material/Work';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';

import { getAvatar } from '../common/commonUtil';
import CardDetails from './CardDetails';
import { useNavigate } from 'react-router-dom';
import useImage from '../common/useImage';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));

export default function ProfileCard(props) {
const staff = props.user;
  const handleCardClick = () => {
    props.handleOpen(staff);
  };
  const { loading, error, image } = useImage(staff.img, props.folder);
  return (
    <Card sx={{ maxWidth: 300, minWidth:300, cursor: "pointer", maxHeight: {xs:'300px', md:'350px'}}} onClick={handleCardClick}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {getAvatar(staff.name)}
          </Avatar>
        }
        title={staff.name}
        subheader={staff.designation}
      />
      <CardMedia
        component="img"
        height="300"
        alt="profile pic"
        image={image}
      >
      </CardMedia>
    </Card>
  );
}
