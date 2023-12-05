import classes from './SectionContent.module.css';
import SecSubTitle from './SubTitle/SecSubTitle';
import SecTitle from './Title/SecTitle';
const SectionContent=(props)=>{
  return ( 
  <div className={classes.firstseccontent}>
     <SecTitle title={props.title}/>
     <SecSubTitle subtitle={props.subtitle}/>
    <div><a href={props.btnhref} className={classes.booknowbtn}>{props.btnname}</a></div>
  </div>
  )
}

export default SectionContent;