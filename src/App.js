import React, { useState} from 'react';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './Navbar';
import Home from './Home';
import Cart from './Cart';
import Products from './Products';

function App() {
  const [cart, setCart] = useState([]);

  const getCartTotal = () => {
    return cart.reduce(
      (sum, { quantity }) => sum + quantity,
      0
    );
  };

  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <CssBaseline />
        <Navbar totalItems={getCartTotal()} />
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/products">
            <Products cart={cart} setCart={setCart} />
          </Route>
          <Route exact path="/cart">
            <Cart cart={cart} setCart={setCart} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
