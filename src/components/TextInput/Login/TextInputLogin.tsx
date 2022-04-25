import React, { ChangeEvent, SetStateAction, useState } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';

interface Props {
  setEmail: React.Dispatch<React.SetStateAction<string | undefined>>;
}


const TextInputLogin: React.FC<Props> = ({
  setEmail
}) => {
  
  const onChangeUsuario = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return (
    <Box sx={{ '& > :not(style)': { m: 1 }, backgroundColor: "lightgray", margin: "1rem" }}>
      <Box 
        sx={{ display: 'flex', alignItems: 'flex-end', width: "25vw"}}
      >
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField 
          id="email" 
          label="Email" 
          variant="standard" 
          required
          onChange={onChangeUsuario}  
          sx={{width: "25vw"}}        
        />
      </Box>
    </Box>
  );

}

export default TextInputLogin;
