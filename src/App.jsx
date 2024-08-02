import React from 'react';
import { createBrowserRouter,
       RouterProvider,Route,Link } 
       from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Forgot from './pages/Forgot';
import Reset from './pages/Reset';
import UpdatePassword from './pages/UpdatePassword';
const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
  path:'/signup',
  element:<Signup/>
},
{
  path:'/forgot',
  element:<Forgot/>
},
{
  path:'/update-pass',
  element:<UpdatePassword/>
},
{
  path:'/reset',
  element:<Reset/>
}

]);
const App = () => {
  return (
    <div>
    < RouterProvider router = {router}/>
    </div>
  );
}

export default App;
