import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import Reaction from '../reaction/Reaction';
export default function ProductCard({product}) {
  const[addProduct,setaddProuct]=useState(0)
const handelclick=()=>{
setaddProuct(addProduct+1)
  }
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
        <Button size="small" variant="outlined" href="#outlined-buttons" onClick={handelclick}>Add to Cart</Button>
         {addProduct}
         <Button  size="large">{product.price}Nrs</Button>
      </CardActions>
    </Card>
  );
}
