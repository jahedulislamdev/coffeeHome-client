import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Home from './Home'
import Products from './Products'
import Detail from './Detail'
import Update from './Update'
import Fallback from './Fallback'
import AuthProvider from '../Provider/AuthProvider'
import Login from './Login'
import Register from './Register'
import Dashboard from './Dashboard'
import ViewUser from './ViewUser'
import UpdateUser from './UpdateUser'
import Layout from './Layout'

const route = createBrowserRouter([
  {
    path: '/', element: <Layout />, children: [
      {
        path: '/', element: <Home />,
        loader: () => fetch("http://localhost:5000/coffees"),
        hydrateFallbackElement: <Fallback />
      },
      {
        path: "/products", element: <Products />,
        hydrateFallbackElement: <Fallback />
      },
      {
        path: "/products_detail/:id", element: <Detail />,
        loader: ({ params }) => fetch(`http://localhost:5000/coffees/${params.id}`),
        hydrateFallbackElement: <Fallback />
      },
      {
        path: "/add_coffee", element: <App />,
        loader: () => fetch("http://localhost:5000/coffees"),
        hydrateFallbackElement: <Fallback />
      },
      {
        path: "/update_coffee/:id", element: <Update />,
        loader: ({ params }) => fetch(`http://localhost:5000/coffees/${params.id}`),
        hydrateFallbackElement: <Fallback />
      },
      {
        path: "/login", element: <Login />,
        hydrateFallbackElement: <Fallback />
      },
      {
        path: "/register", element: <Register />,
        hydrateFallbackElement: <Fallback />
      },
      {
        path: "/dashboard", element: <Dashboard />,
        loader: () => fetch("http://localhost:5000/users"),
        hydrateFallbackElement: <Fallback />,
      },
      {
        path: "/user/details/:id", element: <ViewUser />,
        loader: ({ params }) => fetch(`http://localhost:5000/users/${params.id}`),
        hydrateFallbackElement: <Fallback />,
      },
      {
        path: "/user/update/:id", element: <UpdateUser />,
        loader: ({ params }) => fetch(`http://localhost:5000/users/${params.id}`),
        hydrateFallbackElement: <Fallback />,
      }
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={route} />
    </AuthProvider>
  </StrictMode>
)
