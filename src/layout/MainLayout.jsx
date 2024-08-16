import React from 'react'
import Register from '../components/Register'
import { Outlet } from 'react-router-dom'

//components

function MainLayout() {
  return (
    <>
    <Outlet />
       
    </>
  )
}

export default MainLayout
