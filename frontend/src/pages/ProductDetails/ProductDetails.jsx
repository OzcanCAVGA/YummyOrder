import React, { useEffect } from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { Product } from './Product';
import { useParams } from 'react-router-dom'
import { getProduct } from '../../api/ProductApi';
import { useQuery } from 'react-query';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
export const ProductDetails = () => {
    const { productid } = useParams();

    const { isLoading, error, data } = useQuery(["productDetails", productid], () => getProduct(productid))
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error fetching data</div>;
    }
    return (
        <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
            <Box sx={{ flex: 1, maxWidth: '75%', justifyContent: 'center', alignContent: "center", backgroundColor: 'white', borderRadius: 5, padding: 5, boxShadow: 2, }}>
                <Grid container spacing={2}>
                    <Grid xs={5}>
                        <Product name={data.name} description={data.description} category={data.category} price={data.price} />
                    </Grid>

                </Grid>
            </Box>

        </Grid>

    )
}
