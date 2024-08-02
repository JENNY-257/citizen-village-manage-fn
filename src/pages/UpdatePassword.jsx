import React from 'react';
import NavBar from '../components/header/NavBar';
import Footer from '../components/footer/Footer';
const UpdatePassword = () => {
  return (
    <div>
       <NavBar/>
      <form className=' ml-[400px] mt-[90px]'>
      <h1 className='mb-[60px]  ml-[100px] text-[25px]'>Change your password </h1>
      <label className='' for="password">Current password</label>
      <input className=' border border-black px-10 py-1 mt-[10px] ml-[30px] mb-[20px]' type="password" id="password" name="password" placeholder='Enter your password'/><br></br>
      <label className='' for="password">New password</label>
      <input className=' border border-black px-10 py-1 mt-[10px] ml-[50px] mb-[20px]' type="password" id="password" name="password" placeholder='Enter your password'/><br></br>
      <label className='' for="password">Confirm password</label>
      <input className=' border border-black px-10 py-1 mt-[50px] ml-[30px] mb-[20px]' type="password" id="password" name="password" placeholder='Enter your password'/><br></br>
      <button className='bg-blue-900 block text-white px-[60px] py-1 mt-[50px] ml-[170px] rounded-md' type="submit">Update password</button>
      </form>
      
      <Footer/>
    </div>
  );
}

export default UpdatePassword;
