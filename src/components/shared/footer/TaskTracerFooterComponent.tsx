import React from 'react';
import './styles.css';
import { Container } from '@mui/system';
import { Grid } from '@mui/material';

const TaskTracerFooterComponent = () => {

    return(
    <>
        <div>
            <Container maxWidth="lg" className="footer-container">
                <Grid container className='footer-content'>
                    &copy; 2023 - TaskTracer
                </Grid>
            </Container>
        </div>
    </>
    )

}

export default TaskTracerFooterComponent;
