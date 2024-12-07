import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import "../common/common.css";
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 900,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function AchievementList(props) {
  const [open, setOpen] = React.useState(false);
  const [text, setText] = React.useState("");
  const handleOpen = (text) => {
    setOpen(true);
    setText(text);
  }
  const handleClose = () => setOpen(false);
  const data = props.data;
  const getEliptedText = (object) => {
    return object.length > 130 ? object.substring(0, 129) + " ..." : object;
  }

  return (
    <div>
      <Box className="pointit"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 200,
            height: 200,
          },
        }}
      >
        {data.map((object, i) => (
          <Paper elevation={20} onClick={() => handleOpen(object)}>
            <div className='pad25 elipseit' ><p dangerouslySetInnerHTML={{__html: getEliptedText(object)}}/></div>
          </Paper>
        ))}
      </Box>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style} >
            <p className="capriolafont" dangerouslySetInnerHTML={{__html: text}} />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default AchievementList;
