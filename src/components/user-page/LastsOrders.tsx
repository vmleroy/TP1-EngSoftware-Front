import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom"

import axios from "axios";
import { Grid, Typography } from "@mui/material";

import IOrder from "../../interfaces/IOrder";
import IBebida from "../../interfaces/IBebida";
import IPizza from "../../interfaces/IPizza";
import LastOrderCard from "./LastOrderCard";


const LastOrders = () => {

    // const { id } = useParams();
    const id = "626868b41c5d5bab991d013d";

    const [order, setOrder] = useState<IOrder[]>([]);

    useEffect(() => {
        axios.get('https://cyber-pizza-engsoft.herokuapp.com/pedido/')
          .then (resposta => {
            setOrder(resposta.data);
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
                    Ultimos pedidos
                </Typography>
            </Grid>
            <Grid
                container
                item
                xs={12}
                alignItems="left"
                direction="column"
                sx={{ minHeight: "20vh", border: 2, borderColor: "#120458" }}
            >
                {order?.map((pedido:IOrder) => 
                    <Grid item sx={{ backgroundColor: 'white', margin: 2 }} padding="0.5rem">
                        <LastOrderCard 
                            status={pedido.status}
                            number={pedido.number}
                            pizzas={pedido.pizzas}
                            drinks={pedido.drinks}
                        />
                    </Grid>
                )}
            </Grid>
        </Grid>
    );
};
export default LastOrders;
