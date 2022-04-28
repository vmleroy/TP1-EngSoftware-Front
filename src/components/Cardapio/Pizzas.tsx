import { useEffect, useState } from "react";

import axios from "axios";
import { Grid, Typography } from "@mui/material";

import IPizza from '../../interfaces/IPizza'
import CardapioCardItem from "./cards/CardapioCardItem";
import { useOrderContext } from "../../context/OrderContext";
import Pizza2FlavoursModal from "../modal/Pizza2flavoursModal";

const Pizzas = () => {

  const { order, setOrder } = useOrderContext();
  
  const [openModal, setOpenModal] = useState(false);
  const [idPizzaOrder, setIdPizzaOrder] = useState('');

  const handleCloseModal = (id: string[]) => {
    setOpenModal(false);
    console.log(order);
  };

  const handleClick = (id: string) => {
    setOpenModal(true);
    setIdPizzaOrder(id)
    // let novaPizza = pizza?.find(item => item._id === id);
    // if (novaPizza!)
    //   setOrder({ ...order, pizzas: order.pizzas.push(novaPizza) });
  };

  const [pizza, setPizzas] = useState<IPizza[]>();

  useEffect(() => {
    //Obter pizzas 
    axios.get('https://cyber-pizza-engsoft.herokuapp.com/pizza')
      .then(resposta => {
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
      sx={{ minHeight: "25vh" }}
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
        sx={{ minHeight: "20vh", border: 2, borderColor: "#120458" }}
      >
        {pizza?.map(item =>
          <Grid item sx={{ margin: 2 }} padding="0.5rem">
            <CardapioCardItem
              key={item._id}
              _id={item._id}
              description={item.description}
              name={item.name}
              price={item.price}
              image={item.image}
              handleClick={handleClick}
            />
          </Grid>
        )};
        <Pizza2FlavoursModal
          modalOpen={openModal}
          idPizza={idPizzaOrder}
          pizzas={pizza!}
          handleClose={handleCloseModal}
        />
      </Grid>
    </Grid>
  );
};
export default Pizzas;
