import React from 'react';

import { Box, Grid } from '@mui/material';
import { } from '@mui/icons-material';

const Carrinho = () => {

    return (
        <Grid
                container
                direction="column"
                sx={{ minWidth: "100vh", minHeight: "100vh", backgroundColor: '#121212' }}
            >
            <Grid
                sx={{ backgroundColor: "#120458" }}
                >
                <Grid
                    container
                    sx={{
                        fontWeight: "500",
                        fontSize: "1.5rem",
                        color: '#ffdd6b',
                    }}
                >
                    <Grid item xs={11}>
                        Valor Total
                    </Grid>
                    <Grid item xs={1}>
                        0
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );

}

export default Carrinho;