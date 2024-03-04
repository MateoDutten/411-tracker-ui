import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import AddGoalForm from './AddGoalForm';


function AddGoalDialog(props) {
  const { onClose, open } = props;

  return (
    <Dialog onClose={onClose} open={open}>
        <AddGoalForm/>
    </Dialog>
  );
}
export default AddGoalDialog;