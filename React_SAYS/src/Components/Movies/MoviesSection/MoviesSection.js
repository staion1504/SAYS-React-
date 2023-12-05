import React, { useState, useContext, useEffect } from 'react';
import MultiItemCarousel from "../../Common/MultiItemCarousel/MultiItemCarousal";
import SectionTitle from "../SectionTitle/SectionTitle";
import MovieCard from "./MovieCard/MovieCard";
import classes from './MoviesSection.module.css';


import { MyContext2 } from '../../../Contexts/UserSideMoviesContex';


const MoviesSection=(props)=>{
 
  
   const [MoviesArray,setMoviesArray]=useState([]);
   const [movieitemarr,setMovieitemarr]=useState([]);
   // useContext (theatre to user context)
   const { userDataArray } = useContext(MyContext2);
   useEffect(() => {
     setMoviesArray([...MoviesArray, ...userDataArray,]);
   console.log(userDataArray);
   }, [userDataArray])
  


 useEffect(()=>{
  const x= MoviesArray.map((Movie)=>{
    return < MovieCard MovieDetails={Movie} />
   })
   setMovieitemarr([...x]);
 }, [MoviesArray])
   
               
     return (
    <section className={classes.moviessection} style={props.style}>

         <SectionTitle title={props.title}/>
          
      <MultiItemCarousel  itemarr={movieitemarr}/>  
    </section>
)
}

export default MoviesSection;
