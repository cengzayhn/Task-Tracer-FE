import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField } from '@mui/material';
import { IProject } from 'modal/Project';
import { closeProject, updateProject } from '../../../../service/projectService';

interface ProjectOptionsDialogProps {
    open: boolean;
    isEdit: boolean;
    selectedProject?: IProject;
    handleClose: () => void;
}

const ProjectOptionsDialog: React.FC<ProjectOptionsDialogProps> = (props) => {
    const { open,selectedProject, isEdit, handleClose } = props;
    const [projectName, setProjectName] = useState<string>(selectedProject?.name || '');
    const [members, setMembers] = useState<string>(selectedProject?.usernameList.join('; ') || '');

    React.useEffect(()=>{
        if(selectedProject){
            setProjectName(selectedProject.name);
            setMembers(selectedProject.usernameList.join('; '));
        }
    }, [selectedProject])

    const handleSave = async () => {
        if(selectedProject){
            if (isEdit) {
                const usernameList = members.split(/[;\s]+/).filter(Boolean);
                try {
                    await updateProject(selectedProject.id, projectName, usernameList);
                } catch (error) {
                    console.error("Update project error: ", error);
                }
            }else{
                try{
                    await closeProject(selectedProject.id);
                }catch(error){
                    console.error("Close project error : ",error);
                }
            }
        }
        handleClose();
    };


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
                            onChange={(e) => setProjectName(e.target.value)}
                            sx={{ marginBottom: 2 }}
                        />
                        <TextField 
                            label="Members" 
                            fullWidth 
                            defaultValue={selectedProject?.usernameList.join('; ')}
                            onChange={(e) => setMembers(e.target.value)}
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
                <Button onClick={handleSave} color={isEdit ? 'success' : 'error'} autoFocus>
                    {isEdit ? 'Save' : 'Delete'}
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ProjectOptionsDialog;
