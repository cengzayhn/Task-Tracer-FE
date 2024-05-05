import  React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Grid, TextField } from '@mui/material';
import './styles.css';

interface TaskTracerDialogProps {
    openDialog: boolean;
    setOpenDialog?: Function;
    isEditMode?: boolean
    taskTitle: string;
    setTaskTitle?: Function;
    taskDescription: string;
    setTaskDescription?: Function;
}

const TaskTracerDialog: React.FC<TaskTracerDialogProps> = (props) => {

    const {openDialog, setOpenDialog, isEditMode, setTaskTitle, taskTitle, taskDescription, setTaskDescription} = props;


    const handleClose =() =>{
        setOpenDialog && setOpenDialog(false);
    }

    return(
    <React.Fragment>
        <Dialog
            open={openDialog}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
            {isEditMode ? "Update the Task" : "Create a new Task"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <Grid container>
                        <Grid item xs={12}>
                            <TextField
                                placeholder={taskTitle}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                placeholder={taskDescription}
                            />
                        </Grid>
                    </Grid>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button variant='contained' color='success' onClick={handleClose}>Save</Button>
            <Button variant='contained' color='inherit' onClick={handleClose} autoFocus>Close</Button>
            </DialogActions>
        </Dialog>
    </React.Fragment>
)
}


export default TaskTracerDialog;    