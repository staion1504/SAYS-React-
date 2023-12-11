import React from "react";
import classes from "./RecentBookings.module.css";
import Button from "react-bootstrap/Button";
import  MyVerticallyCenteredModal from "./MyVerticallyCenteredModal";
const Bookings = (props) => {
  const { tickets } = props;
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <div className={classes.backHome}>
        <a href="/home">
          <button>Back to Home</button>
        </a>
      </div>
      <div className={classes.background}></div>
      <div className={classes.container_own}>
        <div className={classes.bookings}>
          <h2>Recent Bookings</h2>
          <table>
            <thead>
              <tr>
                <th>Ticket ID</th>
                <th>Movie Name</th>
                <th>Booking Date</th>
                <th>Your Ticket</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((ticket) => {
                return (
                  <tr key={ticket.ticketId}>
                    <td>{ticket.ticketId}</td>
                    <td>{ticket.movieName}</td>
                    <td>{ticket.bookingDate}</td>
                    <td>
                      <Button
                        variant="primary"
                        onClick={() => setModalShow(true)}>
                        Show Ticket
                      </Button>

                      <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    
    </>
  );
};

export default Bookings;
