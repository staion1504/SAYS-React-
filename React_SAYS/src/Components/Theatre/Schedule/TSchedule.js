import React, { useState } from 'react'
import classes from './TSchedule.module.css';
import TNavbar from '../TCommon/navbar';
import { Container } from 'react-bootstrap';
import AddScreen from './AddScreen/AddScreen';
import AddShow from './AddShow/AddShow';

const TSchedule = () => {

  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  // const [show3, setShow3] = useState(false);
  // const handleClose3 = () => setShow3(false);
  // const handleShow3 = () => setShow3(true);

  // const [show4, setShow4] = useState(false);
  // const handleClose4 = () => setShow4(false);
  // const handleShow4 = () => setShow4(true);

  const [screens, setScreens] = useState([

    {
      ScreenName: 'A',
      ScreenCapacity: 100
    }
    , {
      ScreenName: 'B',
      ScreenCapacity: 50
    }


  ]);

  const [shows, setShows] = useState([

    {
      ShowTime: "6:30 pm",
      Duration: "2h 30min",
      ScreenName: 'A',
      MovieName: 'Animal',
      ShowFromDate: "	22-12-2023",
      ShowToDate: "31-12-2023"
    },


  ])

  function addScreenHandler(data) {

    setScreens([...screens, { ScreenName: data.screenname, ScreenCapacity: data.screencapacity }]);

  }
  function addShowHandler(data) {

    setShows([...shows,

    {
      ShowTime: data.showtime+" "+data.ampm ,
      Duration: data.duration,
      ScreenName: data.selectscreen,
      MovieName: data.selectmovie,
      ShowFromDate: data.fromdate,
      ShowToDate:data.todate
    }
  
  ]);

  }

  return (
    <div>

      {show1 && <AddScreen show={show1} handleClose={handleClose1} addScreenHandler={addScreenHandler} />}
      {show2 && <AddShow show={show2} handleClose={handleClose2} screens={screens} addShowHandler={addShowHandler}/>}
      {/* {show2 && <AddMovie show={show2} handleClose={handleClose2}/>}
     {show3 && <EditMovie show={show3} handleClose={handleClose3}/>}
     {show4 && <RentMovie show={show4} handleClose={handleClose4}/>} */}

      <TNavbar />
      <div className='mt-[3rem]'>
        <div className={classes.heading}>
          <h4 className={classes.h4}>Main Screens</h4>
          <div className='flex justify-evenly'>
            <button onClick={handleShow1} type="button" className='bg-[green] w-[8rem] h-[2.2rem] mr-[2rem] mt-[1rem] rounded-md text-[white] hover:bg-[indianred]'>
              Add
            </button>
          </div>
        </div>


        <Container className='mt-[2rem]'>

          <div className={classes.screentable}>
            {/* <p className='text-[gold] text-[2rem]'>OOPS...No Screens In Your Theatre</p>                       */}
            <table>
              <thead>
                <tr className={classes.headingrow}>
                  <th>#</th>
                  <th>Screen Name</th>
                  <th>Screen Capacity</th>
                  <th>Seating Arrangement</th>
                  <th>Remove Screen</th>
                </tr>
              </thead>
              <tbody>
                {screens.map((screeninfo, index) =>
                  <tr key={index + 1}>
                    <td>{index + 1}</td>
                    <td>{screeninfo.ScreenName}</td>
                    <td>{screeninfo.ScreenCapacity}</td>
                    <td>
                      <button type="button" className='bg-[blue] w-[6rem] h-[2.2rem] mr-[3rem] rounded-md text-[white] hover:bg-[indianred]'>
                        Edit
                      </button>
                    </td>
                    <td>
                      <button type="button" className='bg-[blue] w-[6rem] h-[2.2rem] mr-[3rem] rounded-md text-[white] hover:bg-[indianred]'>
                        Remove
                      </button>
                    </td>
                  </tr>

                )}





              </tbody>
            </table>


          </div>

        </Container>
      </div>

      <div className='h-[0.01rem] bg-white w-[80%] ml-[9rem] mt-[3rem]'></div>

      <h2 className={classes.schedulingheading}>SCREEN SCHEDULING</h2>
      <div className='mt-[3rem]'>
        <div className={classes.heading}>
          <h4 className={classes.h4}>Movie Shows</h4>
          <div className='flex justify-evenly'>
            <button onClick={handleShow2} type="button" className='bg-[green] w-[8rem] h-[2.2rem] mr-[2rem] mt-[1rem] rounded-md text-[white] hover:bg-[indianred]'>
              Add
            </button>
          </div>
        </div>


        <div className='mt-[2rem] ml-[8rem]'>
          <div className={classes.showsdatatable}>
            {/* <p className='text-[gold] text-[2rem]'>OOPS...No Screens In Your Theatre</p> */}
            <table>
              <thead>
                <tr className={classes.headingrow}>
                  <th>#</th>
                  <th>Show Time</th>
                  <th>Duration</th>
                  <th>Screen Name</th>
                  <th>Movie Name</th>
                  <th>Show From Date</th>
                  <th>Show To Date</th>
                </tr>
              </thead>
              <tbody>

                {shows.map((show, index) =>

                  <tr>
                    <td>{index + 1}</td>
                    <td>{show.ShowTime}</td>
                    <td>{show.Duration}</td>
                    <td>{show.ScreenName}</td>
                    <td>{show.MovieName}</td>
                    <td>{show.ShowFromDate}</td>
                    <td>{show.ShowToDate}</td>
                    <td>
                      <button type="button" className='bg-[blue] w-[6rem] h-[2.2rem] rounded-md text-[white] hover:bg-[indianred]'>
                        Edit
                      </button>
                    </td>
                    <td>
                      <button type="button" className='bg-[blue] w-[6rem] h-[2.2rem] mr-[1rem] rounded-md text-[white] hover:bg-[indianred]'>
                        Remove
                      </button>
                    </td>
                  </tr>

                )}


              </tbody>
            </table>
          </div>
        </div>
      </div>





    </div>



  )
}

export default TSchedule