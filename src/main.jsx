import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { Home } from './page/Home/Home.jsx';
import { Root } from './Root/Root.jsx';

import { Food } from './page/Food.jsx';
import { MenuInfo } from './components/MenuSection/MenuInfo.jsx';
import { Login } from './page/Login.jsx';
import { Registration } from './page/Registration.jsx';
import { Book } from './page/menu/Book.jsx';
import { Bookinfo } from './components/MenuSection/Bookinfo.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/book/:id",
        element: <MenuInfo></MenuInfo> ,
        loader: ()=> fetch('/data.json')
      },
      {
        path: "/sitbook/:id",
        element: <Bookinfo></Bookinfo>,
        loader: ()=> fetch('/book.json')
      },
      {
        path: "/food",
        element: <Food></Food>,
      },
      {
        path: "/sitbook",
        element: <Book></Book>
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
