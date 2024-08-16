import { useState } from 'react'
import './App.scss'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Register from './components/Register'
import Home from './components/Home'

// components

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Register />
        },
        {
          path: '/home',
          element: <Home />
        }
      ]
    }
  ])  

  return <RouterProvider router={routes} />
}

export default App
