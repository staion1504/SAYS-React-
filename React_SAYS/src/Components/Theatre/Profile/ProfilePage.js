import React from 'react';
import internalCss from './ProfilePage.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const TheatreProfile = () => {
  // Dummy data for nearbyplaces
  const nearbyplaces = [
    { pimg: 'image_url_1.jpg', pname: 'Place 1' },
    { pimg: 'image_url_2.jpg', pname: 'Place 2' },
    // Add more dummy data as needed
  ];

  return (
    <div className={internalCss.maindiv} style={{
      margin: 0,
      padding: 0,
      overflow: 'hidden',
      background: 'url("https://c1.wallpaperflare.com/preview/330/534/353/seat-chair-theatre-dark.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100%',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>

      {/* Profile Section */}
      <div className={internalCss.profilepage} style={{ display: 'flex', flexDirection: 'column' }}>
        <h1 className={internalCss.profileheading}>Profile </h1>
        <Row className={internalCss.topdiv} style={{ display: 'flex' }}>
          {/* Image */}
          <Col className={internalCss.image}>
            <img
              src="https://content3.jdmagicbox.com/comp/vijayawada/g8/0866px866.x866.150206151341.h1g8/catalogue/stbl-s-balaji-cine-villa-poranki-vijayawada-telugu-movies-ibmzlh5shx.jpg"
              className={internalCss.profileimg}
              alt="Theatre Profile"
            />
          </Col>

          {/* About Section */}
          <Col className={internalCss.about}>
            <Container>
              <Row>
                <h2 className={internalCss.abtheading}>About</h2>
              </Row>
              <Row>
                <Col>
                  <p style={{ color: 'gold' }}>Reference Number</p>
                </Col>
                <Col>
                  <p id={internalCss.REFnumber}>SAYSTHEATRE---</p>
                </Col>
              </Row>
              <Row style={{ marginTop: '2rem' }}>
                <Col>
                  <p style={{ color: 'gold' }}>Address</p>
                </Col>
                <Col>
                  <p id={internalCss.Address}>IIIT Sricity, Gnang Marg, 517646</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p style={{ color: 'gold' }}>Theatre</p>
                </Col>
                <Col id={internalCss.TheatreName}>
                  ARS Cinemas
                </Col>
              </Row>
              <Row>
                <Col>
                  <p style={{ color: 'gold' }}>Contact</p>
                </Col>
                <Col id={internalCss.phnNumber}>
                  +91 9023443259
                </Col>
              </Row>
              <Row>
                <Col>
                  <p style={{ color: 'gold' }}>MailId</p>
                </Col>
                <Col id={internalCss.mailid}>
                  SAYS@gmail.com
                </Col>
              </Row>
              <Row>
                <Col>
                  <p style={{ color: 'gold' }}>License Number</p>
                </Col>
                <Col id={internalCss.License_Number}>
                  IMAX20
                </Col>
              </Row>
            </Container>
          </Col>
          

          {/* Edit Button */}
          <Col className={internalCss.editbtn}>
            <a href="/tprofile/teditprofile">
              <button className="btn btn-primary editbtn">Edit Profile</button>
            </a>
          </Col>
        </Row>


        {/* Nearby Places Section */}
        <div className={internalCss.bottomdiv}>
          <h3 style={{ marginLeft: '1rem' }}>Nearby Places</h3>
          <Container>
            <Row>
              {nearbyplaces && nearbyplaces.length > 0 && nearbyplaces.map((place, index) => (
                <Col lg={3} md={3} sm={3} key={index}>
                  <img src={place.pimg} className={internalCss.nearbyimgs} alt={place.pname} />
                  <p>{place.pname}</p>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default TheatreProfile;