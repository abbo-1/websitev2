import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import logo from '../images/nameSmallLogo.png'

function NavbarFinal() {
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
<Nav.Link href="#pricing">Background</Nav.Link>

</Nav>
</Navbar>
)}

export default NavbarFinal