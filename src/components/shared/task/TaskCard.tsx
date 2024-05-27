import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import "./styles.css";

interface TaskCardProps {
    id: string;
    title: string;
    description: string;
    setOpenDialog: Function;
    setIsEditMode: Function;
    setSelectedTask: Function;
}

const TaskCard: React.FC<TaskCardProps> = (props) => {

    const { id, title, description, setOpenDialog, setIsEditMode, setSelectedTask } = props;

    const handleClick =()=>{
        setSelectedTask({id:id, title:title, description:description});
        setOpenDialog(true);
        setIsEditMode(true);
    }

    return (
        <Card className="task-card-container" onClick={handleClick}>
            <CardContent>
                <Typography variant="h5">
                    {title}
                </Typography>
                <Typography variant="body2">
                    {description}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default TaskCard;
