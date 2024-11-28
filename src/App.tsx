import { Suspense } from 'react';
import './App.scss';
import LazyLoader from './components/LazyLoader';
import PageRoute from './routes/PageRoute';

function App() {
  return (
    <>
      <div
        id='content-wrapper'
        className='wrapper'
      >
        <Suspense fallback={<LazyLoader />}>
          <PageRoute />
        </Suspense>
      </div>
    </>
  );
}

export default App;
