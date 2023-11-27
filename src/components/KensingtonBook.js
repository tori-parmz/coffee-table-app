import React from 'react'
import KensingtonGardens from "../assets/kensington-gardens-book.png";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

const KensingtonBook = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip-2" {...props}>
          <i>Kensington Gardens</i><br></br>
          Rodrigo Fresán<br></br>
          2003
        </Tooltip>
      );
  return (
    <div>
    <OverlayTrigger
    placement="left"
    delay={{ show: 250, hide: 300 }}
    overlay={renderTooltip}
  >
        <button className='item-button' onClick={handleShow}><img id='kensington-book' src={KensingtonGardens} alt='Pavillion of Dreams, by Harold Budd' width="180px"></img></button>
    </OverlayTrigger>
    <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
          <i>Kensington Gardens</i><br></br>
          Rodrigo Fresán<br></br>
          <h6>2003</h6>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <a href="https://www.goodreads.com/book/show/41812831-the-hundred-years-war-on-palestine" target="_blank" rel="noopener noreferrer"><img id='hb-album' src={KensingtonGardens} alt='Pavillion of Dreams, by Harold Budd' width="200px"></img></a><br></br>
          <i>Kensington Gardens</i> has stayed with me since the first time I read it at 17. Rodrigo Fresán's storytelling is immersive while blending nonfiction historical accounts with prose. The narrative presents itself as a collage to sift through and is, to this day, unlike any other book I've ever read. Sadly, I've never spoken with anyone else who has read this book. If you have read <i>Kensington Gardens</i>, please email me at <a href='mailto:vparham@worcester.edu'>vparham@worcester.edu</a>.<br></br>
          <br></br>I would love to hear from you, thanks!
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default KensingtonBook