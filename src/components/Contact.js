import { Row, Col, Container} from "react-bootstrap";
import Button from '@material-ui/core/Button';
import github from "../images/github.png"
import linkedin from "../images/linkedin.png"
import email from "../images/email.png"

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
// import { Alert, AlertTitle } from '@material-ui/lab';

import useClipboard from "react-use-clipboard";

// const linkedInClick = () => {
//     window.open("https://www.linkedin.com/in/kevin-abbott-bb23268b", "_blank",)
// }

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#fbff07'
      },
    },
    secondary: {
        main: '#f0326b'
    },
  });


function Contact() {

    const [isCopied, setCopied] = useClipboard("https://github.com/abbo-1");
    const [isCopied2, setCopied2] = useClipboard("abbott.kevinj@gmail.com");
    const [isCopied3, setCopied3] = useClipboard("https://www.linkedin.com/in/kevin-abbott-bb23268b");


    // <Alert severity="success">
    // <AlertTitle>Success</AlertTitle>
    // This is a success alert — <strong>check it out!</strong>

    // </Alert>

    return (
        <Container className="background3">
        <Row>
        <ThemeProvider theme={theme}>
            <Col className="w-33.3  d-inline-block">
            <div class="text-center">
            <img src={github}  class="contactLogos" alt="Github Logo" />
					{/* <h3 class="contactHeader">GITHUB</h3> */}
                    <p/>
                    <Button variant="contained" size="large" color="primary" href="https://github.com/abbo-1" target="_blank">GITHUB</Button>
                    {/* <a class="linkButtons" href="https://github.com/abbo-1" target="_blank">Take Me There</a> */}
                    <p/>
                    <Button variant="contained" size="large" color="secondary" onClick={setCopied}>Copy to Clipboard</Button>
                    
            </div>
            </Col>
            <Col className="w-33.3  d-inline-block">
            <div class="text-center">
            <img src={email}  class="contactLogos" alt="Email Icon" />
					{/* <h3 class="contactHeader">E-MAIL</h3> */}
					{/* <a class="linkButtons" href="mailto:abbott.kevinj@gmail.com">E-mail Directly</a> */}
                    <p/>
                    <Button variant="contained" size="large" color="primary" href="mailto:abbott.kevinj@gmail.com" target="_blank">E-mail Directly</Button>
                    <p/>
                    <Button variant="contained" size="large" color="secondary" onClick={setCopied2}>Copy to Clipboard</Button>
            </div>
            </Col>
            <Col className="w-33.3  d-inline-block">
            <div class="text-center">
            <img src={linkedin}  class="contactLogos" alt="LinkedIn Logo" />
					{/* <h3 class="contactHeader">LINKED IN</h3> */}
                    <p/>
                    <Button variant="contained" size="large" color="primary" href="https://www.linkedin.com/in/kevin-abbott-bb23268b" target="_blank">LINKEDIN</Button>
					{/* <a class="linkButtons" href="https://www.linkedin.com/in/kevin-abbott-bb23268b" target="_blank">Take Me There</a> */}
                    <p/>
                    <Button variant="contained" size="large" color="secondary" onClick={setCopied3}>Copy to Clipboard</Button>

            </div>
            </Col>
            </ThemeProvider >
        </Row>
        </Container>
    )
}

export default Contact