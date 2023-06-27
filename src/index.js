import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Intro from './pages/Intro'
import Main from './pages/Main'
import Favorites from './pages/Favorites'
const router = createBrowserRouter([
  {
    path:'/',
    element: <Intro />
  },
  {
    path:'/Main',
    element: <Main />
  },
  {
    path:'/Favorites',
    element: <Favorites />
  },
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

