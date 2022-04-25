import { useEffect, useState } from "react";

import axios from "axios";
import { Grid, Typography } from "@mui/material";

import IPizza from '../../interfaces/IPizza'
import CardapioCardItem from "./CardapioCardItem";

const Pizzas = () => {

  const [pizza, setPizzas] = useState<IPizza[]>();

  useEffect(() => {
    //Obter pizzas 
    axios.get('https://cyber-pizza-engsoft.herokuapp.com/pizza')
      .then (resposta => {
        setPizzas(resposta.data);
      })
      .catch(erro => {
        console.log(erro)
      });
  }, []);

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
          Pizzas
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
          {pizza?.map(item =>
            <Grid item sx={{ backgroundColor: 'white', margin: 2 }} padding="0.5rem">
              <CardapioCardItem 
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
export default Pizzas;
