import React from "react";
import { Grid } from "@mui/material";
import NavBar from "../../components/nav-bar/NavBar";
import Promocoes from "../../components/Cardapio/Promocoes";
import Pizzas from "../../components/Cardapio/Pizzas";
import Bebidas from "../../components/Cardapio/Bebidas";

const Home: React.FC = () => {
  return (
    <>
      <Grid
        container
        direction="column"
        sx={{
          minWidth: "100vw",
          minHeight: "100vh",
          backgroundColor: "#f5f5f5",
        }}
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
};

export default Home;
