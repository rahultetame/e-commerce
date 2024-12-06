import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Box, Typography } from '@mui/material';
import ProductCard from '../../components/CategoryCard'; // Assuming you have a ProductCard component
import CategoryList from '../../components/CategoryList';

const CategoryPage = () => {
  const { id } = useParams();
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    // Fetch products based on category id
    // Mock API call for category products
    setProducts([
      {
        id: '1',
        name: 'Category Product 1',
        price: 100,
        imageUrl: 'https://via.placeholder.com/300',
      },
      {
        id: '2',
        name: 'Category Product 2',
        price: 150,
        imageUrl: 'https://via.placeholder.com/300',
      },
      {
        id: '3',
        name: 'Category Product 3',
        price: 200,
        imageUrl: 'https://via.placeholder.com/300',
      },
    ]);
  }, [id]);

  return (
    <Container sx={{ marginTop: 2 }}>
      <CategoryList />
      <Typography
        variant='h4'
        sx={{ marginBottom: 2 }}
      >
        Products in Category {id}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2,
          justifyContent: 'space-between',
        }}
      >
        {products.map((product) => (
          <Box
            key={product.id}
            sx={{
              flex: '1 1 calc(33.333% - 16px)',
              minWidth: '300px',
              boxSizing: 'border-box',
            }}
          >
            <ProductCard
              id={product.id}
              name={product.name}
              price={product.price}
              imageUrl={product.imageUrl}
            />
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default CategoryPage;
