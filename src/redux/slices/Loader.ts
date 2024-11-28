import { createSlice } from '@reduxjs/toolkit';

type initStateType = {
  isLoading: boolean;
  snackbarConfig: {
    isOpen: boolean;
    message: string;
    autoHideDuration: number;
    varient: 'success' | 'warning' | 'info' | 'error';
  };
};

const initState: initStateType = {
  isLoading: false,
  snackbarConfig: {
    isOpen: false,
    message: 'Test message',
    autoHideDuration: 5000,
    varient: 'info',
  },
};

const loaderSlice = createSlice({
  name: 'Loader',
  initialState: initState,
  reducers: {
    loadingActionHandler(_state, _action) {},
    setSnackbarConfig(state, action) {
      state.snackbarConfig = { ...state.snackbarConfig, ...action.payload };
    },
  },
});

export const { loadingActionHandler, setSnackbarConfig } = loaderSlice.actions;
export default loaderSlice.reducer;
