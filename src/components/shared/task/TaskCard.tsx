import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import "./styles.css";

interface TaskCardProps {
    title: string;
    description: string;
}

const TaskCard: React.FC<TaskCardProps> = (props) => {

    const { title, description } = props;

    return (
        <Card className="task-card-container">
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
