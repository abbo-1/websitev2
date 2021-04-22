import React from "react"
import '../App.css';
import { Row, Col, Container, Nav, Button, Form, FormControl} from "react-bootstrap";
// import Navbar from 'react-bootstrap/Navbar'
import logo from '../images/nameSmallLogo.png'

const Navbar = ({ sticky }) => (
  <nav className={sticky ? "navbar navbar-sticky" : "navbar"}>

    <div className="navbar--logo-holder">
      {sticky ? <img src={logo} alt="logo" className="navbarLogo" /> : null}
    </div>

    <div  className="navbarLinks">
        <button className="navbarBTN">
            Background
        </button>
        <button className="navbarBTN">
            Work
        </button>
    </div>

  </nav>
// )
// function NavbarTop() {

//     return (

//         <Navbar bg="dark" variant="dark">
//         <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//         <Nav className="mr-auto">
//           <Nav.Link href="#home">Home</Nav.Link>
//           <Nav.Link href="#features">Features</Nav.Link>
//           <Nav.Link href="#pricing">Pricing</Nav.Link>
//         </Nav>
//         <Form inline>
//           <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//           <Button variant="outline-info">Search</Button>
//         </Form>
//       </Navbar>
//     )
// };

)

export default Navbar

