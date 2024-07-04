import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter, 
  RouterProvider, 
 } from "react-router-dom";
import Home from './components/Home';
import Root from './Root';
import ProjectOverview from './components/ProjectOverview';

 const router = createBrowserRouter([ 
  { 
  path: "/", 
  element: <Root></Root>,
  children:[
    {
      path: "/",
      element: <Home></Home>
    },
    {
      path: "/project-overview/:id",
      element: <ProjectOverview></ProjectOverview>,
      
    }

  ] 
  }, 
 ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} /> 
  </React.StrictMode>,
)
