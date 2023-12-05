import React, { useEffect, useState ,useContext } from 'react';
import AdminNav from '../../Common/Admin/Navbar/AdminNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import classes from './Movies.module.css';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { RemoveModal } from './RemoveMovies/RemoveModal';
import AddMovies from './AddMovies/AddMovies';
import MovieInfo from './MovieInfo/MovieInfo';

import { MyContext } from "../../../Contexts/MoviesContext";

export const Movies = () => {

  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [show3, setShow3] = useState(false);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

 

  const [MoviesArray, setMoviesArray] = useState([

    {
      MovieName:"Salaar : The caese fire part-1",
      MovieImageURL:'https://pbs.twimg.com/profile_images/1723579743361179648/8XbD-Xvd_400x400.jpg',
      Language:"Telugu",
      ReleaseDate:"",
      Duration:"",
      Genre:"",
      Locations:"",
      CastName1:"",
      CastImageURL1:"",

      CastName2:"",
      CastImageURL2:"",

      CastName3:"",
      CastImageURL3:"",

      CastName4:"",
      CastImageURL4:"",

      CastName5:"",
      CastImageURL5:"",

       About:""
    },
    {
      MovieName:"COCO",
      MovieImageURL:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTegiOTQmvZ9vWL1w6glk1BVBumKxID3fuJpqJOk1oQwiUq8wy2',
      Language:"English",
      ReleaseDate:"",
      Duration:"",
      Genre:"",
      Locations:"",
      CastName1:"",
      CastImageURL1:"",

      CastName2:"",
      CastImageURL2:"",

      CastName3:"",
      CastImageURL3:"",

      CastName4:"",
      CastImageURL4:"",

      CastName5:"",
      CastImageURL5:"",

       About:""
    }

  ]);

  function onSubmit({MovieName,MovieImageURL,Language,ReleaseDate,Duration,Genre,Locations,CastName1,CastImageURL1,CastName2,CastImageURL2,CastName3,CastImageURL3,CastName4,CastImageURL4,CastName5,CastImageURL5,About}) {
   
    console.log("hi");
    console.log(MovieName);
    let x=[...MoviesArray,{
      MovieName:MovieName,
        MovieImageURL:MovieImageURL,
        Language:Language,
        ReleaseDate:ReleaseDate,
        Duration:Duration,
        Genre:Genre,
        Locations:Locations,
        CastName1:CastName1,
        CastImageURL1:CastImageURL1,
  
        CastName2:CastName2,
        CastImageURL2:CastImageURL2,
  
        CastName3:CastName3,
        CastImageURL3:CastImageURL3,
  
        CastName4:CastName4,
        CastImageURL4:CastImageURL4,
  
        CastName5:CastName5,
        CastImageURL5:CastImageURL5,
  
         About:About
    }];
  
      
    setMoviesArray(x);
    setShow2(false);
  
    }

    
    const { dataArray, setDataArray } = useContext(MyContext);
    useEffect(()=>{
      setDataArray([...MoviesArray]);
    },[MoviesArray]);
    

return (
  <div className={classes.body}>
    {show1 && <RemoveModal show={show1} handleClose={handleClose1} />}
    {show2 && <AddMovies onSubmit={onSubmit} show={show2} handleClose={handleClose2} />}
    {show3 && <MovieInfo show={show3} handleClose={handleClose3} />}

    <AdminNav signout={false} />
    <div className='mt-[2rem]'>
      <div className='flex justify-between'>
        <div className='flex'>
          <label htmlFor="location" className='text-[white] text-[1.2rem] mt-1'>Location:</label>

          <Dropdown className='text-white bg-[#221f1f] border-none ml-2'>
            <Dropdown.Toggle className='text-white bg-[#221f1f] border-none'>
              Vijayawada
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Vijayawada</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Guntur</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Sricity</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <button type="button" className={classes.addbtn} onClick={handleShow2}>
          Add Movie
        </button>
      </div>


      <div className='flex justify-between mt-[2.5rem]'>
        <h3 className={classes.title}>RENTAL MOVIES</h3>
        <button type="button" className={classes.addbtn} onClick={handleShow1}>
          Remove Movie
        </button>
      </div>

      <Row>
        <div className="flex">
        {MoviesArray.map((movieIndex,index)=>
          <Col lg={2} md={2} key={index}>
            <div className={classes.movie_card}>
              <img src={movieIndex.MovieImageURL} alt='' />
              <div className={classes.movie_info}>
                <p className={classes.movie_name}>{movieIndex.MovieName}</p>
              </div>
              <div className={classes.card_bottom}>
                <div>
                  <button className="rounded-[50%] w-[2rem] bg-[#221f1f] border-0" type="button" onClick={handleShow3}>
                    <FontAwesomeIcon icon={faInfoCircle} className='text-[indianred] text-[1.5rem]' />
                  </button>
                </div>
              </div>
            </div>
          </Col>
        )}
          
       

        </div>

      </Row>
    
   
      
    </div>
  </div>
)
}
