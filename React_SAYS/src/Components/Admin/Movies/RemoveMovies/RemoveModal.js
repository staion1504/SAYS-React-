import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';


export const RemoveModal = ({show,handleClose}) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className='bg-[#221f1f] text-[gold]'>
           <Modal.Title>Remove Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-[lightgoldenrodyellow]'>
        <form method="post" action="/adminmovies/adminremovemovie"  className="w-[80%] flex justify-center">  
         <div className='flex flex-col'>
          <label for="movie_title" className='text-[1.3rem]'>Movie Title:</label>
          <Dropdown className='border-none ml-2'>
             <Dropdown.Toggle className='text-black bg-white border-none' variant='none'>
                Salaar
             </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Reaady</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Guntur Kaaram</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Simple</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <button type="submit" className='mt-[2rem] border-none bg-[green] text-white w-[6rem] rounded-[5px] p-2 ml-[12rem]'>Confirm</button>
         </div>
      </form>

        </Modal.Body>
        <Modal.Footer>
        <button className=' border-0 bg-[red] text-white rounded-[5px] w-[5.5rem] h-[2.5rem]' onClick={handleClose}>Close</button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
