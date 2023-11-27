import React from 'react';
import HundredYears from "../assets/100-yrs-war-book.png";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Badge from 'react-bootstrap/Badge';

const HundredYearsBook = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip-2" {...props}>
      <i>The Hundred Years War on Palestine</i><br></br>
      Rashid Khalidi<br></br>
      2020
    </Tooltip>
  );
  return (
    <div>
      <OverlayTrigger
    placement="top"
    delay={{ show: 250, hide: 300 }}
    overlay={renderTooltip}
  >
      <button className='item-button' onClick={handleShow}><img id='hundred-years' src={HundredYears} alt='Pavillion of Dreams, by Harold Budd' width="180px"></img></button>
      </OverlayTrigger>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
          <i>The Hundred Years War on Palestine</i><br></br>
      Rashid Khalidi<br></br>
      <h6>2020</h6>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <a href="https://www.goodreads.com/book/show/41812831-the-hundred-years-war-on-palestine" target="_blank" rel="noopener noreferrer"><img id='hb-album' src={HundredYears} alt='Pavillion of Dreams, by Harold Budd' width="200px"></img></a><br></br>
          This book is on my coffee table today as current events urgently remind me that that there is always historical context leading up to devastating fall out. It's on us to learn the history and not let it repeat.<br></br>
          <a href='https://youtu.be/QnnYEZxvwwY?si=f6WZJLftj-1EP30S' target="_blank" rel="noopener noreferrer"><Badge pill bg="success">Listen to the Book in Full</Badge></a> 
          <a href='https://www.jewishvoiceforpeace.org/about/#Vision' target="_blank" rel="noopener noreferrer"><Badge pill bg="primary">Learn more with Jewish Voice for Peace</Badge></a>
          <a href='https://uscpr.org/activist-resource/palestine-101/?emci=71839da5-1074-ee11-b004-00224832eb73&emdi=79ef3577-a28b-ee11-8925-00224832e811&ceid=11301170' target="_blank" rel="noopener noreferrer"><Badge pill bg="danger">Learn more with UCPR</Badge></a>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default HundredYearsBook