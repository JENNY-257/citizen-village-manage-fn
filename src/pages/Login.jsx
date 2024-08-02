import React from 'react';
import NavBar from '../components/header/NavBar';
import Footer from '../components/footer/Footer';
const Login = () => {
  return (
    <div>
        <NavBar/>
        <form className=' ml-[400px] mt-[80px]'>
            <h1 className='mb-[60px]  ml-[50px] text-[25px]'>Enter Your valid Your cridentuals </h1>
            <label className='' for="email">Email</label>
            <input className=' border border-black px-10 py-1 ml-[50px]' type="email"id="email" name="email" placeholder='Enter your email'/><br></br>
            <label className='' for="password">Password</label>
            <input className=' border border-black px-10 py-1 mt-[50px] ml-[20px] mb-[20px]' type="password" id="password" name="password" placeholder='Enter your password'/><br></br>
            <a className='ml-[200px] mt-[20px] hover:text-blue-400 underline underline-offset-2' href='/forgot'>Forgot password?</a>
            <button className='bg-blue-900 block text-white px-[100px] py-1 mt-[50px] ml-[90px] rounded-md' type="submit">Signin</button>
            <p className='mt-[30px] ml-[100px] '>Don't have account?<a className='hover:text-blue-400 underline underline-offset-2' href="signup">Signup</a></p>
        </form>
        <Footer/>

    </div>
  );
}

export default Login;
