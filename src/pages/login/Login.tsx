import React, { useState } from 'react';
import axios from "axios";

import { Button, Grid, Typography } from '@mui/material';

import TextInputLogin from '../../components/text-input/login/TextInputLogin';
import TextInputPassword from '../../components/text-input/password/TextInputPassword';
import NavBar from '../../components/nav-bar/NavBar';



const Login: React.FC = () => {

    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();

    const handleClick = (email: string|undefined, password: string|undefined) => {
        axios.post('http://localhost:8000/login', {email:email, password:password})
            .then (resposta => {
                console.debug(resposta.data);
            })
            .catch(erro => {
                console.log(erro)
            });
        console.log("Verificando login")
    }
    return (
        <Grid
            sx={{ minWidth: "100vw", minHeight: "100vh", backgroundColor: '#f5f5f5' }}
        >
            <NavBar /> 
            <Grid
                container
                item
                alignContent="center"
                alignItems="center"
                justifyContent="center"
                direction="column"  
                sx={{ minWidth: "80vw", minHeight: "80vh"}}              
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
                <Button variant="outlined"
                        sx={{ margin: "0.5rem" }}
                        onClick={() => {handleClick(email, password)}}
                > Login </Button>
                <Button variant="outlined" sx={{ margin: "0.5rem" }}> Cadastro </Button>
            </Grid>
        </Grid>
    );

};

export default Login;