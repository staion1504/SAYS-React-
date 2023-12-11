import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";



import { MyProvider } from "./Contexts/MoviesContext";
import { MyProvider2 } from "./Contexts/UserSideMoviesContex";

import Login from "./Pages/Login/Login";

//Admin
import HomePage from './Pages/Admin/Home';
import UserPage from './Pages/Admin/User';
import TheatrePage from './Pages/Admin/Theatre';
import MailPage from './Pages/Admin/Mail';
import MoviesPage from './Pages/Admin/Movies';

//theatre
import Theatredashboard from './Components/Theatre/theatredashboard/theatredashboard'
import TMovies from './Pages/Theatre/Movies';
import TSchedule from "./Components/Theatre/Schedule/TSchedule";
import Usertheatreinfo from './Components/Theatre/About Theatre/usertheatreinfo'



//user
import UserProfilePage from "./Pages/UserProfile/UserProfile";
import UserProfileEditPage from './Pages/UserProfile/UserProfileEdit';
import SnacksPage from "./Pages/Snacks/SnacksPage";
import Register from "./Pages/Register/Register";
import Home from './Pages/Home/Home';
import Movies from "./Pages/Movies/Movies";
import IndividualPage from './Pages/IndividualMoviePage/Individual';
import Timings from './Pages/Timing/Timing'
import SeatArrangementPage from "./Pages/SeatArrangement/SeatArrangement";
import RecentBookings from "./Pages/RecentBooking/RecentBooking";


const router = createBrowserRouter([



  {
    path: "/",
    element: <Login />
  },
  {
    path: "/Admin",
    element: <HomePage />
  },
  {
    path: "/Admin/MoviesPage",
    element: <MoviesPage />
  },
  {
    path: "/Admin/UserPage",
    element: <UserPage />
  },
  {
    path: "/Admin/TheatrePage",
    element: <TheatrePage />
  },
  {
    path: "/Admin/MailPage",
    element: <MailPage />
    // <MailPage />
  },


  //theatre routes


  {
    path: "Theatre/Theatredashboard",
    element: <Theatredashboard />
  },
  {
    path: "Theatre/MoviesPage",
    element: <TMovies />
  },
  {
    path: "Theatre/TSchedule",
    element: <TSchedule />
  },
  {
    path: "Theatre/Usertheatreinfo",
    element: <Usertheatreinfo />
  },


  //User Routes

  {
    path: "User/HomePage",
    element: <Home />
  },
  {
    path: "User/MoviesPage",
    element: <Movies />
  },
  {
    path: "User/SnacksPage",
    element: <SnacksPage />
  },
  {
    path: "User/IndividualPage",
    element: <IndividualPage />
  },
  {
    path: "User/Timings",
    element: <Timings />
  },
  {
    path: "User/SeatArrangementPage",
    element: <SeatArrangementPage />
  },
  {
    path: "User/RecentBookings",
    element: <RecentBookings />
  },
  

]);

function App() {
  return (
    <>
      <MyProvider>
        <MyProvider2>
          <RouterProvider router={router} />
        </MyProvider2>
      </MyProvider>
    </>
  );
}

export default App;
