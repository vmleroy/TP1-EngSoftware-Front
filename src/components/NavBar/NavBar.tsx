import React from 'react';

import { CssBaseline, AppBar, Typography, Toolbar, Avatar, IconButton, Grid } from '@mui/material';


const NavBar = () => {
    return (
        <>
            <CssBaseline />
            <Grid sx={{ width: "100vw" }}>
                <AppBar position="static" sx={{ backgroundColor: '#120458' }}>
                    <Toolbar>
                        <Avatar src={'/images/logo_1_95H.png'} variant='square'/>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, margin: 1, color: '#ffdd6b' }}>
                            Pizzaria
                        </Typography>
                        <IconButton color='primary'>
                            <Avatar src={'/images/carrinho_3.png'} variant='square'/>
                        </IconButton>
                        <IconButton color='primary' >
                            <Avatar src={'/images/login_3.png'}/>
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </Grid>
        </>
    );
}

export default NavBar;