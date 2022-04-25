import { useEffect, useState } from "react";

import axios from "axios";
import { Grid, Typography } from "@mui/material";

import IBebida from '../../interfaces/IBebida'
import CardItem from "./CardItem";

const Bebidas = () => {

  const [bebida, setBebidas] = useState<IBebida[]>();

  useEffect(() => {
    //Obter pizzas 
    axios.get('https://cyber-pizza-engsoft.herokuapp.com/bebida')
      .then (resposta => {
        setBebidas(resposta.data);
      })
      .catch(erro => {
        console.log(erro)
      });
  }, []);

  return (
    <Grid
      container
      width="95%"
      margin="2rem"
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
          Bebidas
        </Typography>
      </Grid>
      <Grid 
        container
        item 
        xs={12} 
        alignItems="center"
        direction="row"
        sx={{ minHeight: "20vh", border: 2, borderColor:"#120458" }}
      >
          {bebida?.map(item =>
            <Grid item sx={{ backgroundColor: 'white', margin: 2 }} padding="0.5rem">
              <CardItem 
                key={item._id}
                _id={item._id}
                description={item.description}
                name={item.name}
                price={item.price}
                image={item.image}
              />
            </Grid>
          )};
      </Grid>
    </Grid>
  );
};
export default Bebidas;
