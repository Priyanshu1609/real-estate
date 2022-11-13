import React from 'react';

// import link
import { Link } from 'react-router-dom';
// import logo
import Logo from '../assets/img/logo.svg';

const Header = () => {
  return (
    <header className='py-5  border-b'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link to='/'>
          <p className='font-bold  text-5xl'>Real Estate</p>
        </Link>
        <div className='flex items-center gap-6'>
          <Link className='hover:text-violet-900 transition' to='/'>
            Log in
          </Link>
          <Link
            className='bg-[#FF5A5F] hover:opacity-70 text-white px-4 py-3 rounded-lg transition'
            to='/'
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
