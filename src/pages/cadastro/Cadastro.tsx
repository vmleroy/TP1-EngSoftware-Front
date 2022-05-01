import React, { useState } from 'react';
import axios from "axios";

import { Button, Grid, Typography } from '@mui/material';

import TextInput from '../../components/text-input/TextInput';
import TextInputPassword from '../../components/text-input/password/TextInputPassword';
import NavBar from '../../components/nav-bar/NavBar';



const Cadastro: React.FC = () => {

    const [name, setName] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [cpf, setCPF] = useState<string>();
    const [phone, setPhone] = useState<string>();
    const [address, setAddress] = useState<string>();

    const handleClick = (email: string|undefined,
                         password: string|undefined,
                         name: string|undefined,
                         cpf: string|undefined,
                         phone: string|undefined,
                         address: string|undefined) => {
        axios.post('http://localhost:8000/usuario',
            {
                email:email,
                password:password,
                name:name,
                cpf: cpf,
                phone: phone,
                address: address
            })
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
            sx={{ minWidth: "100vh", minHeight: "100vh", backgroundColor: '#f5f5f5' }}
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
                    CADASTRO
                </Typography>
                <TextInput setValue={setName} label="Name"/>
                <TextInput setValue={setEmail} label="Email"/>
                <TextInput setValue={setCPF} label="CPF"/>
                <TextInput setValue={setPhone} label="Phone"/>
                <TextInput setValue={setAddress} label="Address"/>
                <TextInputPassword setPassword={setPassword} />
                <Button variant="outlined"
                        sx={{ margin: "0.5rem" }}
                        onClick={() => {handleClick(
                            email,
                            password,
                            name,
                            cpf,
                            phone,
                            address
                        )}}
                > Cadastro </Button>
            </Grid>
        </Grid>
    );

};

export default Cadastro;