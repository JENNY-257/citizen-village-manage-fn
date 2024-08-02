import React from 'react';
import NavBar from '../components/header/NavBar';
import Footer from '../components/footer/Footer';

const Signup = () => {
  return (
    <div>
      <NavBar/>
        <div>
             <h1 className='ml-[400px] text-[30px] mt-[80px]'>Create your acccount</h1>
             <form className=' ml-[400px] mt-[90px]'>
            <label className='' for="fstname">First name</label>
            <input className=' border border-black px-10 py-1 ml-[50px]' type="text"id="fstname" name="fstname" placeholder='Enter your first name'/><br></br>
            <label className='' for="lstname">Last name</label>
            <input className=' border border-black px-10 py-1 mt-[50px] ml-[50px]' type="text" id="lstname" name="lstname" placeholder='Enter your last name'/><br></br>
            
            <label className='mt-[50px]' for="email">Email</label>
            <input className='mt-[50px] border border-black px-10 py-1 ml-[80px]' type="email"id="email" name="email" placeholder='Enter your email'/><br></br>
            <label className='' for="password">Password</label>
            <input className=' border border-black px-10 py-1 mt-[50px] ml-[50px]' type="password" id="password" name="password" placeholder='Enter your password'/><br></br>
            <label className='' for="pass">Confirm pass</label>
            <input className=' border border-black px-10 py-1 mt-[50px] ml-[20px]' type="password" id="pass" name="pass" placeholder='confirm your password'/><br></br>
            <p className='mt-[30px]' for="password">What is your status?</p>
            <input className=' border border-black px-10 py-1 mt-[10px] ml-[50px]' type="radio" id="rad" name="rad"/>
            <label for="rad">Sigle</label><br></br>
            <input className=' border border-black px-10 py-1 mt-[10px] ml-[50px]' type="radio" id="rad" name="rad"/>
            <label for="rad">Maried</label>
            <p className='mt-[30px]' for="password">What is your title?</p>
            <input className=' border border-black px-10 py-1 mt-[10px] ml-[50px]' type="radio" id="sat" name="sat"/>
            <label for="sat">Mother</label><br></br>
            <input className=' border border-black px-10 py-1 mt-[10px] ml-[50px]' type="radio" id="sat" name="sat"/>
            <label for="sat">Father</label><br></br>
            <input className=' border border-black px-10 py-1 mt-[10px] ml-[50px]' type="radio" id="sat" name="sat"/>
            <label for="sat">Child</label>
            <button className='bg-blue-900 block text-white px-[20px] py-1 mt-[20px] ml-[0px] rounded-md' type="submit">Signup</button>
            <p className='mt-[30px] ml-[10x] '>Aready have account?<a className='hover:text-blue-400 underline underline-offset-2' href="login">Signin</a></p>
        </form>
      </div>
      <Footer/>
     
    </div>
  );
}

export default Signup;
