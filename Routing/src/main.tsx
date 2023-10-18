import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout/Layout.tsx'
import Home from './components/Home/Home.tsx'
import AboutUs from './components/AboutUs/AboutUs.tsx'
const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[{
      path:"",
      element:<Home/>
    },
  {
    path:"aboutUs",
    element:<AboutUs/>
  }]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
