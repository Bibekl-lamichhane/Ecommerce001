import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Reaction from '../reaction/Reaction';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Add from '@mui/icons-material/Add';
export default function ProductCard({ handelAddtoCartClick,product}) {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={product.slung}
        height="140"
        image={product.images}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {product.description}
        </Typography>
      </CardContent>
      <CardActions className='flex justify-around'>
       <Reaction/>
        <Button onClick={()=>handelAddtoCartClick()}>+ Add to Cart</Button>
         <p className='text-xl text-blue-500'  size="large">{product.price}<span className='text-lg text-blue-500 mx-0.5'>Nrs</span></p>
      </CardActions>
    </Card>
  );
}
