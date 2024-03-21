import * as React from 'react';
import AddIcon from '@mui/icons-material/Add';
import {Fab, Typography,} from "@mui/material";
import AddGoalDialog from "./AddGoalDialog";
import Box from "@mui/material/Box";

function AddGoalButton(props) {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };


    return (
      <Box> 
        <Typography variant="h3" gutterBottom sx={{ textTransform: "capitalize"}} > {props.timeframe} 
          <Fab color="primary" aria-label="add" onClick={handleClickOpen} sx={{ marginLeft: 3}}>
            <AddIcon />
          </Fab>
          <AddGoalDialog open={open} onClose={handleClose} />
        </Typography>
      </Box>
    );
}

export default AddGoalButton;