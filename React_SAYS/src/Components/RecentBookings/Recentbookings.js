import React from "react";
import classes from "./RecentBookings.module.css";
import Bookings from "./Bookings";
import NoRecentBookings from "./NoRecentBookings";
const Recentbookings = () => {
  const tickets = [
    { ticketId: "SAYS1001", movieName: "Leo", bookingDate:"23-07-2021" },
    { ticketId: "SAYS1002", movieName: "Vikram", bookingDate:"23-07-2021" },
    { ticketId: "SAYS1003", movieName: "Jawan", bookingDate:"23-07-2021" },
    { ticketId: "SAYS1001", movieName: "Leo", bookingDate:"23-07-2021" },
    { ticketId: "SAYS1002", movieName: "Vikram", bookingDate:"23-07-2021" },
    { ticketId: "SAYS1003", movieName: "Jawan", bookingDate:"23-07-2021" },
  ];
 
  if (tickets.length != 0) {
    return (
      <>
        <div className={classes.backHome}>
          <a href="/home">
            <button>Back to Home</button>{" "}
          </a>
        </div>
        <Bookings tickets={tickets} />
      </>
    );
  } else {
    return (
      <>
        <div className={classes.backHome}>
          <a href="/home">
            <button>Back to Home</button>{" "}
          </a>
        <NoRecentBookings />
        </div>
      </>
    );
  }
};

export default Recentbookings;
