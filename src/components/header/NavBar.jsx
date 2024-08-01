import React from 'react';

const NavBar = () => {
  return (
    <div>
      <nav className='hidden w-full md:flex md:items-center md:w-auto'>
       <a href=''> <img className='w-[120px]' src="/logo.png"/></a>
        <ul className='text-base text-gray-700 pt-10 md:flex md:justify-between md:pt-0 ml-[600px] mt-[30px]'>
            <li><a className='md:p-6 py-6  hover:text-blue-400 ' href="">Home</a></li>
            <li><a className='md:p-6 py-6  hover:text-blue-400' href="">About</a></li>
            <li><a className='md:p-6 py-6  hover:text-blue-400' href="">Contact</a></li>
            <li><a className='md:p-6 py-6  hover:text-blue-400' href="">Login</a></li>
            <li><a className='md:p-6 py-6  hover:text-blue-400' href="">Signup</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
