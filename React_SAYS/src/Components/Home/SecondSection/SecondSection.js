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
// Use Redux to store all theatres info based on location and convert that array of obj's into cards and send that to Multi Item carousal component

const SecondSection=()=>{ 
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
             <SearchBar/>
          </Col>

           <Col lg={{span: 6, order: 2}} md={{span: 6, order: 2}} sm={{span: 12, order: 1}} xs={{span: 12, order: 1}}>
            <Location styleobj={{}} showcity={true}/>
          </Col>
        </Row>
      </SearchDiv>
          
          <Row style={{marginTop:"2.5rem"}}>
             <CarousalTitle/>
         
                <MultiItemCarousalWrapper>
                  <Container>
                    <MultiItemCarousal itemarr={theatreitemarr}/>
                 </Container>
    
                </MultiItemCarousalWrapper>   
               
          </Row>
      </Container>
  </TheatreSearch>
  </div>);
}

export default SecondSection;