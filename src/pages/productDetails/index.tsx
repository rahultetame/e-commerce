import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { addToCart } from '../../redux/slices/productSlice';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: any }>();
  const product = useSelector((state: RootState) =>
    state.product.products.find(
      (product: any) => product.id === parseInt(id, 10)
    )
  );
  const dispatch = useDispatch();

  if (!product) {
    return <h2>Product not found</h2>;
  }

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
      })
    );
  };

  return (
    <div className='product-details'>
      <img
        src={product.image}
        alt={product.name}
      />
      <div className='details'>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <h2>Price: ${product.price}</h2>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;
