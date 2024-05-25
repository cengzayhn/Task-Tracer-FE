import React, { useState } from 'react';
import './styles.css';
import { Button, Grid, Paper } from '@mui/material';
import TaskTracerProjectsCard from '../../components/shared/projects-card/TaskTracerProjectsCard';
import { useNavigate } from 'react-router-dom';
import { IProject } from 'modal/Project';
import TaskTracerDialog from '../../components/shared/task/dialog/TaskTracerDialog';
import ProjectOptionsDialog from '../../components/shared/projects-card/options/ProjectOptionsDialog';

interface TaskTracerProjectsContainerProps {
    projectId: string;
    setProjectId: Function;
}

const TaskTracerProjectsContainer: React.FC<TaskTracerProjectsContainerProps> = (props) => {
    const { projectId, setProjectId } = props;
    const navigate = useNavigate(); 
    const dummyData: IProject[] = [
        { id: '10', name: 'Proje 1', createdDate: '2023-01-01', closedDate: '2023-06-01', taskIdList: ['task1', 'task2'], memberIdList: ['member1', 'member2'], isOpen: true },
        { id: '20', name: 'Proje 2', createdDate: '2023-02-01', closedDate: '2023-07-01', taskIdList: ['task3', 'task4'], memberIdList: ['member3', 'member4'], isOpen: false },
        { id: '30', name: 'Proje 3', createdDate: '2023-03-01', closedDate: '2023-08-01', taskIdList: ['task5', 'task6'], memberIdList: ['member5', 'member6'], isOpen: true },
        { id: '40', name: 'Proje 4', createdDate: '2023-04-01', closedDate: '2023-09-01', taskIdList: ['task7', 'task8'], memberIdList: ['member7', 'member8'], isOpen: false },
        { id: '50', name: 'Proje 5', createdDate: '2023-05-01', closedDate: '2023-10-01', taskIdList: ['task9', 'task10'], memberIdList: ['member9', 'member10'], isOpen: true },
        { id: '60', name: 'Proje 6', createdDate: '2023-06-01', closedDate: '2023-11-01', taskIdList: ['task11', 'task12'], memberIdList: ['member11', 'member12'], isOpen: false },
        { id: '7', name: 'Proje 7', createdDate: '2023-07-01', closedDate: '2023-12-01', taskIdList: ['task13', 'task14'], memberIdList: ['member13', 'member14'], isOpen: true },
        { id: '8', name: 'Proje 8', createdDate: '2023-07-01', closedDate: '2023-12-01', taskIdList: ['task13', 'task14'], memberIdList: ['member13', 'member14'], isOpen: true },
    ];

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
                {dummyData.map((data, index) => (
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
                username="currentUsername" 
                date="currentDate" 
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
