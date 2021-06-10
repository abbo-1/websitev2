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
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" id="NavbarFinal">
      <Navbar.Brand>
        <img
          alt=""
          src={logo}
          max-width="100%"
          height="50"
          className="d-inline-block align-top"
          />{' '}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" >
          <Nav.Link onClick={handleShowBackground}>Background</Nav.Link>
          {/* <p>.</p> */}
          <Nav.Link  onClick={handleShowPortfolio}>Things I've Made</Nav.Link>
        </Nav>
      </Navbar.Collapse>


{/* // ......................
// <Navbar defaultExpanded  sticky="top" bg="dark" variant="dark" id="NavbarFinal">
// <Navbar.Brand>
//   <img
//     alt=""
//     src={logo}
//     max-width="100%"
//     height="50"
//     className="d-inline-block align-top"
//   />{' '}
// </Navbar.Brand>
// <Navbar.Toggle aria-controls="responsive-navbar-nav" />
// <Navbar.Collapse id="responsive-navbar-nav">
// <Nav className="ml-auto" >
// <Nav.Link onClick={handleShowBackground}>Background</Nav.Link>
// <p>.</p>
// <Nav.Link  onClick={handleShowPortfolio}>Things I've Made</Nav.Link>
// </Nav>
// </Navbar.Collapse> */}


<Modal 
  show={showBackground} 
  onHide={handleCloseBackground}
  dialogClassName="main-modal"
  >
<Button variant="outline-dark" id="closeBtn" onClick={handleCloseBackground}>Close</Button>
<Background/>
</Modal>

<Modal 
  show={showPortfolio} 
  onHide={handleClosePortfolio}
  dialogClassName="main-modal2"
  >
<Button variant="outline-dark" id="closeBtn2" onClick={handleClosePortfolio}>Close</Button>
<Portfolio/>
</Modal>

</Navbar>
)
}


export default NavbarFinal