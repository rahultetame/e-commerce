import React from 'react';
import { Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <footer style={{ padding: '20px 0', backgroundColor: '#f4f4f4' }}>
      <Container>
        <Typography
          variant='body2'
          color='textSecondary'
          align='center'
        >
          &copy; 2024 E-Commerce App. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
