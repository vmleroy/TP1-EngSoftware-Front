import React from 'react';

import { Box, Grid } from '@mui/material';
import { } from '@mui/icons-material';

import NavBar from '../../components/NavBar/NavBar'
import Pizzas from '../../components/Cardapio/Pizzas'
import Promocoes from '../../components/Cardapio/Promocoes'
import Bebidas from '../../components/Cardapio/Bebidas'

const Home = () => {
    return (
        <>
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
                    marginTop="1rem"
                >
                    <Promocoes />
                    <Pizzas />
                    <Bebidas />
                </Grid>
            </Grid>
        </>
    );
}

export default Home;