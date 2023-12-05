import classes from './Filter.module.css';
const Filter=(props)=>{
  return (
  <>
    <label className={classes.label}>{props.label} :</label>
       <select className={classes.select}>
       <option value="All" className={classes.option}>All</option>
        {props.options.map(option=>{
          return  <option value={option} className={classes.option}>{option}</option>
        })}
       </select>
   </>);
}

export default Filter;