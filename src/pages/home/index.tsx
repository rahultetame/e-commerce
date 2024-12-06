import React, { useEffect, useState } from 'react';
import { Container, Box, Typography } from '@mui/material';
import ProductCarousel from '../../components/ProductCarousel';
import CategoryCard from '../../components/CategoryCard';
import { CategoryData, productData } from '../../data';
import CategoryList from '../../components/CategoryList';

const HomePage = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);

  // Fetch products and categories (Simulating an API call)
  useEffect(() => {
    // Mock API call for products
    setProducts(productData);

    // Mock Data for categories
    setCategories(CategoryData);
  }, []);

  return (
    <Container sx={{ marginTop: 0 }}>
      {/* Featured Products Carousel */}
      <CategoryList />
      <Typography
        variant='h4'
        sx={{ marginBottom: 2 }}
      >
        Featured Products
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2,
          justifyContent: 'space-between',
        }}
      >
        {products.slice(0, 3).map((product) => (
          <Box
            key={product.id}
            sx={{
              flex: '1 1 calc(33.333% - 16px)',
              minWidth: '300px',
              boxSizing: 'border-box',
            }}
          >
            <ProductCarousel products={[product]} />
          </Box>
        ))}
      </Box>

      {/* Categories */}
      <Typography
        variant='h4'
        sx={{ marginTop: 4, marginBottom: 2 }}
      >
        Shop by Categories
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2,
          justifyContent: 'space-between',
        }}
      >
        {categories.map((category) => (
          <Box
            key={category.id}
            sx={{
              flex: '1 1 calc(33.333% - 16px)',
              minWidth: '300px',
              boxSizing: 'border-box',
            }}
          >
            <CategoryCard
              id={category.id}
              name={category.name}
              imageUrl={category.imageUrl}
            />
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default HomePage;
