import React from 'react'
import ReactDOM from 'react-dom/client'
import ErrorPage from './components/Pages/ErrorPage/ErrorPage.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Pages/Home/Home.jsx';
import LogIn from './components/Pages/LogIn/LogIn.jsx';
import Registration from './components/Pages/Registration/Registration.jsx';
import AuthProvider from './components/AuthProvider/AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <LogIn />
      },
      {
        path: '/registration',
        element: <Registration />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
