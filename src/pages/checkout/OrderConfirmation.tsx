import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const OrderConfirmation: React.FC = () => {
  const location = useLocation();
  const { orderDetails } = location.state || {};

  const navigate = useNavigate();

  if (!orderDetails) {
    return <div>No order details available.</div>;
  }

  return (
    <div className='order-confirmation'>
      <h1>Thank You for Your Order!</h1>
      <h2>Order Summary</h2>
      <p>
        <strong>Name:</strong> {orderDetails.name}
      </p>
      <p>
        <strong>Email:</strong> {orderDetails.email}
      </p>
      <p>
        <strong>Address:</strong> {orderDetails.address}, {orderDetails.city},{' '}
        {orderDetails.zip}
      </p>
      <p>
        <strong>Payment Method:</strong> {orderDetails.paymentMethod}
      </p>

      <h3>Order Items:</h3>
      <ul>
        {orderDetails.cart.map((item: any, index: number) => (
          <li key={index}>
            {item.name} x {item.quantity}: Rs.{item.price * item.quantity}
          </li>
        ))}
      </ul>

      <h3>Total: Rs.{orderDetails.total}</h3>

      <button onClick={() => navigate('/')}>Back to Shop</button>
    </div>
  );
};

export default OrderConfirmation;
