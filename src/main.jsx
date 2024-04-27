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
import AddItems from './components/Pages/AddItems/AddItems.jsx';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';
import ViewDetails from './components/Pages/ViewDetails/ViewDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('http://localhost:5000/items')
      },
      {
        path: '/login',
        element: <LogIn />
      },
      {
        path: '/registration',
        element: <Registration />
      },
      {
        path: '/additem',
        element: <PrivateRoute>
          <AddItems />
        </PrivateRoute>
      },
      {
        path: '/viewDetais/:id',
        element: <PrivateRoute>
          <ViewDetails></ViewDetails>
        </PrivateRoute>
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
