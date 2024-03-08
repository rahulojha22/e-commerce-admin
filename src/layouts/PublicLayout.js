import React from 'react'
import { Outlet } from 'react-router-dom'

const PublicLayout = () => {
  return (
    <div className='public-section'>
      <Outlet />
    </div>
  )
}

export default PublicLayout
