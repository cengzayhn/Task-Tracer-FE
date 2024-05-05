import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import "./styles.css";

interface TaskCardProps {
    title: string;
    description: string;
    setOpenDialog: Function;
    setIsEditMode: Function;
}

const TaskCard: React.FC<TaskCardProps> = (props) => {

    const { title, description, setOpenDialog, setIsEditMode } = props;

    const handleClick =()=>{
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
