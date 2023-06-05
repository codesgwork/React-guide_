import { NavLink } from 'react-router-dom';
import Skyinnk from '../components/Skyinnk';

export const Navbar = () => {
  return (
    <div id='homeNav'>
      <NavLink
        to='/about'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        About
      </NavLink>

      <NavLink
        to='/products'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Product
      </NavLink>
      <NavLink
        to='/dashboard'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Dashboard
      </NavLink>
      <NavLink
        to='/login'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Login
      </NavLink>
      <NavLink
        to='/l2shared'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        l2shared
      </NavLink>

      {/* <a href='https://skyinnk.com/' target='_blank'>
        skyinnk.com
      </a> */}
    </div>
  );
};
