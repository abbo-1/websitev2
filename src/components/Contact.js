import { Row, Col, Alert, Container} from "react-bootstrap";
import github from "../images/github.png"
import linkedin from "../images/linkedin.png"
import email from "../images/email.png"

function Contact() {
    return (
        <Container className="background3">
        <Row>
            <Col className="w-33.3  d-inline-block">
            <img src={github}  class="contactLogos" alt="Github Logo" />
					<h3 class="contactHeader">GITHUB</h3>
					<a class="linkButtons" href="https://github.com/abbo-1" target="_blank">Take Me There</a>
					<p class="plainContactText" >Plain Text: 
					https://github.com/abbo-1</p>
            </Col>
            <Col className="w-33.3  d-inline-block">
            <img src={email}  class="contactLogos" alt="Email Icon" />
					<h3 class="contactHeader">E-MAIL</h3>
					<a class="linkButtons" href="mailto:abbott.kevinj@gmail.com">E-mail Directly</a>
					<p class="plainContactText">Plain Text: 
					abbott.kevinj@gmail.com</p>
            </Col>
            <Col className="w-33.3  d-inline-block">
            <img src={linkedin}  class="contactLogos" alt="LinkedIn Logo" />
					<h3 class="contactHeader">LINKED IN</h3>
					<a class="linkButtons" href="https://www.linkedin.com/in/kevin-abbott-bb23268b" target="_blank">Take Me There</a>
					<p class="plainContactText">Plain Text:
					https://www.linkedin.com/in/kevin-abbott-bb23268b</p>
            </Col>
        </Row>
        </Container>
    )
}

export default Contact