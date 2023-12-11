import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import classes from "./RecentBookings.module.css";

const MyVerticallyCenteredModal = (props) => {
  return (
    <>
      <Modal
        {...props}
        size="sm"
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
        <Modal.Body className="grid-example">
          <Container>
            <Row>
              <Col>
                <div className={classes.poster}>
                  <img src={'../../Assests/RecentBooking/wp5207687-avatar-movie-wallpapers'}/>
                </div>{" "}
              </Col>
            </Row>{" "}
            <Row>
              <div className={classes.card}>
                <div className={classes.content}>
                  <span
                    style={{
                      fontWeight: "500px",
                      fontSize: "13px",
                      color: "#9D9EA3",
                    }}>
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
                {/* <img src={require("./images/92248303-ticket-template-vector-removebg-preview.png")} /> */}
              </div>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
      </Modal>
    </>
  );
};

export default MyVerticallyCenteredModal;
