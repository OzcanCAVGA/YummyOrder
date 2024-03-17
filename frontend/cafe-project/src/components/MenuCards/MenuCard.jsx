import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
export const MenuCard = () => {
    return (
        <div className='flex flex-row justify-around h-max'>
            <Card>
                <CardMedia component="img"
                    image='https://source.unsplash.com/random'
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
                    <Button >Detaylar</Button>
                    <Button color='success'>Sepete Ekle</Button>
                </CardActions>
            </Card>
        </div>

    )
}
