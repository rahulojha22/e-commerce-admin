import React from 'react';
// import { useSelector } from 'react-redux';
import {    
  Outlet  
} from "react-router-dom";

const Home = () => {
  // const userDetail = useSelector((state) => state);
  // console.log(userDetail);
  return (
    <div className='container-fluid'>
      <Outlet />
    </div>    
  )
}

export default Home
