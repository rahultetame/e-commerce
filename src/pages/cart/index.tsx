import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import {
  removeFromCart,
  updateQuantity,
} from '../../redux/slices/productSlice';
import { useNavigate } from 'react-router-dom';
import './Cart.scss';

const Cart: React.FC = () => {
  const cart = useSelector((state: RootState) => state.product.cart);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  const handleRemove = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id: number, quantity: number) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className='cart-page'>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>
                    <input
                      type='number'
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(item.id, parseInt(e.target.value))
                      }
                    />
                  </td>
                  <td>Rs.{item.price * item.quantity}</td>
                  <td>
                    <button onClick={() => handleRemove(item.id)}>
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h2>Total: Rs.{calculateTotal()}</h2>
          <button onClick={handleCheckout}>Proceed to Checkout</button>;
        </>
      )}
    </div>
  );
};

export default Cart;
