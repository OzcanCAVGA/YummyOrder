import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, Route } from 'react-router-dom';
export const MenuCard = ({id, name, description, category, price}) => {


    return (
        <div className='flex flex-row justify-around h-max'>
            <Card>
                <CardMedia component="img"
                //    image={imgUrl}
                    height='100'

                />
                <CardContent>
                    <Typography variant='h5' component='div'>
                        {name}
                    </Typography>
                    <Typography variant='p' component='p'>
                        {description}
                    </Typography>
                </CardContent>
                <CardActions className='flex justify-around'>
                    {/* <Button><Link to={`/product-detail/${product.product._id}`}>Ürün Detayı</Link></Button> */}
                    <Link to={`/product-detail/${id}`}>Ürün Detayı</Link>
                    <Button color='success'>Sepete Ekle</Button>
                </CardActions>
            </Card>
        </div>

    )
}
