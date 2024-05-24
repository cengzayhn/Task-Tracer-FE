import React from "react";
import { Card, CardContent, Typography, IconButton } from "@mui/material";
import ApartmentSharpIcon from '@mui/icons-material/ApartmentSharp';
import "./styles.css";

interface TaskTracerProjectsCardProps {
    name: string;
}

const TaskTracerProjectsCard: React.FC<TaskTracerProjectsCardProps> = (props) => {

    const { name } = props;

    return (
        <Card className="card-container">
            <CardContent>
                <IconButton className="icon">
                    <ApartmentSharpIcon/>
                </IconButton>
                <Typography variant="h5">
                    {name}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default TaskTracerProjectsCard;
