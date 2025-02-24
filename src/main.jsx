import React   from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import AddNewUser from './components/AddNewUser.jsx';
import UpdateUser from './components/UpdateUser.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader:()=> fetch('http://localhost:5000/users')
  },
  {
    path:'/addUser',
    element:<AddNewUser></AddNewUser>
  },
  {
    path:'/updateUser/:id',
    element:<UpdateUser></UpdateUser>,
    loader:({params})=>fetch(`http://localhost:5000/users/${params.id}`)
  }

]);
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    </React.StrictMode>,
)
