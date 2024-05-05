import  React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Grid, TextField } from '@mui/material';
import './styles.css';

interface TaskCreateDialogProps {
    openDialog: boolean;
    setOpenDialog: Function;
    setTaskTitle: Function;
    setTaskDescription: Function;
}

const TaskCreateDialog: React.FC<TaskCreateDialogProps> = (props) => {

    const {openDialog, setOpenDialog, setTaskTitle, setTaskDescription} = props;


    const handleClose =() =>{
        setOpenDialog(false);
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
            {"Create a new Task"}
            </DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-description">
                <Grid container>
                    <Grid item xs={12}>
                        <TextField
                            placeholder='Title'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            placeholder='Description'
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


export default TaskCreateDialog;    