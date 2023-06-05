import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './app.css';

import { Home } from './views/Home';
import { About } from './views/About';
import { Product } from './views/Product';
import { Error } from './router/Error';
import { L1SharedLayout } from './router/L1SharedLayout';
import { SingleProduct } from './views/SingleProduct';
import { Dashboard } from './views/Dashboard';
import { Login } from './views/Login';
import { ProtectedRoute } from './views/ProtectedRoute';
import { L2SharedLayout } from './router/L2SharedLayout';
import { L2Page1 } from './views/l2SharedLayout/L2Page1';
import { L2Page2 } from './views/l2SharedLayout/L2Page2';
import { L2Page3 } from './views/l2SharedLayout/L2Page3';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<L1SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='products' element={<Product />} />
          <Route path='*' element={<Error />} />
        </Route>
        <Route path='/l2shared' element={<L2SharedLayout />}>
          <Route index element={<L2Page1 />} />
          <Route path='l2page2' element={<L2Page2 />} />
          <Route path='l2page3' element={<L2Page3 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
