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
import TutorLogin from './pages/TutorLogin'
import Profile from './pages/Profile'
import FindTutor from "./pages/FindTutor";
import TutorOnboarding from "./pages/Onboarding";
import StudentOnboarding from "./pages/StudentOnboarding";
import TutorProfilePage from "./pages/TutorProfilePage";
import Favorites from "./pages/Favorites";
import TutorHomePage from "./pages/TutorHomePage";
import Appointments from "./pages/Appointment";
import Book from "./pages/BookAppointment";
import TutorAppointments from './pages/TutorAppointmentPage';
import TutorAvailability from './pages/TutorAvailability';
import Hi from "./pages/hi";

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
    path: "tutor/login",
    element: <TutorLogin/>,
  },
  {
    path: "home",
    element: <Home/>,
  },
  {
    path: "tutor/home",
    element: <TutorHomePage/>,
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
    path: "tutor/profile",
    element: <TutorProfilePage/>
  },
  {
    path: "favorites",
    element: <Favorites/>
  },
  {
    path: "appointments",
    element: <Appointments/>
  },
  {
    path: 'appointments/book',
    element: <Book/>
  },
  {
    path: 'tutor/appointments',
    element: <TutorAppointments/>
  },
  {
    path: 'tutor/availability',
    element: <TutorAvailability/>
  },
  {
    path: 'hi',
    element: <Hi/>
  }
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
