import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

const ShoppingCart = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: 40 }}>
      <Typography variant="h4" gutterBottom>
        Shopping Cart
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper elevation={3} style={{ padding: 20 }}>
            {/* Product List */}
            <Typography variant="h6" gutterBottom>
              Product Name
            </Typography>
            <Typography variant="body1" gutterBottom>
              Product Description
            </Typography>
            <Typography variant="body1" gutterBottom>
              Price: $10
            </Typography>
            <Button variant="outlined" color="secondary">
              Remove
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={3} style={{ padding: 20 }}>
            {/* Another Product */}
            <Typography variant="h6" gutterBottom>
              Another Product
            </Typography>
            <Typography variant="body1" gutterBottom>
              Product Description
            </Typography>
            <Typography variant="body1" gutterBottom>
              Price: $15
            </Typography>
            <Button variant="outlined" color="secondary">
              Remove
            </Button>
          </Paper>
        </Grid>
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
