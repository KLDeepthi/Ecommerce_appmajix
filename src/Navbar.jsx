import React from 'react';
import { AppBar, Toolbar, IconButton, Badge} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';
import { Link, useLocation } from 'react-router-dom';

const PrimarySearchAppBar = ({ totalItems }) => {

  const location = useLocation();


  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
        <Link to={"/"} style={{fontSize:'20px',color:'white'}}>E-commerce</Link>
          <div style={{flexGrow: 1,}} />
          {location.pathname === '/products' && (
          <div>
            <IconButton component={Link} to="/products" aria-label="Show cart items" color="inherit"><LanguageOutlinedIcon /></IconButton>
            <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
          )}
          {location.pathname === '/cart' && (
          <div>
            <IconButton component={Link} to="/products" aria-label="Show cart items" color="inherit"><LanguageOutlinedIcon /></IconButton>
            <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
          )}
        </Toolbar>
      </AppBar>

    </>
  );
};

export default PrimarySearchAppBar;
