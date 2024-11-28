import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header = () => {
  return (
    <AppBar position='sticky'>
      <Toolbar>
        <Typography
          variant='h6'
          style={{ flexGrow: 1 }}
        >
          <Link
            to='/'
            style={{ color: 'white', textDecoration: 'none' }}
          >
            E-Commerce
          </Link>
        </Typography>
        <Button
          color='inherit'
          component={Link}
          to='/cart'
        >
          Cart
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
