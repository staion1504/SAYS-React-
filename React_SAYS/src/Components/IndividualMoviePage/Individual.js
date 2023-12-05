import React from 'react';
import classes from './Individual.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Col, Row } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
const Individual = () => {

  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const MovieArray = JSON.parse(params.get('MovieDetails'));

  console.log(MovieArray);
   
   const x=useNavigate();

  function toTimings(){
   x(`/User/Timings?MovieDetails=${JSON.stringify(MovieArray)}`);
  }

  return (
    <div className={`bg-cover bg-no-repeat bg-center h-screen`} style={{ backgroundImage: `url(${MovieArray.MovieImageURL})` }}>
      <Row className='backdrop-blur-[12px]'>
        <Col>
          <div className={classes.poster}>
            <img src={MovieArray.MovieImageURL} alt="" />
          </div>
        </Col>

        <Col>
          <div className={classes.info}>
            <div className={classes.movie_title}>{MovieArray.MovieName}</div>
            <div className={classes.movie_detail}>
              <div className={classes.set}>
                <label>Release Date</label>
                <span>{MovieArray.ReleaseDate}</span>
              </div>
              <div className={classes.set}>
                <label>Running Time</label>
                <span> {MovieArray.Duration} </span>
              </div>
              <div className={classes.set}>
                <label>Genre</label>
                <span>{MovieArray.Genre} </span>
              </div>
            </div>


            <div className={classes.movie_description}>
            {MovieArray.About}
            </div>
            <div className={classes.movie_cast}>
              <div className={classes.header}>Cast and Crew</div>
              <Row className='mt-0'>
                <div className={classes.list}>
                  <Col lg={3} md={4} className='mt-0'>
                    <div className={classes.cast}>
                      <img src={MovieArray.CastImageURL1} alt="" />
                      <label> {MovieArray.CastName1} </label>
                    </div>
                  </Col>

                  <Col lg={3} md={4} className='mt-0'>
                    <div className={classes.cast}>
                    <img src={MovieArray.CastImageURL2} alt="" />                      
                    <label> {MovieArray.CastName2} </label>
                    </div>
                  </Col>

                  <Col lg={3} md={4} className='mt-0'>
                    <div className={classes.cast}>
                    <img src={MovieArray.CastImageURL3} alt="" />
                    <label> {MovieArray.CastName3} </label>
                    </div>
                  </Col>

                  <Col lg={3} md={4} className='mt-0'>
                    <div className={classes.cast}>
                    <img src={MovieArray.CastImageURL4} alt="" /> 
                     <label> {MovieArray.CastName4} </label>
                    </div>
                  </Col>

                </div>

              </Row>

            </div>

            <div className='m-0'>
             <button onClick={toTimings} className={classes.bookbtn}>Book</button>
            </div>
          </div>


        </Col>


      </Row>

    </div>

  )
}

export default Individual