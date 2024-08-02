import React from 'react';
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <div>
      <nav className='hidden w-full md:flex md:items-center md:w-auto'>
       <a href=''> <img className='w-[120px]' src="/logo.png"/></a>
        <ul className='text-base text-gray-700 pt-10 md:flex md:justify-between md:pt-0 ml-[600px] mt-[30px]'>
            <li><Link className='md:p-6 py-6  hover:text-blue-400 ' to="/">Home</Link></li>
            <li><Link className='md:p-6 py-6  hover:text-blue-400' to="contact">Contact</Link></li>
            <li><Link className='md:p-6 py-6  hover:text-blue-400' to="/login">Login</Link></li>
            <li><Link className='md:p-6 py-6  hover:text-blue-400' to="/signup">Signup</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
