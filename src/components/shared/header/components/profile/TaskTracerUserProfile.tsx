import './styles.css';
import { Avatar } from '@mui/material';
interface TaskTracerProfileProps {
    userName: string;
}


const TaskTracerProfile:React.FC<TaskTracerProfileProps> = ({userName}) => {

    const names = userName.split(' ');

    const initials = names.map(name => name.charAt(0).toUpperCase()).join('');

    return(
    <>
        <Avatar style={{width:'7vh', height:'6vh', marginTop:'1vh'}}>{initials}</Avatar>
    </>
    )

}

export default TaskTracerProfile;
