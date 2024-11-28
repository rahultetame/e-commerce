
import {
  Home,
  ProductDetails,
  Category,
  Profile,
  
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
  PRODUCTDETAILS = '/category/productdetails',
  PROFILE = '/profile',
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
    path: `${path.PRODUCTDETAILS}`,
    Component: ProductDetails,
  },
];


export { accountRoute, mainRoute, path };
