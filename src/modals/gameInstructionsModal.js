import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 200,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: 10,
  boxShadow: 24,
  p: 4,
};

const buttonStyle = {
  color: "red",
  fontSize: "xx-large",
  fontWeight: "bold",
}

export default function InstructionsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} style={buttonStyle}>How to Play</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal" sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Game Instructions
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Play the game by clicking on the picture of the cat which you think has the highest attribute value. The cat with the highest number wins!
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
