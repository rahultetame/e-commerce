import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slices/productSlice'; 
import AuthReducer from './slices/authSlice';
import Loader from './slices/Loader';

const store = configureStore({
  reducer: {
    auth: AuthReducer,
    loader: Loader,
    product: productReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
