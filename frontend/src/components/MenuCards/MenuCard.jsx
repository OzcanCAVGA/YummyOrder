import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import { useAuth } from '../../contexts/AuthContext';

export const MenuCard = ({ id, name, description, category, price, images }) => {
  const { user, basket, addBasket, deleteBasket } = useAuth();
  const isInBasket = () => {
    return basket.some(item => item.id === id);
  };
  const handleBasket = async () => {
    if (user) {
      if (!isInBasket()) {
        addBasket({
          id: id,
          name: name,
          description: description,
          category: category,
          price: price,
          images: images
        });
      } else {
        deleteBasket({
          id: id,
          name: name,
          description: description,
          category: category,
          price: price,
          images: images
        })
      }

    }
  };



  return (
    <Card sx={{ maxWidth: 300, minWidth: 300, maxHeight: 500 }}>
      <CardMedia
        sx={{ maxHeight: 200, minHeight: 200 }}
        component="img"
        height="200"
        min-width="200"
        image={images}
        alt={name}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" mt={2}>
          Kategori: <span className='text-black font-bold italic font-sans '>{category}</span>
        </Typography>
        <Typography gutterBottom variant="h5" component="div" >
          <span className='text-3xl mt-14'>{name} </span>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>

      </CardContent>
      <CardActions>
        {/* <Button
          sx={{ paddingLeft: 2 }}
          size="small"
          color="primary"
          variant="contained"
          startIcon={<FullscreenIcon />}
          component={Link}
          to={`/product-detail/${id}`}
        >
          Ürün Detayları
        </Button> */}
        <Button
          size="small"
          style={{ backgroundColor: isInBasket() ? 'red' : '' }}
          variant="contained"
          startIcon={<ShoppingCartIcon />}
          onClick={handleBasket}
        >
          Sepete Ekle
        </Button>

      </CardActions>
    </Card>
  );
};