import React from 'react';
import {Box, AppBar, Toolbar, IconButton, Button} from "@mui/material";
import { Link } from 'react-router-dom'

const Home = () => {

    return (
        <div>
            <Box>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >

                    </IconButton>
                    <Link to="/setup" style={{ textDecoration: 'none', color: '#fff' }}>
                    <Button color="inherit">Team Setup</Button>
                    </Link>
                    <Link to="/report" style={{ textDecoration: 'none', color: '#fff' }}>
                    <Button color="inherit">Team Report</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
        </div>
    );
};

export default Home;
