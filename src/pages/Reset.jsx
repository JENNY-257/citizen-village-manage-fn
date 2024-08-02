import React from 'react';
import NavBar from '../components/header/NavBar';
import Footer from '../components/footer/Footer';

const Reset = () => {
  return (
    <div>
      <NavBar/>
      <form className=' ml-[400px] mt-[90px]'>
      <h1 className='mb-[60px]  ml-[0px] text-[25px]'>Reset and get your new password </h1>
      <label className='' for="password">New password</label>
      <input className=' border border-black px-10 py-1 mt-[10px] ml-[30px] mb-[20px]' type="password" id="password" name="password" placeholder='Enter your password'/><br></br>
      <label className='' for="password">Confirm password</label>
      <input className=' border border-black px-10 py-1 mt-[50px] ml-[10px] mb-[20px]' type="password" id="password" name="password" placeholder='Enter your password'/><br></br>
      <button className='bg-blue-900 block text-white px-[80px] py-1 mt-[50px] ml-[140px] rounded-md' type="submit">Reset password</button>
      </form>
      
      <Footer/>
    </div>
  );
}

export default Reset;
