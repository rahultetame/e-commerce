import { lazy } from 'react';

const Home = lazy(() => import('../pages/home'));
const Profile = lazy(() => import('../pages/account/Profile'));
const Category = lazy(() => import('../pages/category'));
const ProductDetails = lazy(() => import('../pages/productDetails'));
const Cart = lazy(() => import('../pages/cart'));
const Checkout = lazy(() => import('../pages/checkout'));
const OrderConfirmation = lazy(
  () => import('../pages/checkout/OrderConfirmation')
);
const PageNotFound = lazy(() => import('../pages/PageNotFound'));

export {
  Home,
  Profile,
  Category,
  ProductDetails,
  PageNotFound,
  Cart,
  Checkout,
  OrderConfirmation,
};
