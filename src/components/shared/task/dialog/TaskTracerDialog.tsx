import  React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Grid, TextField } from '@mui/material';
import { createTask } from '../../../../service/taskService';
import './styles.css';

interface TaskTracerDialogProps {
    openDialog: boolean;
    setOpenDialog?: Function;
    isEditMode?: boolean
    taskTitle: string;
    setTaskTitle?: Function;
    taskDescription: string;
    setTaskDescription?: Function;
    username: string;
    date: string;
}

const TaskTracerDialog: React.FC<TaskTracerDialogProps> = (props) => {

    const {openDialog, setOpenDialog, isEditMode, setTaskTitle, taskTitle, taskDescription, setTaskDescription, username, date} = props;

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTaskTitle && setTaskTitle(event.target.value);
    };

    const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTaskDescription && setTaskDescription(event.target.value);
    };

    const handleSave = () => {

        if(!isEditMode){
            console.log("yaratıcı mod")
            createTask(taskTitle, taskDescription, username, date);
        }else{
            console.log("duzenleyici mod")
        }
        handleClose();
    }

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
                                label={"Title"}
                                value={taskTitle}
                                onChange={handleTitleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label={"Description"}
                                value={taskDescription}
                                onChange={handleDescriptionChange}
                            />
                        </Grid>
                    </Grid>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button variant='contained' color='success' onClick={handleSave}>Save</Button>
            <Button variant='contained' color='inherit' onClick={handleClose} autoFocus>Close</Button>
            </DialogActions>
        </Dialog>
    </React.Fragment>
)
}


export default TaskTracerDialog;    