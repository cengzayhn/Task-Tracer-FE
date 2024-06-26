import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Grid, TextField } from '@mui/material';
import { createTask, updateTask } from '../../../../service/taskService';
import './styles.css';
import { createProject } from '../../../../service/projectService';

interface TaskTracerDialogProps {
    openDialog: boolean;
    setOpenDialog?: Function;
    mode: "create task" | "update task" | "create project" | "update project";
    taskTitle: string;
    setTaskTitle?: Function;
    taskDescription?: string;
    setTaskDescription?: Function;
    username: string;
    date?: string;
    projectId: string;
    selectedTask?: { id: string; title: string; description: string };
    setRefresh: Function;
}

const TaskTracerDialog: React.FC<TaskTracerDialogProps> = (props) => {
    const {
        openDialog,
        setOpenDialog,
        mode,
        setTaskTitle,
        taskTitle,
        taskDescription = '',
        setTaskDescription,
        username,
        date,
        projectId,
        selectedTask,
        setRefresh
    } = props;

    const [localTaskTitle, setLocalTaskTitle] = useState(taskTitle);
    const [localTaskDescription, setLocalTaskDescription] = useState(taskDescription);

    useEffect(() => {
        if (mode === 'update task' && selectedTask) {
            setLocalTaskTitle(selectedTask.title);
            setLocalTaskDescription(selectedTask.description);
        } else if(mode === 'create task' || mode === 'create project'){
            setLocalTaskTitle("");
            setLocalTaskDescription("");
        }
    }, [mode, selectedTask]);

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLocalTaskTitle(event.target.value);
        setTaskTitle && setTaskTitle(event.target.value);
    };

    const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLocalTaskDescription(event.target.value);
        setTaskDescription && setTaskDescription(event.target.value);
    };

    const handleSave = () => {
        switch (mode) {
            case 'create task':
                if (date) {
                    createTask(projectId, localTaskTitle, localTaskDescription, username, date);
                    setRefresh(true);
                }
                break;
            case 'update task':
                if (selectedTask) {
                    updateTask(selectedTask.id, localTaskTitle, localTaskDescription);
                    setRefresh(true);
                }
                break;
            case 'create project':
                createProject(localTaskTitle, [username]);
                setRefresh(true);
                break;
            case 'update project':
                // Update project logic here
                break;
        }
        setTaskTitle && setTaskTitle('');
        setTaskDescription && setTaskDescription('');
        handleClose();
    };

    const handleClose = () => {
        setOpenDialog && setOpenDialog(false);
    };

    const getDialogTitle = () => {
        switch (mode) {
            case 'create task':
                return "Create a new Task";
            case 'update task':
                return "Update the Task";
            case 'create project':
                return "Create a new Project";
            case 'update project':
                return "Update the Project";
            default:
                return "";
        }
    };

    return (
        <React.Fragment>
            <Dialog
                open={openDialog}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                className={mode.includes('project') ? 'project-dialog' : ''}
            >
                <DialogTitle id="alert-dialog-title">
                    {getDialogTitle()}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <Grid container>
                            <Grid item xs={12}>
                                <TextField
                                    label={mode.includes('project') ? "Project Title" : "Task Title"}
                                    value={localTaskTitle}
                                    onChange={handleTitleChange}
                                    fullWidth
                                    margin="normal"
                                />
                            </Grid>
                            {!mode.includes('project') && (
                                <Grid item xs={12}>
                                    <TextField
                                        label="Description"
                                        value={localTaskDescription}
                                        onChange={handleDescriptionChange}
                                        fullWidth
                                        margin="normal"
                                    />
                                </Grid>
                            )}
                        </Grid>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant='contained' color='success' onClick={handleSave}>Save</Button>
                    <Button variant='contained' color='inherit' onClick={handleClose} autoFocus>Close</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
};

export default TaskTracerDialog;
