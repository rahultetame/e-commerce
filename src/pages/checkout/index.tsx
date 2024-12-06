import React from 'react';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { RootState } from '../../redux/store';
import './Checkout.scss';
import { useNavigate } from 'react-router-dom';

const Checkout: React.FC = () => {
  const cart = useSelector((state: RootState) => state.product.cart);

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      address: '',
      city: '',
      zip: '',
      paymentMethod: 'credit-card',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      address: Yup.string().required('Address is required'),
      city: Yup.string().required('City is required'),
      zip: Yup.string()
        .matches(/^\d{6}$/, 'ZIP Code must be exactly 6 digits')
        .required('ZIP Code is required'),
      paymentMethod: Yup.string().required('Payment method is required'),
    }),
    onSubmit: (values) => {
      const orderDetails = {
        name: values.name,
        email: values.email,
        address: values.address,
        city: values.city,
        zip: values.zip,
        paymentMethod: values.paymentMethod,
        cart: cart,
        total: calculateTotal(),
      };

      // Redirect to order confirmation page and pass order details
      navigate('/order-confirmation', { state: { orderDetails } }); // Uncomment for React Router v6
    },
  });

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className='checkout-page'>
      <h1>Checkout</h1>
      <form onSubmit={formik.handleSubmit}>
        <h2>Shipping Information</h2>
        <input
          type='text'
          name='name'
          placeholder='Full Name'
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className='error'>{formik.errors.name}</div>
        ) : null}

        <input
          type='email'
          name='email'
          placeholder='Email'
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className='error'>{formik.errors.email}</div>
        ) : null}

        <input
          type='text'
          name='address'
          placeholder='Address'
          value={formik.values.address}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.address && formik.errors.address ? (
          <div className='error'>{formik.errors.address}</div>
        ) : null}

        <input
          type='text'
          name='city'
          placeholder='City'
          value={formik.values.city}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.city && formik.errors.city ? (
          <div className='error'>{formik.errors.city}</div>
        ) : null}

        <input
          type='text'
          name='zip'
          placeholder='ZIP Code'
          value={formik.values.zip}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.zip && formik.errors.zip ? (
          <div className='error'>{formik.errors.zip}</div>
        ) : null}

        <h2>Payment Information</h2>
        <select
          name='paymentMethod'
          value={formik.values.paymentMethod}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          <option value='credit-card'>Credit Card</option>
          <option value='paypal'>PayPal</option>
          <option value='upi'>UPI</option>
        </select>
        {formik.touched.paymentMethod && formik.errors.paymentMethod ? (
          <div className='error'>{formik.errors.paymentMethod}</div>
        ) : null}

        <h2>Order Summary</h2>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} x {item.quantity}: Rs.{item.price * item.quantity}
            </li>
          ))}
        </ul>
        <h3>Total: Rs.{calculateTotal()}</h3>

        <button type='submit'>Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
