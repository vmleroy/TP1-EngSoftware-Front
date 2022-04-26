import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

import axios from "axios";
import { Grid, Typography } from "@mui/material";

import IUser from "../../interfaces/IUser";


const UserData = () => {

    const { id } = useParams();

    const [dados, setDados] = useState<IUser>();


    useEffect(() => {
        //Obter dados do usuario 
        axios.get('https://cyber-pizza-engsoft.herokuapp.com/usuario/' + id)
            .then(resposta => {
                setDados(resposta.data);
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
                    Dados do usuario
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
                <Typography sx={{ color: "white", ml:1, mt:0.5 }}> Nome: {dados?.name} </Typography>
                <Typography sx={{ color: "white", ml:1, mt:0.5 }}> Email: {dados?.email} </Typography>
                <Typography sx={{ color: "white", ml:1, mt:0.5 }}> Cpf: {dados?.cpf} </Typography>
                <Typography sx={{ color: "white", ml:1, mt:0.5 }}> Telefone: {dados?.phone} </Typography>                
                
            </Grid>
        </Grid>
    );
};
export default UserData;
