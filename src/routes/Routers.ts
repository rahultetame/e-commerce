import {
  Home,
  ProductDetails,
  Category,
  Profile,
  Cart,
  Checkout,
  OrderConfirmation,
} from './LazyPath';

interface RouteTemplate {
  path: string;
  Component: React.LazyExoticComponent<React.ComponentType<any>>;
  type?: string;
  role?: string;
}

enum path {
  HOME = '/',
  CATEGORY = '/category',
  PRODUCT_DETAILS = '/product/:id',
  PROFILE = '/profile',
  CART = '/cart',
  CHECKOUT = '/checkout',
  ORDER_CONFIRMATION = '/order-confirmation',
}

// this is for accounts
const accountRoute: RouteTemplate[] = [
  {
    path: `${path.PROFILE}`,
    Component: Profile,
  },
];

// this is for header and footer layout
const mainRoute: RouteTemplate[] = [
  {
    path: `${path.HOME}`,
    Component: Home,
  },
  {
    path: `${path.CATEGORY}`,
    Component: Category,
  },
  {
    path: `${path.PRODUCT_DETAILS}`,
    Component: ProductDetails,
  },
  {
    path: `${path.CART}`,
    Component: Cart,
  },
  {
    path: `${path.CHECKOUT}`,
    Component: Checkout,
  },
  {
    path: `${path.ORDER_CONFIRMATION}`,
    Component: OrderConfirmation,
  },
];

export { accountRoute, mainRoute, path };
