import * as React from 'react';

import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';

import ICardOrder from '../../interfaces/ICardOrder';
import IPizza from '../../interfaces/IPizza';
import IBebida from '../../interfaces/IBebida';

const LastOrderCard: React.FC<ICardOrder> = ({
  status,
  number,
  pizzas,
  drinks,
  //pizza2flavours
}) => {

  const calcularValorTotal = () => {
    let valorTotal = 0;
    drinks.map(item => valorTotal += item.price);
    pizzas.map(item => valorTotal += item.price);
    return valorTotal;
  };
  
  // const [bebidasObj, setBebidas] = React.useState<IBebida[]>([]);
  // const [pizzasObj, setPizzas] = React.useState<IPizza[]>([]);

  // React.useEffect(() => {
  //   console.log(pizzas);
  //   {drinks?.map((item: string) =>
  //       axios.get('https://cyber-pizza-engsoft.herokuapp.com/bebida/' + item)
  //         .then(resposta_d => {
  //           setBebidas(oldList => [...oldList, resposta_d.data]);
  //         })
  //         .catch(erro_d => {
  //           console.log("erro_d" + erro_d);
  //         })
  //     )}
  //   {pizzas?.map((item: string) =>
  //       axios.get('https://cyber-pizza-engsoft.herokuapp.com/pizza/' + item)
  //         .then(resposta_p => {
  //           setPizzas(oldList => [...oldList, resposta_p.data]);
  //         })
  //         .catch(erro_p => {
  //           console.log("erro_p" + erro_p);
  //         })
  //     )}
  // }, []);

  return (
    <Card sx={{ maxWidth: "95vw" }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Pedido {number} || Status: {status}
          </Typography>
          <Grid sx={{display: "flex", alignItems: "flex-start", flexDirection: "column"}}>
            <Typography>
                Itens:
            </Typography>
            {pizzas?.map( item =>
              <Typography variant="body2" color="text.secondary">
                . {item.name} -- R${item.price}
              </Typography>              
            )}
            {drinks?.map( item =>
              <Typography variant="body2" color="text.secondary">
                . {item.name} -- R${item.price}
              </Typography>
            )}
          </Grid>
          <Grid sx={{display: "flex", alignItems: "flex-end", flexDirection: "column"}}>
              <Typography variant="body2" color="text.secondary">
                Valor total: R${calcularValorTotal()} 
              </Typography>                
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default LastOrderCard;