import React from "react";
import './styles.css';
import { Avatar, Grid } from '@mui/material'
import TaskTracerSidebarComponent from "../../components/shared/sidebar/TaskTracerSidebarComponent";
import TaskTracerChatComponent from "../../components/shared/chat/TaskTracerChatComponent";
import { getAllMembers } from "../../service/userService";

interface TaskTracerChatContainerProps{
    username: string;
    projectId: string
}

const TaskTracerChatContainer:React.FC<TaskTracerChatContainerProps> = ({username, projectId}) => {
    const [sidebarItem, setSidebarItem] = React.useState<{ content: string; value: React.ReactNode[] }[]>([]);

    React.useEffect(() => {
        const fetchMembers = async () => {
            try {
                const members = await getAllMembers();
                const memberItems = members.map((member: any) => (
                    <div key={member.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                        <Avatar style={{ marginRight: '8px' }}>{member.name.charAt(0)}</Avatar>
                        {member.name} {member.surname}
                    </div>
                ));
                setSidebarItem([{ content: "Members", value: memberItems }]);
            } catch (error) {
                console.error("Fetch all members error:", error);
            }
        };

        fetchMembers();
    }, []);



    return(
    <React.Fragment>
        <Grid container>
            <Grid item xs={2}>
                <div className='sidebar-container'>
                    <TaskTracerSidebarComponent title="Chatroom" items={sidebarItem}/>
                </div>
            </Grid>
            <Grid item xs={10}>
                <div className='chat-container'>
                    <TaskTracerChatComponent username={username}/>
                </div>  
            </Grid>
        </Grid>

    </React.Fragment>
    )


}

export default TaskTracerChatContainer;