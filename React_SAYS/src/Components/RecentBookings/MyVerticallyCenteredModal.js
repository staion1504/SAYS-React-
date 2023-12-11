import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import classes from "./RecentBookings.module.css";
import ticketbg from '../../Assests/RecentBooking/ticketbg.png'

const MyVerticallyCenteredModal = (props) => {
  return (
    <>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h2 className={classes.logo}>
              <i class="bx bxl-firebase"></i>      
              SAYS
            </h2>{" "}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="h-[35rem] text-center">
          <Container>
            <Row>
              <Col>
                <div className="text-center">
                  <img className={classes.posterimg} src="https://m.media-amazon.com/images/M/MV5BOTk4ZDQ1ZTctNzU3MC00NmY4LWJjMzItNDMwZTA2ODhiYWM5XkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_.jpg"/>  
                </div>
              </Col>
            </Row>
           
              <div className={classes.card}>
                <div><img src={ticketbg} className=" absolute top-[20rem] left-[3rem] w-[25rem]"/></div>
                <div className={classes.content}>
                  <span className="font-[500px] text-[13px] text-[#9D9EA3] mt-0">
                    Movie
                  </span>
                  <p className="mname">Avatar:The way of water</p>
                  <div
                    class="person_name tname"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}>
                    <div class="subdiv1" style={{ display: "block" }}>
                      <span
                        style={{
                          fontWeight: "500px",
                          fontSize: "13px",
                          color: "#9D9EA3",
                        }}>
                        Theatre
                      </span>
                      <p class="theatrename">Imax Hyderabad</p>
                    </div>

                    <div class="subdiv2" style={{ display: "block" }}>
                      <span
                        style={{
                          fontWeight: "500px",
                          fontSize: "13px",
                          color: "#9D9EA3",
                        }}>
                        Screen
                      </span>
                      <p class="sname">A</p>
                    </div>
                  </div>
                  <div className={classes.seat_time}>
                    <div className={classes.span2}>
                      <span>Seat</span>
                      <span>TIME</span>
                    </div>
                    <div className={classes.span1}>
                      <span className={classes.seatnum}>A1,A2,A3,A4</span>
                      <span className={classes.showtime}>12:00</span>
                    </div>
                  </div>
                </div>
              </div>
          
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={props.onHide} className="p-2 bg-[#0d6efd] text-[white] w-[6rem] rounded-[0.5rem] font-light text-[0.95rem] hover:bg-[indianred]">Close</button>
      </Modal.Footer>
      </Modal>
    </>
  );
};

export default MyVerticallyCenteredModal;
