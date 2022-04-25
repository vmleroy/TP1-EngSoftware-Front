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
        </Grid>
    );

};

export default Login;