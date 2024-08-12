import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Navbar/Sidebar'

export default function Layout({children}) {
  return (
    <>
    <div className='row'>
        <div className="col-sm-4 col-md-4">
        <Sidebar></Sidebar>

        </div>
        <div className='col-sm-8 col-md-8'>
            <Outlet></Outlet>
        </div>
    </div>
    </>
  )
}
