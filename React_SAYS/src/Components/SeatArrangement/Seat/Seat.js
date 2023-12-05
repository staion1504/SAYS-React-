import React from 'react'
import classes from './Seat.module.css';


const Seat = (props) => {
  let style;
  
  if(props.type==="showcaseselected")
   {
      style={backgroundColor: "green"};
   }

   else if(props.type==="SoldOut")
     {
      style={backgroundColor: "red"};
     }

   else if(props.type==="Premium")  
   {
    style={backgroundColor: "blue"};
   }

   else if (props.type==="Disabled")
   {
    style={backgroundColor: "#FFFDD0"};
   }

   else if(props.type==="Emptyspace"){
    style={backgroundColor: "transparent",color: "transparent"};
   }

  return (
    <div className={classes.seats} style={style}>{props.children}</div>
  )
}

export default Seat