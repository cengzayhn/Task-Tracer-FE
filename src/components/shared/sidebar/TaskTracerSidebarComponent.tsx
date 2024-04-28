import React, { useState } from "react";
import { Typography, List, ListItem, ListItemText, Collapse, Divider } from '@mui/material';
import './styles.css';

interface TaskTracerSidebarComponentProps {
    title: string;
    items: { content: string; value: string[] }[];
}

const TaskTracerSidebarComponent: React.FC<TaskTracerSidebarComponentProps> = (props) => {
    const { title, items } = props;
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className='sidebarContent'>
            <Typography variant="h4" gutterBottom className="sidebarTitle">
                {title}
            </Typography>
            <List component="nav" aria-label="sidebar-menu" className="sidebar-menu">
                {items.map((item, index) => (
                    <React.Fragment key={index}>
                        <ListItem
                            button
                            onClick={() => handleClick(index)}
                            className='listItem'
                            style={{ backgroundColor: openIndex === index ? "#f0f0f0" : "transparent", color: openIndex === index ? "#255957" : "#C8D5D5", transition: "background-color 0.3s, color 0.3s"}}
                        >
                            <ListItemText
                                primary={item.content}
                                primaryTypographyProps={{ className: 'listItemText' }}
                            />
                        </ListItem>
                        <Collapse in={openIndex === index} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding className='nestedList'>
                                {item.value.map((val, idx) => (
                                    <ListItem key={idx} button style={{ paddingLeft: "30px" }}>
                                        <ListItemText primary={val} />
                                    </ListItem>
                                ))}
                            </List>
                        </Collapse>
                        {index < items.length - 1 && <Divider />}
                    </React.Fragment>
                ))}
            </List>
        </div>
    );
}

export default TaskTracerSidebarComponent;
