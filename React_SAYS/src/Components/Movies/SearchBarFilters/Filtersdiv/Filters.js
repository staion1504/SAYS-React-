import classes from './Filters.module.css';
import Filter from "../Filter/Filter";
const Filters=()=>{
  return (
    <div className={classes.filtersdiv}>
    <div className={classes.langfilter}>
      <Filter options={["Telugu","Hindi","Tamil"]} label="Language"/>
    </div>
    <div className={classes.genrefilter}>
      <Filter options={["Horror","Comedy","Thriller"]} label="Film Genre"/>
    </div>
    </div>
  );
}

export default Filters;