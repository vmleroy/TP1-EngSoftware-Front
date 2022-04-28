import { useEffect, useState } from "react";

import axios from "axios";
import { Grid, Typography } from "@mui/material";

import { useOrderContext } from "../../context/OrderContext";


const ItensCarrinho = () => {

  const { order, setOrder } = useOrderContext();

  return (
    <Grid
      container
      width="95%"
      margin="0.5rem"
      alignItems="center"
      direction="row"
      sx={{ minHeight: "25vh"}}
    >
      <Grid item xs={12} sx={{ minHeight: "5vh", backgroundColor: '#120458' }}>
        <Typography
          sx={{
            fontWeight: "600",
            fontSize: "1.5rem",
            color: '#ffdd6b',
            margin: "1rem"
          }}
        >
          Itens no carrinho
        </Typography>
      </Grid>
      <Grid 
        container
        item 
        xs={12} 
        sx={{ minHeight: "20vh", border: 2, borderColor:"#120458" }}
      >
        <Grid
          container
          item
          direction="column"
          sx={{ ml:2 }}
        > 
          {order?.pizzas?.map(item =>
            <Typography>
              Pizza: {item.name}
            </Typography>
          )}
          {order?.pizza2flavors?.map(item =>
            <Typography>
              Pizza meio-meio: {item.name}
            </Typography>
          )}
          {order?.drinks?.map(item =>
            <Typography>
              Bebida: {item.name}
            </Typography>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};
export default ItensCarrinho;
