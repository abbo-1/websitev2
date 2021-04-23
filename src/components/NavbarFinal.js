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
<Nav.Link href="#features" ClassName="NavbarLink">Background</Nav.Link>
<Nav.Link href="#pricing">Portfolio</Nav.Link>
</Navbar>
)}

export default NavbarFinal