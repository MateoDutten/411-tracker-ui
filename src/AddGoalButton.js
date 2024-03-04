import * as React from 'react';
import AddIcon from '@mui/icons-material/Add';
import {Fab} from "@mui/material";
import AddGoalDialog from "./AddGoalDialog";
import Container from "@mui/material/Container";

function AddGoalButton() {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    const style = {
      margin: 0,
      top: 'auto',
      right: 20,
      bottom: 20,
      left: 'auto',
      position: 'fixed',
    }

    return (
      <Container>
        <Fab style={style} color="primary" aria-label="add" onClick={handleClickOpen}>
          <AddIcon />
        </Fab>
        <AddGoalDialog open={open} onClose={handleClose} />
      </Container>
    );
}

export default AddGoalButton;