import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Main from './assets/layouts/Main';
import Home from './assets/components/Home';
import Login from './assets/components/Login';
import Register from './assets/components/Register';
import AuthProvider from './Provider/AuthProvider';
import Orders from './assets/components/Orders';
import PrivateRoutes from './assets/routes/PrivateRoutes';
import Profile from './assets/components/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "/profile",
        element:<PrivateRoutes><Profile></Profile></PrivateRoutes>
      },
      {
        path: "orders",
        element: (
          <PrivateRoutes>
            <Orders></Orders>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>

  </React.StrictMode>
);
