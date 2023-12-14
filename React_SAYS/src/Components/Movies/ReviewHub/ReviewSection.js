import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle/SectionTitle";
import ReviewHubCaurosel from "./ReviewHubCaurosel/ReviewHubCaurosel";
// import classes from "./ReviewSection.module.css";

const ReviewSection=()=>{
 return (
 <>
       <div className="ml-7 mt-5">
         <SectionTitle title="Review Hub"/>
       </div>
       <div className="m-4">   
        <Link to="/User/MovieReview"><ReviewHubCaurosel/></Link>
       </div>
</>);
}

export default ReviewSection;