import './styles.css';
import { Avatar } from '@mui/material';
interface TaskTracerProfileProps {
    userName: string;
}


const TaskTracerUserProfile:React.FC<TaskTracerProfileProps> = ({userName}) => {

    const names = userName.split(' ');

    const initials = names.map(name => name.charAt(0).toUpperCase()).join('');

    return(
    <>
        <Avatar className='avatar'>{initials}</Avatar>
    </>
    )

}

export default TaskTracerUserProfile;
