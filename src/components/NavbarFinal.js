import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Modal from 'react-bootstrap/Modal'
import { Button} from 'react-bootstrap';
import {useState} from "react"

import logo from '../images/nameSmallLogo.png'
import Background from './Background.js'

import PropTypes from 'prop-types'

function NavbarFinal() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (

<Navbar sticky="top" bg="dark" variant="dark" id="NavbarFinal">
<Navbar.Brand>
  <img
    alt=""
    src={logo}
    width="100%"
    height="50"
    className="d-inline-block align-top"
  />{' '}
</Navbar.Brand>
<Nav className="ml-auto" >
<Nav.Link className="nav-link" href="#features">Things I Made</Nav.Link>
<p>.</p>
<Nav.Link href="#pricing" onClick={handleShow}>Background</Nav.Link>
</Nav>



<Modal 
  show={show} 
  onHide={handleClose}
  dialogClassName="main-modal"
  >
<Button variant="secondary" onClick={handleClose}>
            Close
</Button>
<Background/>
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