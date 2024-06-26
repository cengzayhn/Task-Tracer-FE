import React, { useState } from 'react';
import './styles.css';
import { Avatar, Popover, Button, Typography } from '@mui/material';

interface TaskTracerProfileProps {
    userName: string;
    setUsername: Function;
}

const TaskTracerUserProfile: React.FC<TaskTracerProfileProps> = ({ userName, setUsername }) => {
    const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

    const names = userName.split(' ');
    const initials = names.map(name => name.charAt(0).toUpperCase()).join('');

    const handleAvatarClick = (event: React.MouseEvent<HTMLDivElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSignOut = () => {
        setUsername("");
        window.location.href = '/login';
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <>
            <Avatar className='avatar' onClick={handleAvatarClick}>{initials}</Avatar>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <div className="popover-content">
                    <Typography className="username">{userName}</Typography>
                    <Button 
                        onClick={handleSignOut} 
                        color="inherit" 
                        size="small"
                        className="sign-out-button"
                    >
                        Sign out
                    </Button>
                </div>
            </Popover>
        </>
    );
};

export default TaskTracerUserProfile;
