import { Row, Col, Alert, Container} from "react-bootstrap";
import Button from '@material-ui/core/Button';
import github from "../images/github.png"
import linkedin from "../images/linkedin.png"
import email from "../images/email.png"

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

// const linkedInClick = () => {
//     window.open("https://www.linkedin.com/in/kevin-abbott-bb23268b", "_blank",)
// }

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#fbff07'
      },
    },
  });

function Contact() {
    return (
        <Container className="background3">
        <Row>
        <ThemeProvider theme={theme}>
            <Col className="w-33.3  d-inline-block">
            <div class="text-center">
            <img src={github}  class="contactLogos" alt="Github Logo" />
					<h3 class="contactHeader">GITHUB</h3>
                    <Button variant="contained" color="primary" href="https://github.com/abbo-1" target="_blank">Take Me There</Button>
                    {/* <a class="linkButtons" href="https://github.com/abbo-1" target="_blank">Take Me There</a> */}
					<p class="plainContactText" >Plain Text: 
					https://github.com/abbo-1</p>
            </div>
            </Col>
            <Col className="w-33.3  d-inline-block">
            <div class="text-center">
            <img src={email}  class="contactLogos" alt="Email Icon" />
					<h3 class="contactHeader">E-MAIL</h3>
					{/* <a class="linkButtons" href="mailto:abbott.kevinj@gmail.com">E-mail Directly</a> */}
                    <Button variant="contained" color="primary" href="mailto:abbott.kevinj@gmail.com" target="_blank">E-mail Directly</Button>
					<p class="plainContactText">Plain Text: 
					abbott.kevinj@gmail.com</p>
            </div>
            </Col>
            <Col className="w-33.3  d-inline-block">
            <div class="text-center">
            <img src={linkedin}  class="contactLogos" alt="LinkedIn Logo" />
					<h3 class="contactHeader">LINKED IN</h3>
                    <Button variant="contained" color="primary" href="https://www.linkedin.com/in/kevin-abbott-bb23268b" target="_blank">Take Me There</Button>
					{/* <a class="linkButtons" href="https://www.linkedin.com/in/kevin-abbott-bb23268b" target="_blank">Take Me There</a> */}
					<p class="plainContactText">Plain Text:
					https://www.linkedin.com/in/kevin-abbott-bb23268b</p>
            </div>
            </Col>
            </ThemeProvider >
        </Row>
        </Container>
    )
}

export default Contact