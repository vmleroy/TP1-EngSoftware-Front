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
    const id = "625f6f723ac62e5133ee0fde";

    const [order, setOrder] = useState<IOrder[]>();
    const [bebidas, setBebidas] = useState<IBebida[]>([]);
    const [pizzas, setPizzas] = useState<IPizza[]>([]);

    useEffect(() => {
        axios.get('https://cyber-pizza-engsoft.herokuapp.com/pedido/' + id)
          .then (resposta => {
            setOrder(resposta.data);
            const order_res = resposta.data;
            {order_res?.drinks?.map( (item:string) => 
                axios.get('https://cyber-pizza-engsoft.herokuapp.com/bebida/' + item)
                    .then (resposta_d => {
                        setBebidas([...bebidas, resposta_d.data]);
                    })
                    .catch(erro_d => {
                        console.log("erro_d" + erro_d);
                    })
            )}
            {order_res?.pizzas?.map( (item:string) => 
                axios.get('https://cyber-pizza-engsoft.herokuapp.com/pizza/' + item)
                    .then (resposta_p => {
                        setPizzas([...pizzas, resposta_p.data]);
                    })
                    .catch(erro_p => {
                        console.log("erro_p" + erro_p);
                    })
            )}
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
                <Grid item sx={{ backgroundColor: 'white', margin: 2 }} padding="0.5rem">
                    {order?.map((pedido:IOrder) => 
                        <LastOrderCard 
                            status={pedido.status}
                            number={pedido.number}
                            pizzas={pedido.pizzas}
                            drinks={pedido.drinks}
                        />
                    )}
                </Grid>
            </Grid>
        </Grid>
    );
};
export default LastOrders;
