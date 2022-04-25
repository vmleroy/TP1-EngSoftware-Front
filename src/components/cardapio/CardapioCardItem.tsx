import { FC, useState } from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import ICard from '../../interfaces/ICard'

const CardapioCardItem: FC<ICard> = ({
    description,
    image,
    name,
    price,
    _id
}) => {
    return (
        <Card sx={{ maxWidth: 200 }}>
            <CardMedia
            component="img"
            height="140"
            image={image}
            alt={name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
                <Typography variant="body2" sx={{mt: 2}}>
                        R$: {price}
                </Typography>
            </CardContent>
            <CardActions>
                <Button 
                    size="small"
                    variant = "outlined"
                >
                    Adicionar ao carrinho
                </Button>
            </CardActions>
        </Card>
    );
}

export default CardapioCardItem;