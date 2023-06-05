import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import Skyinnk from '../components/Skyinnk';

export const L1SharedLayout = () => {
  return (
    <div>
      <div id='header-nav'>
        <Skyinnk />
        <Navbar />
      </div>
      <Outlet />

      <div className='footer-content'>
        <h1>footer content</h1>
      </div>
    </div>
  );
};

