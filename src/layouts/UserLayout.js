import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

const UserLayout = () => {
  return (
    <div>
      <Navbar/>
      <div className='row'>
        <div className='col-2 p-0'>
            <Sidebar/>      
        </div>
        <div className='col-10 page_sec'>
          <div className="card page_sec_height">
            <div className="card-body page_sec_height_body">
              <Outlet />
            </div>
          </div> 
        </div>            
      </div>      
      <Footer/>
    </div>
  )
}

export default UserLayout
