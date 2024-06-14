import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import ShoppingCardComponent from '../../components/ShoppingCardComponent/ShoppingCardComponent';
import { useAuth } from '../../contexts/AuthContext';
import { useState } from 'react';
import { addOrder } from '../../api/OrderApi';
const ShoppingCart = () => {
  const tableNumbers = [
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' }
  ];

  const { user, basket, deleteBasket, resetBasket } = useAuth();
  const [tableNumber, setTableNumber] = useState(1);

  const handleTableNumber = (event) => {
    setTableNumber(event.target.value);
  }
  const handleSubmit = () => {
    if (user) {
      basket.map(async (item) => {
        try {
          // await addOrder(user._id, item.id, tableNumber)
          await addOrder({userid:user._id, productid:item.id, tableNumber:tableNumber})
        } catch (error) {
          console.log(error);
        }
        resetBasket();
      })
    }
  }
  return (
    <Container maxWidth="md" style={{ marginTop: 80 }}>
      <Typography variant="h4" gutterBottom>
        Sepet 
      </Typography>
      <Grid container spacing={2}>
        {basket.map((item, index) => (
          <ShoppingCardComponent
            key={index}
            id={item.id}
            name={item.name}
            description={item.description}
            category={item.category}
            price={item.price}
            images={item.images}
          />
        ))}
      </Grid>
      <div className='mt-5'>
        <TextField
          required
          id="tableNumber"
          name="tableNumber"
          select
          label="Masa Numarası"
          sx={{ minWidth: 250, background: "white" }}
          value={tableNumber}
          onChange={handleTableNumber}
        >
          {tableNumbers.map((tn) => (
            <MenuItem key={tn.value} value={tn.value}>
              {tn.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div style={{ marginTop: 30 }}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          İşlemi Tamamla
        </Button>
      </div>
    </Container>
  );
};

export default ShoppingCart;
