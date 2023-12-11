import React, { useState, useContext, useEffect } from 'react';
import MultiItemCarousel from "../../Common/MultiItemCarousel/MultiItemCarousal";
import SectionTitle from "../SectionTitle/SectionTitle";
import MovieCard from "./MovieCard/MovieCard";
import classes from './MoviesSection.module.css';


import { MyContext2 } from '../../../Contexts/UserSideMoviesContex';
import { renderMatches } from 'react-router-dom';


const MoviesSection=(props)=>{
 
  
   const [MoviesArray,setMoviesArray]=useState([]);
   const [movieitemarr,setMovieitemarr]=useState([]);
   const[location,setLocation]=useState(""); 
    
   async function renderData(){
    console.log("hi came");
  let response=await fetch("http://localhost:5000/movies",{
    method:"GET",
    headers:{
      "Content-Type":"application/json"
    },
    credentials:'include'

  });
  console.log("hi came2");

  let x=await response.json();
  console.log(x);
  setMoviesArray(x.latestmovies);
  setLocation(x.checklocaton);
   
   } 
   
   useEffect(() => {
     
   renderData();

   }, [])
  


 useEffect(()=>{
  const x= MoviesArray.map((Movie,index)=>{
    return < MovieCard MovieDetails={Movie} location={location} />
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
