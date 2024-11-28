import { Routes, Route } from 'react-router-dom';
import { Fragment, useEffect } from 'react';
import { accountRoute, mainRoute } from './Routers';
import { useDispatch, useSelector } from 'react-redux';
import { setSnackbarConfig } from '../redux/slices/Loader';
import { Alert, Snackbar } from '@mui/material';
import { PageNotFound } from './LazyPath';
import Layout from '../layouts';
import AccountLayout from '../layouts/AccountLayout';
import { RootState } from '../redux/store';

const PageRoute = () => {
  const { snackbarConfig } = useSelector((state: RootState) => state.loader);

  const dispatch = useDispatch();

  useEffect(() => {
    if (snackbarConfig.isOpen) {
      const duration = snackbarConfig.autoHideDuration;
      setTimeout(() => {
        dispatch(setSnackbarConfig({ isOpen: false, message: '' }));
      }, duration);
    }
  }, [snackbarConfig]);

  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<Layout />}
        >
          {mainRoute?.map(({ path, Component }: any, index: any) => (
            <Fragment key={`${path}-${index}`}>
              <Route
                path={path}
                element={<Component />}
              />
            </Fragment>
          ))}
        </Route>

        <Route
          path='/'
          element={<AccountLayout />}
        >
          {accountRoute?.map(({ path, Component }: any, index: any) => (
            <Fragment key={`${path}-${index}`}>
              <Route
                path={path}
                element={<Component />}
              />
            </Fragment>
          ))}
        </Route>
        <Route
          path='*'
          element={<PageNotFound />}
        ></Route>
      </Routes>
      <Snackbar
        open={snackbarConfig.isOpen}
        autoHideDuration={snackbarConfig.autoHideDuration}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        onClose={() =>
          dispatch(setSnackbarConfig({ isOpen: false, message: '' }))
        }
      >
        <Alert
          onClose={() =>
            dispatch(setSnackbarConfig({ isOpen: false, message: '' }))
          }
          severity={snackbarConfig.varient}
          sx={{ width: '100%' }}
        >
          {snackbarConfig.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default PageRoute;
