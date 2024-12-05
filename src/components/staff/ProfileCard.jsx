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
  const [expanded, setExpanded] = React.useState(false);
  const navigate = useNavigate();
const staff = props.user;
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleCardClick = () => {
    props.handleOpen(staff);
  };
  const { loading, error, image } = useImage(staff.img);
  return (
    <Card sx={{ maxWidth: 350, minWidth:350, cursor: "pointer" }} onClick={handleCardClick}>
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
        height="350"
        alt="profile pic"
        image={image}
      >
      </CardMedia>
      {/*<CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
            <p className ="heading" sx={{ marginBottom: 2 }}>{staff.name}</p>
            <CardDetails text={staff.designation} icon={<WorkIcon></WorkIcon>}/>
            <CardDetails text={staff.edu} icon={<WorkspacePremiumIcon> </WorkspacePremiumIcon>}/>
        </CardContent>
      </Collapse>*/}
    </Card>
  );
}
