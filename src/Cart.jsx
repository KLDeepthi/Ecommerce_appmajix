import React from 'react';
import './style1.css';
import {Grid,Button} from '@material-ui/core';
import { Card, CardMedia, CardContent, CardActions } from '@material-ui/core';


const Cart = ({ cart, setCart }) => {

  const clearCart = () => {
    setCart([]);
  };

  const removeFromCart = (productToRemove) => {
    setCart(
      cart.filter((product) => product !== productToRemove)
    );
  };


  return (
    <div style={{padding:'10vh'}}>
      <h1>Cart</h1>
      {cart.length > 0 && (
        <button style={{alignContent:"right"}} onClick={clearCart}>Clear Cart</button>
      )}
      <div className="products" style={{padding:'40px'}}>
      <Grid container spacing={4}>
        {cart.map((product, idx) => (
          <div className="product" key={idx} style={{padding:'40px'}}>
            <Card style={{ width: '25rem' }}>
              <CardMedia image={product.image} alt={product.name} style={{width:'400px',height:'300px'}} />
              <CardContent>
                <div style={{display: 'flex',justifyContent:'space-between',}}>
                  <h2>{product.name}</h2>
                  <h2>${product.price}</h2>
                </div>
                <p>{product.description}</p>
              </CardContent>
                <CardActions style={{display: 'flex',justifyContent:'flex-end',}}>
                  <div style={{display: 'flex',alignItems: 'center',}}>
                    <h5>&nbsp;Quantity={product.quantity}&nbsp;</h5>
                  </div>
                  <Button variant="contained" type="button" color="secondary" onClick={() => removeFromCart(product)}>Remove</Button>
                </CardActions>
            </Card>
          </div>
        ))}
        </Grid>
      </div>

    </div>
  );
};

export default Cart;
