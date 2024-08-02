import React from 'react';
import NavBar from '../components/header/NavBar';
import Footer from '../components/footer/Footer';
const Forgot = () => {
  return (
    <div>
        <NavBar/>
        <form className=' ml-[400px] mt-[80px]'>
            <h1 className='mb-[60px]  ml-[90px] text-[25px]'>Reset Your password </h1>
            <label className='' for="email">Email</label>
            <input className=' border border-black px-10 py-1 ml-[50px]' type="email"id="email" name="email" placeholder='Enter your email'/><br></br>
            <button className='bg-blue-900 block text-white px-[100px] py-1 mt-[50px] ml-[90px] rounded-md' type="submit">Send</button>
        </form>
        <Footer/>
    </div>
  );
}

export default Forgot;
