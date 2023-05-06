import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './MainLayout/MainLayout';
import Home from './components/Home/Home';
import ChefPage from './components/ChefPage/ChefPage';
import RecipeLayout from './components/RecipeLayout/RecipeLayout';
import Recipe from './components/Recipe/Recipe';
import Login from './components/LoginReg/Login';
import Register from './components/LoginReg/Register';
import AuthProvider from './providers/AuthProvider';
import PrivateRoute from './PrivateRoute';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Blog from './components/Blog/Blog';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: '/chef/:id',
        element: <PrivateRoute><ChefPage></ChefPage></PrivateRoute>,
        loader: ({ params }) => fetch(`https://home-cooking-server-developersajeeb.vercel.app/chef/${params.id}`)
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      }
    ]
  },
  {
    path: 'chef/recipe',
    element: <PrivateRoute><RecipeLayout></RecipeLayout></PrivateRoute>,
    children: [
      {
        path: ':id',
        element: <Recipe></Recipe>,
        loader: ({ params }) => fetch(`https://home-cooking-server-developersajeeb.vercel.app/recipes/${params.id}`)
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
)
