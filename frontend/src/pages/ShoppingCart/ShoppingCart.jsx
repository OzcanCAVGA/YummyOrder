import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ShoppingCardComponent from '../../components/ShoppingCardComponent/ShoppingCardComponent';
import { useAuth } from '../../contexts/AuthContext';
const ShoppingCart = () => {
  const { user, basket, deleteBasket } = useAuth();
  // id: id,
  // name: name,
  // description: description,
  // category: category,
  // price: price,
  // images: images
   return (
    <Container maxWidth="md" style={{ marginTop: 40 }}>
      <Typography variant="h4" gutterBottom>
        Shopping Cart
      </Typography>
      <Grid container spacing={2}>
        {
          basket.map((item, index) => {
            return(
              <ShoppingCardComponent key={index} id={item.id} name={item.name} description={item.description} category={item.category} price={item.price} images={item.images}/>
            )
          })
        }
       
      </Grid>
      <div style={{ marginTop: 20 }}>
        <Button variant="contained" color="primary">
          Checkout
        </Button>
      </div>
    </Container>
  );
};

export default ShoppingCart;
