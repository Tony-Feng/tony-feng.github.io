// import React, { Suspense } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { lazy } from '@loadable/component';
// import Loading from './pages/loading';
//
// // const Home = lazy(() => import('./pages/home'));
// // const Error = lazy(() => import('./pages/error'));
//
// export default function App() {
//   return (
//     <BrowserRouter>
//       <Suspense fallback={ <Loading /> }>
//         <Routes>
//           <Route path="/" exact component={ () => <Home /> } />
//           <Route component={ <Error /> } />
//         </Routes>
//       </Suspense>
//     </BrowserRouter>
//   );
// }



import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy } from '@loadable/component';
import Loading from './pages/loading';
import Page from './components/page';
import Header from './components/header';
import Footer from './components/footer';

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Suspense fallback={ <Loading /> }>
//         <Routes>
//           <Route path="/" exact component={ () => <Footer /> } />
//           <Route component={ () => <Footer /> } />
//         </Routes>
//       </Suspense>
//     </BrowserRouter>
//   );
// }

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={ <Loading /> }>
        <Routes>
          <Route path="/" exact element={ <Page /> } />
          <Route element={ <Page /> } />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
