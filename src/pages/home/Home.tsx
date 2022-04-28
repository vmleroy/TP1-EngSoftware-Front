import React from 'react';

import { Box, Grid } from '@mui/material';
import { } from '@mui/icons-material';

import NavBar from '../../components/nav-bar/NavBar'
import Pizzas from '../../components/cardapio/Pizzas'
import Promocoes from '../../components/cardapio/Promocoes'
import Bebidas from '../../components/cardapio/Bebidas'

const Home: React.FC = () => {
    return (
        <>
            <Grid
                container
                direction="column"
                sx={{ minWidth: "100vw", minHeight: "100vh", backgroundColor: '#f5f5f5' }}
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
                    <Promocoes />
                    <Pizzas />
                    <Bebidas />
                </Grid>
            </Grid>
        </>
    );
}

export default Home;