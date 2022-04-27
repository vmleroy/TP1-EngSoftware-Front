import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

import axios from "axios";
import { Grid, Typography } from "@mui/material";

import IAddress from "../../interfaces/IAddress";


const AddressData = () => {

    const { id } = useParams();

    const [dados, setDados] = useState<IAddress>();


    useEffect(() => {
        //Obter dados do usuario 
        axios.get('https://cyber-pizza-engsoft.herokuapp.com/usuario/' + id)
            .then(resposta_1 => {
                const address_id = resposta_1.data.address;
                axios.get('https://cyber-pizza-engsoft.herokuapp.com/endereco/' + address_id)
                    .then (resposta_2 => {
                        setDados(resposta_2.data);
                    })
                    .catch(erro_2 => {
                        console.log(erro_2)
                    });
            })
            .catch(erro_1 => {
                console.log(erro_1)
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
                <Typography sx={{ color: "white", ml:1, mt:0.5 }}> Cep: {dados?.cep} </Typography>
                <Typography sx={{ color: "white", ml:1, mt:0.5 }}> Rua: {dados?.street} </Typography>
                <Typography sx={{ color: "white", ml:1, mt:0.5 }}> Bairro: {dados?.district} </Typography>
                <Typography sx={{ color: "white", ml:1, mt:0.5 }}> Numero: {dados?.number} </Typography>                
                <Typography sx={{ color: "white", ml:1, mt:0.5 }}> Cidade: {dados?.city} </Typography>
                
            </Grid>
        </Grid>
    );
};
export default AddressData;
