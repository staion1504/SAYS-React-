import './SecondSection.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import MultiItemCarousal from '../../Common/MultiItemCarousel/MultiItemCarousal';
import Location from '../../Common/Location/Location';
import TheatreSearch from './Wrapper/TheatreSearch';
import Title from './Title/Title';
import SubTitle from './SubTitle/SubTitle';
import SearchDiv from './Wrapper/SearchDiv';
import SearchBar from './SearchBar/SearchBar';
import MultiItemCarousalWrapper from '../../Common/MultiItemCarousel/MultiItemCarousalWrapper';
import CarousalTitle from './CarousalTitle/CarousalTitle';
import TheatreCard from './TheatreCard/TheatreCard'
import classes from './SecondSection.module.css';
import { useEffect, useState } from 'react';
import { faL } from '@fortawesome/free-solid-svg-icons';
// Use Redux to store all theatres info based on location and convert that array of obj's into cards and send that to Multi Item carousal component

const SecondSection=()=>{ 
  
  const [Tname,setTname]=useState("");
  const [loc,setloc]=useState("Vijayawada");
  const [flag,setflag]=useState(true);
  const [Titemarr,setTitemarr]=useState([]);
  const [Theatrearr,setTheatrearr]=useState([]);

  const getDetails=async ()=>{
    const response = await fetch(`http://localhost:5000/home`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include', 
      body:JSON.stringify({loc:loc,Tname:Tname}),
    });

    const res = await response.json();
    if(res.Tdetails.length===0)
    {
      setflag(false);
    }

    setTheatrearr(res.Tdetails);
  };

  useEffect(()=>{
     //getDetails();
  },[]);

  // useEffect(()=>{
  //   const x= Theatrearr.map((Theatre,index)=>{
  //     return <TheatreCard  TDetails={Theatre}/>
  //    })
  //    setTitemarr([...x]);
  // },[Theatrearr]);

 
   
  const theatreitemarr=[<TheatreCard/>,<TheatreCard/>,<TheatreCard/>,
                        <TheatreCard/>,<TheatreCard/>,<TheatreCard/>,
                        <TheatreCard/>,<TheatreCard/>];
  return ( 
  <div className={classes.style}>
    <TheatreSearch>
    <Container>     
           <Title/> 
           <SubTitle/>
        
      <SearchDiv>
        <Row>
           <Col lg={{span: 6, order: 1}} md={{span: 6, order: 1}} sm={{span: 12, order: 2}} xs={{span: 12, order: 2}}>
             <SearchBar setTname={setTname} Tname={Tname}/>
          </Col>

           <Col lg={{span: 6, order: 2}} md={{span: 6, order: 2}} sm={{span: 12, order: 1}} xs={{span: 12, order: 1}}>
            <Location styleobj={{}} showcity={true} setloc={setloc} loc={loc}/>
          </Col>
        </Row>
      </SearchDiv>
          
          {flag && 
          <Row style={{marginTop:"2.5rem"}}>
             <CarousalTitle/>
         
                <MultiItemCarousalWrapper>
                  <Container>
                    <MultiItemCarousal itemarr={theatreitemarr}/>
                 </Container>
    
                </MultiItemCarousalWrapper>   
               
          </Row>}

          {!flag && <p className='text-[1rem] text-[gold]'>No Theatres Found</p>}
      </Container>
  </TheatreSearch>
  </div>);
}

export default SecondSection;