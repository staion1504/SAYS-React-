import React, { useState, useContext, useEffect } from 'react';
import classes from './TMovies.module.css';
import TNavbar from '../TCommon/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import MovieInfo from '../../Admin/Movies/MovieInfo/MovieInfo';
import { AddMovie } from './AddMovie/Addmovie';
import { EditMovie } from './EditMovie/EditMovie';
import { RentMovie } from './RentMovie/RentMovie';




const TMovies = () => {

  const [AddMovieArray, setAddMovieArray] = useState([]);

  const [MoviesArray, setMoviesArray] = useState([{
    MovieName: "COCO",
    MovieImageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTegiOTQmvZ9vWL1w6glk1BVBumKxID3fuJpqJOk1oQwiUq8wy2',
    Language: "English",
    ReleaseDate: "",
    Duration: "",
    Genre: "",
    Locations: "",
    CastName1: "",
    CastImageURL1: "",

    CastName2: "",
    CastImageURL2: "",

    CastName3: "",
    CastImageURL3: "",

    CastName4: "",
    CastImageURL4: "",

    CastName5: "",
    CastImageURL5: "",

    About: ""
  }]);

  const [rentedMovies, SetRentedMovies] = useState({});

  function rentMovieHandler(data) {

    setShow4(false);

    setAddMovieArray([...AddMovieArray, {
      MovieName: data.MovieName,
      Status: 'InActive'
    }])

  }

  const [showMovies, setShowMovies] = useState([
    {
      MovieName: "Salaar : The caese fire part-1",
      MovieImageURL: 'https://pbs.twimg.com/profile_images/1723579743361179648/8XbD-Xvd_400x400.jpg',
      Language: "Telugu",
      ReleaseDate: "",
      Duration: "",
      Genre: "",
      Locations: "",
      CastName1: "",
      CastImageURL1: "",

      CastName2: "",
      CastImageURL2: "",

      CastName3: "",
      CastImageURL3: "",

      CastName4: "",
      CastImageURL4: "",

      CastName5: "",
      CastImageURL5: "",

      About: ""
    }
  ]);







  function AddedMovieHandler(data) {
    console.log(data);
    const ans = MoviesArray.filter((Movie) => {
      return (data.MovieName === Movie.MovieName) && (data.status === 'Active')

    })
    console.log(ans);
    setShowMovies([...showMovies, ...ans]);
    setShow2(false)
  }



  useEffect(()=>{
    
   let renderdata=  async () => {


    let response = await fetch("http://localhost:5000/tmdashboard", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: 'include', // <-- Important
    })

    let x = await response.json();
    console.log(x);
    // setMoviesArray(x.rentalmoviearr);

  }

  renderdata();


},[]);







  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [show3, setShow3] = useState(false);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  const [show4, setShow4] = useState(false);
  const handleClose4 = () => setShow4(false);


  return (
    <div>

      {show1 && <MovieInfo show={show1} handleClose={handleClose1} />}
      {show2 && <AddMovie AddedMovieHandler={AddedMovieHandler} AddMovieArray={AddMovieArray} show={show2} handleClose={handleClose2} />}
      {show3 && <EditMovie show={show3} handleClose={handleClose3} />}
      {show4 && <RentMovie rentMovieHandler={rentMovieHandler} rentedMovies={rentedMovies} show={show4} handleClose={handleClose4} />}
      <TNavbar />

      <div className='mt-[3rem]'>
        <div className='flex justify-between'>
          <h3 className={classes.title}>LATEST MOVIES SCREENING</h3>
          <div>
            <button type="button" className='bg-[red] w-[7rem] h-[2.2rem] mr-[3rem] rounded-md text-[white] hover:bg-[indianred]' onClick={handleShow2}>
              Add movie
            </button>

            <button type="button" className='bg-[red] w-[7rem] h-[2.2rem] mr-[3rem] rounded-md text-[white] hover:bg-[indianred]' onClick={handleShow3}>
              Edit Movie
            </button>
          </div>

        </div>


        <Row className='flex mt-[1rem]'>
          {/* <p className='text-[gold] text-[2rem] mt-[1rem]'>OOPS...No Movies Screening Actively!!!</p>      */}


          {showMovies.map((Movie, index) =>
            <Col lg={2} key={index}>
              <div className={classes.movie_card}>
                <img src={Movie.MovieImageURL} alt='' />
                <div className='flex justify-between'>
                  <p className={classes.movie_name}>{Movie.MovieName}</p>
                </div>
                <div className={classes.card_bottom}>
                  <div className='text-white'>
                    <FontAwesomeIcon icon={faCheckCircle} className='text-[green] text-[1.5rem]' />
                  </div>

                  <div>
                    <button type="button" className='rounded-[50%] w-[2rem] border-none bg-[#221f1f]' onClick={handleShow1}>
                      <FontAwesomeIcon icon={faInfoCircle} className='text-[indianred] text-[1.5rem]' />
                    </button>
                  </div>
                </div>
              </div>

            </Col>
          )}







        </Row>



        <div className='flex mt-[4rem]'>
          <h3 className={classes.title}>UPCOMING MOVIES</h3>
        </div>

        <Row className='flex mt-[1rem] mb-[3rem]' >
          {/* <p className='text-[gold] text-[2rem] mt-[1rem]'>OOPS...No Upcoming Movies Actively!!!</p>      */}
          {MoviesArray.map((Movie, index) =>
            <Col lg={2} key={index}>
              <div className={classes.movie_card}>
                <img src={Movie.MovieImageURL} alt='' />
                <div className='flex justify-between'>
                  <p className={classes.movie_name}>{Movie.MovieName}</p>
                </div>
                <div className={classes.card_bottom}>


                  <div>
                    <button type="button" className='rounded-[50%] w-[2rem] border-none bg-[#221f1f]' onClick={handleShow1}>
                      <FontAwesomeIcon icon={faInfoCircle} className='text-[indianred] text-[1.5rem]' />
                    </button>
                  </div>

                  <div>
                    <button type="button" className=' font-semibold rounded-md w-[4rem] border-none text-white h-[2rem] bg-[red]' onClick={() => {

                      const ans = MoviesArray.filter((movie, indexa) => {
                        return indexa === index;
                      })
                      // console.log(ans);
                      SetRentedMovies(ans[0]);
                      setShow4(true);

                    }}>
                      Rent
                    </button>
                  </div>
                </div>
              </div>

            </Col>

          )}


        </Row>

      </div>


    </div>
  )
}

export default TMovies