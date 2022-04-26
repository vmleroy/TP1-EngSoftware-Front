import React from 'react';

import { Box, Grid, Typography } from '@mui/material';
import { } from '@mui/icons-material';

import NavBar from '../../components/nav-bar/NavBar';

const Carrinho: React.FC = () => {

    return (
        <Grid
            container
            direction="column"
            sx={{ minWidth: "100vh", minHeight: "100vh", backgroundColor: '#121212' }}
        >
            <NavBar />
            <Grid
                container
                item
                justifyContent="center"
                alignItems="center"
                rowSpacing={4}
                marginTop="0.5rem"
            >
                <Grid sx={{ backgroundColor: "#120458", minWidth: "100vh"}} >
                    <Typography  color="#ffdd6b" sx={{ ml:2, mr:2 }}> 
                        Valor total: 0 
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );

}

export default Carrinho;