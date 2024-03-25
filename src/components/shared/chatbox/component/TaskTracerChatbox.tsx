import { ArrowDownward } from "@mui/icons-material";
import { Button } from "@mui/material";


interface TaskTracerChatboxProps{
    toggleShowChatbox: ()=>void;
}

const TaskTracerChatbox =(props:TaskTracerChatboxProps) => { 

    const {toggleShowChatbox} = props;

    return(
        <>
            <Button onClick={toggleShowChatbox} variant='contained' color='inherit'> 
                    <ArrowDownward/>
                    <span>chatbox</span>
            </Button>
            
        </>
    )    
}



export default TaskTracerChatbox;