import React from "react";
import classes from "./Timings.module.css";
import { IoInformationCircleOutline } from "react-icons/io5";
import { useLocation, useNavigate } from 'react-router-dom';


const Timings = (props) => {
  const { movieName } = props

  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const MovieArray = JSON.parse(params.get('MovieDetails'));



  const showDetails = [
    { tName: "IMAX", tArray: ["6:00 AM", "3:00PM", "6:00 PM"] },
    { tName: "PVR", tArray: ["6:00 AM", "3:00PM", "6:00 PM"] },
    { tName: "CINIMAX", tArray: ["6:00 AM", "3:00PM", "6:00 PM"] },
    { tName: "EPIC", tArray: ["6:00 AM", "3:00PM", "6:00 PM"] },
  ];
  return (
    <>
      <div id={classes.timevalue}>
        <p> timevalue</p>
      </div>
      <div className={classes.blurpart}></div>
      <div className={classes.container}>
        <div className={classes.box1}>
          <img
            src={MovieArray.MovieImageURL}
            alt=""
          />
        </div>
        <div className={classes.box2}>

          <div className={classes.filters}>
            <h2 className={classes.movieName} >{movieName}</h2>
            <div className={classes.time_filter}>
              <label for="time">Select Time</label>
              <form method="post" id="time_filter">
                <select name="time" id="time" onclick="submitForms()">
                  <option value="Show All" onclick="submitForms()">
                    Show All
                  </option>
                  <option value="6:00 AM" onclick="submitForms()">
                    6:00 AM
                  </option>
                  <option value="9:00 AM" onclick="submitForms()">
                    9:00 AM
                  </option>
                  <option value="2:00 PM" onclick="submitForms()">
                    2:00 PM
                  </option>
                  <option value="6:00 PM" onclick="submitForms()">
                    6:00 PM
                  </option>
                  <option value="9:00 PM" onclick="submitForms()">
                    9:00 PM
                  </option>
                </select>
              </form>
            </div>
          </div>
          {showDetails.map((showDetail) => {
            return (
              <div className={classes.theatre}>
                <div className={classes.sub_theatre}>
                  <h2>{showDetail.tName}  <IoInformationCircleOutline /> </h2>


                  {showDetail.tArray.map((tArray, index) => {
                    return (
                      <span key={index}>
                        <a href="">
                          <button>{tArray}</button>
                        </a>
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {/* {showDetails.map((showDetail) => {
            <div className={classes.theatre}>
              <div className={classes.sub_theatre}>
                <h2>{showDetail.tName}</h2>
                {showDetail.tArray.map((tArray, index) => {
                  <span key={index}>
                    <a href="">
                      <button>{tArray}</button>
                    </a>
                  </span>;
                })}
              </div>
            </div>;
          })} */}
        </div>
      </div>
    </>
  );
};

export default Timings;
