import React, { useState } from 'react';

import { Button, Grid, Typography } from '@mui/material';

import TextInputLogin from '../../components/TextInput/Login/TextInputLogin';
import TextInputPassword from '../../components/TextInput/Password/TextInputPassword';
import NavBar from '../../components/NavBar/NavBar';



const Login = () => {

    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();

    return (
        <Grid
            sx={{ minWidth: "100vh", minHeight: "100vh", backgroundColor: '#121212' }}
        >
            <NavBar /> 
            <Grid
                container
                item
                alignContent="center"
                alignItems="center"
                justifyContent="center"
                direction="column"  
                sx={{ minWidth: "80vh", minHeight: "80vh"}}              
            >
                <Typography sx={{
                    fontWeight: "1500",
                    fontSize: "5rem",
                    color: '#ffdd6b',
                }}>
                    LOGIN
                </Typography>
                <TextInputLogin setEmail={setEmail} />
                <TextInputPassword setPassword={setPassword} />
                <Button variant="outlined" sx={{ margin: "0.5rem" }}> Login </Button>
                <Button variant="outlined" sx={{ margin: "0.5rem" }}> Cadastro </Button>
            </Grid>
        </Grid>
    );

};

export default Login;