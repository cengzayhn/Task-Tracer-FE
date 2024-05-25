import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField } from '@mui/material';

interface ProjectOptionsDialogProps {
    open: boolean;
    isEdit: boolean;
    handleClose: () => void;
}

const ProjectOptionsDialog: React.FC<ProjectOptionsDialogProps> = (props) => {
    const { open, isEdit, handleClose } = props;

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>{isEdit ? 'Edit Project' : 'Delete Project'}</DialogTitle>
            <DialogContent>
                {isEdit ? (
                    <>
                        <TextField label="New Project Name" fullWidth />
                        <TextField label="New Project Description" fullWidth multiline />
                        <TextField label="New Project Deadline" fullWidth type="date" />
                    </>
                ) : (
                    <p>Are you sure you want to delete this project?</p>
                )}
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleClose} color="primary" autoFocus>
                    {isEdit ? 'Save' : 'Delete'}
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ProjectOptionsDialog;
