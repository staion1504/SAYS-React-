import React from "react";
import classes from "./RecentBookings.module.css";
import Bookings from "./Bookings";
import NoRecentBookings from "./NoRecentBookings";
import { Link } from "react-router-dom";

const Recentbookings = () => {
  const tickets = [
    { ticketId: "SAYS1001", movieName: "Leo", bookingDate:"23-07-2021" },
    { ticketId: "SAYS1002", movieName: "Vikram", bookingDate:"23-07-2021" },
    { ticketId: "SAYS1003", movieName: "Jawan", bookingDate:"23-07-2021" },
    { ticketId: "SAYS1001", movieName: "Leo", bookingDate:"23-07-2021" },
    { ticketId: "SAYS1002", movieName: "Vikram", bookingDate:"23-07-2021" },
    { ticketId: "SAYS1003", movieName: "Jawan", bookingDate:"23-07-2021" },
    { ticketId: "SAYS1003", movieName: "Jawan", bookingDate:"23-07-2021" },
    { ticketId: "SAYS1003", movieName: "Jawan", bookingDate:"23-07-2021" },
    { ticketId: "SAYS1003", movieName: "Jawan", bookingDate:"23-07-2021" },
    { ticketId: "SAYS1003", movieName: "Jawan", bookingDate:"23-07-2021" },
    { ticketId: "SAYS1003", movieName: "Jawan", bookingDate:"23-07-2021" },
  ];
 
  if (tickets.length != 0) {
    return (
      <>
        <div className={classes.backHome}>
        <Link to="/User/HomePage">
          <button>Back to Home</button>{" "}
        </Link>
        </div>
        <Bookings tickets={tickets} />
      </>
    );
  } else {
    return (
      <>
        <div className={classes.backHome}>
        <Link to="/User/HomePage">
          <button>Back to Home</button>{" "}
        </Link>
        <NoRecentBookings />
        </div>
      </>
    );
  }
};

export default Recentbookings;
