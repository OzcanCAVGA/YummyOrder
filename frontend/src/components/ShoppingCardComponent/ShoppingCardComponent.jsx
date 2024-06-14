import React from 'react'
import { Paper, Grid, Typography, Button} from '@mui/material'
import { useAuth } from '../../contexts/AuthContext';
function ShoppingCardComponent({id,name, description, category, price, images}) {
    const { user, basket, deleteBasket } = useAuth();
    const handleDeleteBasket = async () => {
        if (user) {
            deleteBasket({
                id: id,
                name: name,
                description: description,
                category: category,
                price: price,
                images: images
              })
        }
      };

  return (
    <Grid item xs={12}>
          <Paper elevation={3} style={{ padding: 20 }}>
            {/* Product List */}
            <Typography variant="h6" gutterBottom>
              {name}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {description}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {price}
            </Typography>
            <Button variant="outlined" color="secondary" onClick={handleDeleteBasket} sx={{color: `red`}}>
              Kaldır
            </Button>
          </Paper>
        </Grid>
  )
}

export default ShoppingCardComponent