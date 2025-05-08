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

const route = createBrowserRouter([
  { path: '/', element: <Home />, loader: () => fetch("http://localhost:5000/coffees") },
  { path: "/products", element: <Products />, hydrateFallbackElement: <Fallback /> },
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
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>
)
