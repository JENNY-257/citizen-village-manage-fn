import React from 'react';
import { createBrowserRouter,
       RouterProvider,Route,Link } 
       from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/login',
    element:<Login/>
  },
]);
const App = () => {
  return (
    <div>
    < RouterProvider router = {router}/>
    </div>
  );
}

export default App;
