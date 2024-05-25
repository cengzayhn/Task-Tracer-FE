import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField } from '@mui/material';
import { IProject } from 'modal/Project';

interface ProjectOptionsDialogProps {
    open: boolean;
    isEdit: boolean;
    selectedProject?: IProject;
    handleClose: () => void;
}

const ProjectOptionsDialog: React.FC<ProjectOptionsDialogProps> = (props) => {
    const { open,selectedProject, isEdit, handleClose } = props;

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>{isEdit ? `Edit ${selectedProject?.name}` : `Delete ${selectedProject?.name}`}</DialogTitle>
            <DialogContent sx={{ marginTop: 5 }}>
                {isEdit ? (
                    <>
                        <TextField 
                            label="Project Name" 
                            fullWidth 
                            defaultValue={selectedProject?.name} 
                            sx={{ marginBottom: 2 }}
                        />
                        <TextField
                            label="Project Status"
                            fullWidth 
                            defaultValue={selectedProject?.isOpen ? "Open" : "Closed"} 
                            sx={{ marginBottom: 2 }}
                            />
                        <TextField 
                            label="Members" 
                            fullWidth 
                            defaultValue={selectedProject?.memberIdList.join('; ')} 
                            sx={{ marginBottom: 2 }}
                        />
                    </>
                ) : (
                    <p>Are you sure you want to delete this project?</p>
                )}
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleClose} color={isEdit ? 'success' : 'error'} autoFocus>
                    {isEdit ? 'Save' : 'Delete'}
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ProjectOptionsDialog;
