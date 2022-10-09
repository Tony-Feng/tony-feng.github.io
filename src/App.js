import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy } from '@loadable/component';
import Loading from './pages/loading';

const Home = lazy(() => import('./pages/home'));
const Error = lazy(() => import('./pages/error'));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={ <Loading /> }>
        <Routes>
          <Route path="/" exact component={ () => <Home /> } />
          <Route component={ <Error /> } />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
