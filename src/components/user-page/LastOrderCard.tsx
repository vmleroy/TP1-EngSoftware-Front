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

  const [bebidasObj, setBebidas] = React.useState<IBebida[]>([]);
  const [pizzasObj, setPizzas] = React.useState<IPizza[]>([]);

  React.useEffect(() => {
    {drinks?.map((item: string) =>
        axios.get('https://cyber-pizza-engsoft.herokuapp.com/bebida/' + item)
          .then(resposta_d => {
            setBebidas([...bebidasObj, resposta_d.data]);
          })
          .catch(erro_d => {
            console.log("erro_d" + erro_d);
          })
      )}
    {pizzas?.map((item: string) =>
        axios.get('https://cyber-pizza-engsoft.herokuapp.com/pizza/' + item)
          .then(resposta_p => {
            setPizzas([...pizzasObj, resposta_p.data]);
          })
          .catch(erro_p => {
            console.log("erro_p" + erro_p);
          })
      )}
  }, []);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Pedido
          </Typography>
          {pizzasObj?.map( (item: IPizza) =>
            <Typography variant="body2" color="text.secondary">
              . {item.name}
            </Typography>
          )};
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default LastOrderCard;