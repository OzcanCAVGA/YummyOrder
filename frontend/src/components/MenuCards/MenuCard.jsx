import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
export const MenuCard = (data) => {

    const imgUrl=`https://source.unsplash.com/random/${Math.floor(Math.random() * 101)}`;

    return (
        <div className='flex flex-row justify-around h-max'>
            <Card>
                <CardMedia component="img"
                    image={imgUrl}
                    height='100'

                />
                <CardContent>
                    <Typography variant='h5' component='div'>
                        Lazanya
                    </Typography>
                    <Typography variant='p' component='p'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum perspiciatis officiis nihil sint a consectetur ab doloribus. Nam, placeat fugit.
                    </Typography>
                </CardContent>
                <CardActions className='flex justify-around'>
                    <Button ><Link to="/product-detail">Ürün Detayı</Link></Button>
                    <Button color='success'>Sepete Ekle</Button>
                </CardActions>
            </Card>
        </div>

    )
}
