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
import Profile from './pages/Profile'
import FindTutor from "./pages/FindTutor";
import TutorOnboarding from "./pages/Onboarding";
import StudentOnboarding from "./pages/StudentOnboarding";
import TutorProfilePage from "./pages/tutorProfilePage";
import Favorites from "./pages/Favorites";

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
  },
  {
    path: "newstudent",
    element: <StudentOnboarding/>
  },
  {
    path: "newtutor",
    element: <TutorOnboarding/>
  }
  ,
  {
    path: "tutorprofile",
    element: <TutorProfilePage/>
  },
  {
    path: "favorites",
    element: <Favorites/>
  }
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
