import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Modal from '@material-ui/core/Modal';

import logo from '../images/nameSmallLogo.png'

import PropTypes from 'prop-types'

function NavbarFinal( {openThingsMade} ) {
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
<Nav.Link className="nav-link" href="#features" >Things I Made</Nav.Link>
<p>.</p>
<Nav.Link href="#pricing">Background</Nav.Link>
</Nav>
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