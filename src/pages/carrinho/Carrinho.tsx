import React, { useEffect } from 'react';

import { Box, Button, Grid, Typography } from '@mui/material';
import { } from '@mui/icons-material';

import NavBar from '../../components/nav-bar/NavBar';
import { useOrderContext } from '../../context/OrderContext';
import ItensCarrinho from '../../components/carrinho/ItensCarrinho';

const Carrinho: React.FC = () => {

    const { order, setOrder } = useOrderContext();

    const finalizarPedido = () => {
        console.log(order)
    }

    const calcularValorTotal = () => {
        let valorTotal = 0;
        order?.pizzas?.map(item => valorTotal += item.price);
        order?.pizza2flavors?.map(item => valorTotal += item.price);
        order?.drinks?.map(item => valorTotal += item.price);
        return valorTotal;
    };

    useEffect(() => {
        console.log("tela atualizou");
      }, []);

    return (
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
                <ItensCarrinho />
                <Grid sx={{ backgroundColor: "#120458", minWidth: "100vw" }} >
                    <Typography color="#ffdd6b" sx={{ ml: 2, mr: 2 }}>
                        Valor total: {calcularValorTotal()}
                    </Typography>
                </Grid>
                <Button
                    variant='outlined'
                    onClick={() => {finalizarPedido()} }
                    sx={{minWidth: "5vw", mt: 2}}
                >
                    Finalizar pedido
                </Button>
            </Grid>
        </Grid>
    );

}

export default Carrinho;