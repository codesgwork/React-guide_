import { Link, Outlet } from 'react-router-dom';
import './l2SharedLayout.css';

export const L2SharedLayout = () => {
  return (
    <div className='l2SharedLayout'>
      <div className='navbar'>
        <Link to='/l2shared/l2page2'>
          <p className='link'>L2Page2</p>
        </Link>
        <Link to='/l2shared/l2page3'>
          <p className='link'>L2Page3</p>
        </Link>
          <Link to='/'>
            <p className='link'>Home</p>
          </Link>
       
      </div>
      <Outlet />

      <div className='footernav'>
        <p>footer links</p>
      </div>
    </div>
  );
};
