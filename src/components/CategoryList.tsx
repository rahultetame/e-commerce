import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { path } from '../routes/Routers';

interface Category {
  name: string;
  icon: string; // Optional: if you want to add icons to categories
  link: string;
}

const categories: Category[] = [
  { name: 'Electronics', icon: '📱', link: path.CATEGORY },
  { name: 'Fashion', icon: '👗', link: path.CATEGORY },
  { name: 'Home & Furniture', icon: '🏠', link: path.CATEGORY },
  { name: 'Books', icon: '📚', link: path.CATEGORY },
  { name: 'Beauty', icon: '💄', link: path.CATEGORY },
  // Add more categories as needed
];

const CategoryList: React.FC = () => {
  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignContent={'center'}
      sx={{ mt: 1, mb: 3, bgcolor: 'red', height: '55px' }}
    >
      {categories.map((category, index) => (
        <Link
          to={category.link}
          style={{
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            width: '130px',
            justifyContent: 'center',
            color: 'white',
            cursor: 'pointer',
          }}
        >
          <span>{category.name}</span>
        </Link>
      ))}
    </Box>
  );
};

export default CategoryList;
