import React, { useState } from 'react';

import 
  { Button, Modal, Grid, Switch, FormControl, 
  InputLabel, Select, MenuItem, SelectChangeEvent, Typography } 
from '@mui/material';

import IPizza from '../../interfaces/IPizza';

interface Props {
  modalOpen: boolean,
  idPizza: string,
  pizzas: IPizza[],
  handleClose: (id: string[]) => void
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Pizza2FlavoursModal: React.FC<Props> = ({
  modalOpen, idPizza, pizzas, handleClose
}) => {

  const [meioPizza, setMeioPizza] = useState(false);
  const [pizza, setPizza] = useState<string>('');
  const [idPizzas, setIdPizzas] = useState<string[]>([])


  const handleClick = () => {
    if (meioPizza) {
      setIdPizzas(oldArray => [...oldArray, pizza]);  
    }
    setIdPizzas(oldArray => [...oldArray, idPizza]);
    console.log(idPizzas);
    handleClose(idPizzas);
  }

  const handleChange = (event: SelectChangeEvent) => {
    setPizza(event.target.value as string);
  };

  return (
    <Modal
      open={modalOpen}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Grid
        container
        alignSelf="center"
        direction="column"
        justifyContent="center"
        sx={style}
      >
        <Typography>Deseja Pizza meio a meio?</Typography>
        <Switch onChange={(e) => { setMeioPizza(e.target.checked) }}
          defaultChecked={false}
        />
        {meioPizza &&
          <Grid>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={pizza}
                label="Sabores"
                onChange={handleChange}
              >
                {pizzas?.map((item: IPizza) => 
                  <MenuItem value={item._id}>{item.name}</MenuItem>
                )}
              </Select>
            </FormControl>
          </Grid>
        }
        <Button
          onClick={() => { handleClick() }}
          sx={{ margin: 2 }}
        >
          Adicionar ao carrinho
        </Button>
      </Grid>
    </Modal>
  )
}

export default Pizza2FlavoursModal;