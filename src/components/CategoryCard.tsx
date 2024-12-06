import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { path } from '../routes/Routers';

interface CategoryCardProps {
  id: string;
  name: string;
  imageUrl: string;
  price?: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  id,
  name,
  imageUrl,
  price,
}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component='img'
        height='140'
        image={imageUrl}
        alt={name}
      />
      <CardContent>
        <Typography variant='h6'>{name}</Typography>
        <Typography variant='h6'>{price}</Typography>
        <Link to={`${path.CATEGORY}/${id}`}>
          <Button
            variant='contained'
            fullWidth
            sx={{ marginTop: 1 }}
          >
            Shop Now
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
