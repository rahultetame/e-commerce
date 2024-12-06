// ProductCarousel.tsx
import React from 'react';
import Slider from 'react-slick';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { path } from '../routes/Routers'; // Assuming you have paths defined

// Define the interface for the product type
interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}

interface ProductCarouselProps {
  products: Product[];
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ products }) => {
  // Slick slider settings
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ width: '100%', padding: '0 10px' }}>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id}>
            <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
              <CardMedia
                component='img'
                height='200'
                image={product.imageUrl}
                alt={product.name}
                sx={{
                  objectFit: 'cover',
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                }}
              />
              <CardContent>
                <Typography
                  variant='h6'
                  component='div'
                  sx={{ fontWeight: 'bold' }}
                >
                  {product.name}
                </Typography>
                <Typography
                  variant='body2'
                  color='text.secondary'
                  sx={{ marginTop: 1 }}
                >
                  ${product.price.toFixed(2)}
                </Typography>
                <Link to={path.PRODUCT_DETAILS.replace(':id', product.id)}>
                  <Button
                    variant='contained'
                    fullWidth
                    sx={{ marginTop: 1 }}
                  >
                    View Details
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        ))}
      </Slider>
    </Box>
  );
};

export default ProductCarousel;
