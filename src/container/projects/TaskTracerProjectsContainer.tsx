import React, { useState } from 'react';
import './styles.css';
import { Button, Grid, Paper } from '@mui/material';
import TaskTracerProjectsCard from '../../components/shared/projects-card/TaskTracerProjectsCard';
import { useNavigate } from 'react-router-dom';
import { IProject } from 'modal/Project';
import TaskTracerDialog from '../../components/shared/task/dialog/TaskTracerDialog';
import ProjectOptionsDialog from '../../components/shared/projects-card/options/ProjectOptionsDialog';
import { getProjectsByUsername } from '../../service/projectService';

interface TaskTracerProjectsContainerProps {
    projectId: string;
    setProjectId: Function;
    username: string;
}

const TaskTracerProjectsContainer: React.FC<TaskTracerProjectsContainerProps> = (props) => {
    const { projectId, setProjectId, username} = props;
    const navigate = useNavigate(); 
    const [projects, setProjects] = useState<IProject[]>();
    const [openDialog, setOpenDialog] = useState(false);
    const [openOptionsDialog, setOpenOptionsDialog] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [projectName, setProjectName] = useState<string>("");
    const [selectedProject, setSelectedProject] = useState<IProject | undefined>(undefined);
    const [contextMenuPosition, setContextMenuPosition] = useState<{ x: number; y: number } | null>(null);

    const handleOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleProjectClick = (data: IProject) => {
        setProjectId(data.id);
        setSelectedProject(data);
        navigate(`/projects/${data.id}`);
    };

    const handleProjectRightClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, project: IProject) => {
        if(projectId.length > 1){
            event.preventDefault();
            setSelectedProject(project);
            setContextMenuPosition({ x: event.clientX, y: event.clientY });
            console.log("id : ", project.id );
        }
    };

    const handleCloseContextMenu = () => {
        setContextMenuPosition(null);
    };

    React.useEffect(() => {
        const fetchProjects = async () => {
            try {
                const projects = await getProjectsByUsername(username);
                setProjects(projects);
            } catch (error) {
                console.error("Error fetching projects:", error);
            }
        };
        fetchProjects();
    }, []);

    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (contextMenuPosition && !event.target) return;
            const paper = document.getElementById('context-menu-paper');
            if (paper && !paper.contains(event.target as Node)) {
                setContextMenuPosition(null);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [contextMenuPosition]);

    const handleEditProject = () => {
        setIsEditMode(true);
        setOpenOptionsDialog(true);
        handleCloseContextMenu();
    }

    const handleDeleteProject = () => {
        setIsEditMode(false);
        setOpenOptionsDialog(true);
        handleCloseContextMenu();
    }

    return (
        <React.Fragment>
            <Grid container className="button-container">
                <Grid item xs={2} />
                <Grid item xs={8} className='taskcreate-container'>
                    {projectId.length > 1 && <Button className='taskcreate-button' variant='contained' color='success' onClick={handleOpenDialog}>+</Button>}
                </Grid>
                <Grid item xs={2} />
            </Grid>
            <Grid container spacing={5} style={{ marginTop: '0.5vh' }}>
                {projects &&  projects.map((data, index) => (
                    <Grid item xs={3} key={index}>
                        <div className='projects-link' onClick={() => handleProjectClick(data)} onContextMenu={(e) => handleProjectRightClick(e, data)}>
                            <TaskTracerProjectsCard name={data.name} />
                        </div>
                    </Grid>
                ))}
            </Grid>
            <TaskTracerDialog 
                openDialog={openDialog} 
                setOpenDialog={setOpenDialog} 
                mode={"create project"} 
                taskTitle={projectName} 
                setTaskTitle={setProjectName} 
                username={username} 
            />
            {contextMenuPosition && (
                <Paper
                    id="context-menu-paper"
                    style={{
                        position: 'fixed',
                        top: contextMenuPosition.y,
                        left: contextMenuPosition.x,
                        zIndex: 9999,
                        padding: '8px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                    }}
                    onClick={handleCloseContextMenu}
                >
                    <Button variant='text' color='primary' onClick={handleEditProject}>Edit Project</Button>
                    <Button variant='text' color='error' onClick={handleDeleteProject}>Delete Project</Button>
                </Paper>
            )}
            <ProjectOptionsDialog 
                open={openOptionsDialog} 
                isEdit={isEditMode} 
                selectedProject={selectedProject}
                handleClose={() => setOpenOptionsDialog(false)} 
            />
        </React.Fragment>
    );
}

export default TaskTracerProjectsContainer;
