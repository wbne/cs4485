import * as React from "react";
import * as ReactDOM from "react-dom/client";
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Profile from './pages/ProfilePage'
import FindTutor from "./pages/FindTutor";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing/>,
  },
  {
    path: "login",
    element: <Login/>,
  },
  {
    path: "home",
    element: <Home/>,
  },
  {
    path: "profile",
    element: <Profile/>,
  },
  {
    path: "findtutor",
    element: <FindTutor/>
  }
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
