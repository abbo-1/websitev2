import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Modal from 'react-bootstrap/Modal'
import { Button} from 'react-bootstrap';
import {useState} from "react"

import logo from '../images/nameSmallLogo.png'
import Background from './Background.js'
import Portfolio from './Portfolio.js'

import PropTypes from 'prop-types'

function NavbarFinal() {

  const [showBackground, setShowBackground] = useState(false);
  const handleCloseBackground = () => setShowBackground(false);
  const handleShowBackground = () => setShowBackground(true);

  const [showPortfolio, setShowPortfolio] = useState(false);
  const handleClosePortfolio = () => setShowPortfolio(false);
  const handleShowPortfolio = () => setShowPortfolio(true);


    return (

<Navbar sticky="top" bg="dark" variant="dark" id="NavbarFinal">
<Navbar.Brand>
  <img
    alt=""
    src={logo}
    max-width="100%"
    height="50"
    className="d-inline-block align-top"
  />{' '}
</Navbar.Brand>
<Nav className="ml-auto" >
<Nav.Link onClick={handleShowBackground}>Background</Nav.Link>
<p>.</p>
<Nav.Link  onClick={handleShowPortfolio}>Things I've Made</Nav.Link>
</Nav>



<Modal 
  show={showBackground} 
  onHide={handleCloseBackground}
  dialogClassName="main-modal"
  >
{/* <Button variant="outline-dark" onClick={handleClose}>Close</Button> */}
<Background/>
</Modal>

<Modal 
  show={showPortfolio} 
  onHide={handleClosePortfolio}
  dialogClassName="main-modal2"
  >
{/* <Button variant="outline-dark" onClick={handleClose}>Close</Button> */}
<Portfolio/>
</Modal>


</Navbar>


)
// onClick={openThingsMade}
/* <Modal
  open={open}
  onClose={openThingsMade}
  aria-labelledby="simple-modal-title"
  aria-describedby="simple-modal-description"
>
</Modal> */
}

export default NavbarFinal