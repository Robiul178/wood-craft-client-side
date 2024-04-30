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
import MyArtCraft from './components/Pages/MyArt&Craft/MyArtAndCraft.jsx';
import AllItems from './components/Pages/AllItems/AllItems.jsx';
import Update from './components/Pages/Update/Update.jsx';
import ArtAndCategory from './components/Pages/ArtAndCategory/ArtAndCategory.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('https://wood-wonders-server.vercel.app/items')
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
        path: '/allItems',
        element: <AllItems />,
        loader: () => fetch('https://wood-wonders-server.vercel.app/items')
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
        </PrivateRoute>,
        loader: () => fetch('https://wood-wonders-server.vercel.app/items')
      },
      {
        path: '/myartandcraft',
        element: <PrivateRoute>
          <MyArtCraft />
        </PrivateRoute>,

      },
      {
        path: '/update/:id',
        element: <Update />,
        loader: ({ params }) => fetch(`https://wood-wonders-server.vercel.app/items/${params.id}`)
      },
      {
        path: '/artAndCraft',
        element: <ArtAndCategory />,
        loader: () => fetch('https://wood-wonders-server.vercel.app/category-items')
      },
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
