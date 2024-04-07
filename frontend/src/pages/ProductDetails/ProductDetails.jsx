import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { Product } from './Product';
import { Comments } from './Comments';

const product =
// json uygun hale getir    
{
    "product": {
        "id": 1,
        "name": "Latte",
        "description": "Freshly brewed espresso combined with steamed milk and topped with a light layer of foam.",
        "category": "Icecekler",
        "details": {
            "images": [
                "https://picsum.photos/200",
            ],
            "videos": "",
            "productionStage": "Siparis Alindi",
            "ingredients": "Espresso, Milk, Foam"
        },
        "price": 15
    },
    "comments": [
        {
            "id": 1,
            "user": "CoffeeLover123",
            "comment": "This latte is amazing!",
            "rating": 5
        },
        {
            "id": 2,
            "user": "LatteFanatic",
            "comment": "I love the creamy texture of this latte.",
            "rating": 4
        },
        {
            "id": 3,
            "user": "EspressoExpert",
            "comment": "Perfect balance of espresso and milk.",
            "rating": 4
        },
        {
            "id": 4,
            "user": "EspressoExpert",
            "comment": "Perfect balance of espresso and milk.",
            "rating": 4
        },
        {
            "id": 5,
            "user": "EspressoExpert",
            "comment": "Perfect balance of espresso and milk.",
            "rating": 4
        },
        {
            "id": 6,
            "user": "EspressoExpert",
            "comment": "Perfect balance of espresso and milk.",
            "rating": 4
        },
        {
            "id": 7,
            "user": "EspressoExpert",
            "comment": "Perfect balance of espresso and milk.",
            "rating": 4
        },
        {
            "id": 8,
            "user": "EspressoExpert",
            "comment": "Perfect balance of espresso and milk.",
            "rating": 4
        },
        {
            "id": 9,
            "user": "EspressoExpert",
            "comment": "Perfect balance of espresso and milk.",
            "rating": 4
        },
        {
            "id": 10,
            "user": "EspressoExpert",
            "comment": "Perfect balance of espresso and milk.",
            "rating": 4
        }
    ]
}


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
export const ProductDetails = () => {
    return (
        <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
            <Box sx={{ flex: 1, maxWidth: '75%', justifyContent: 'center', alignContent: "center", backgroundColor: 'white', borderRadius: 5, padding: 5, boxShadow: 2, }}>
                <Grid container spacing={2}>
                    <Grid xs={5}>
                        <Product product={product.product} />
                    </Grid>
                    <Grid xs={7} className="max-h-96 overflow-auto">
                        {
                            product.comments.map(comment => {
                                return <Comments comment={comment} />
                            })
                        }
                    </Grid>
                </Grid>
            </Box>

        </Grid>

    )
}
