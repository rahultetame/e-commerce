import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.tsx'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import DeploymentErrorBoundary from './DeploymentErrorBoundary.tsx';
import store from './redux/store.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <DeploymentErrorBoundary>
          <App />
        </DeploymentErrorBoundary>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
