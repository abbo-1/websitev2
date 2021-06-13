import React, {useState, useRef, useEffect} from "react"
import { Row, Col, Container} from "react-bootstrap";
import Button from '@material-ui/core/Button';
import github from "../images/github.png"
import linkedin from "../images/linkedin.png"
import email from "../images/email.png"

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { Alert, AlertTitle } from '@material-ui/lab';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

import useClipboard from "react-use-clipboard";

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#fbff07',
        contrastText: 'black'
      },
    secondary: {
        //main: '#f0326b'
        main: '#1f2532'
    },
},
});

function Contact() {

    const [isCopiedGithub, setCopiedGithub] = useClipboard("https://github.com/abbo-1");

    const [openGithub, setOpenGithub] = useState(false);

    const handleCloseGithub = (event, reason) => {
      if (reason === 'clickaway') {
      return;
    }
    setOpenGithub(false);
};

    const handleCopiedGithub = () => {
      setCopiedGithub();
      setOpenGithub(true);
};

    const [isCopiedEmail, setCopiedEmail] = useClipboard("abbott.kevinj@gmail.com");

    const [openEmail, setOpenEmail] = useState(false);

      const handleCloseEmail = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpenEmail(false);
      };

      const handleCopiedEmail = () => {
        setCopiedEmail();
        setOpenEmail(true);
  };
  
    const [isCopiedLinkedIn, setCopiedLinkedIn] = useClipboard("https://www.linkedin.com/in/kevin-abbott-bb23268b");
    
    const [openLinkedIn, setOpenLinkedIn] = useState(false);

    const handleCloseLinkedIn = (event, reason) => {
          if (reason === 'clickaway') {
          return;
      }
      setOpenLinkedIn(false);
    };

    const handleCopiedLinkedIn = () => {
      setCopiedLinkedIn();
      setOpenLinkedIn(true);
};

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
      }
      
      const useStyles = makeStyles((theme) => ({
        root: {
          width: '100%',
          '& > * + *': {
            marginTop: theme.spacing(2),
          },
        },
      }));

      const classes = useStyles();
      
return (
        <Container className="background3">
        <Row>
        <ThemeProvider theme={theme}>
            <Col xs={12} md={4}>
            <p class="break" />
            <p class="break" />
            <div class="text-center">
            <img src={github}  class="contactLogos" alt="Github Logo" />
					{/* <h3 class="contactHeader">GITHUB</h3> */}
                    <p/>
                    <Button variant="contained" size="large" color="primary" href="https://github.com/abbo-1" target="_blank">GITHUB</Button>
                    <p/>
                    <Button variant="contained" size="large" color="secondary" onClick={handleCopiedGithub}>Copy to Clipboard</Button>
                    
            </div>
            </Col>
            <Col xs={12} md={4}>
            <p class="break" />
            <p class="break" />
            <div class="text-center">
            <img src={email}  class="contactLogos" alt="Email Icon" />
					{/* <h3 class="contactHeader">E-MAIL</h3> */}
                    <p/>
                    <Button variant="contained" size="large" color="primary" href="mailto:abbott.kevinj@gmail.com" target="_blank">E-mail Directly</Button>
                    <p/>
                    <Button variant="contained" size="large" color="secondary" onClick={handleCopiedEmail}>Copy to Clipboard</Button>
            </div>
            </Col>
            <Col xs={12} md={4}>
            <p class="break" />
            <p class="break" />
            <div class="text-center">
            <img src={linkedin}  class="contactLogos" alt="LinkedIn Logo" />
					{/* <h3 class="contactHeader">LINKED IN</h3> */}
                    <p/>
                    <Button variant="contained" size="large" color="primary" href="https://www.linkedin.com/in/kevin-abbott-bb23268b" target="_blank">LINKEDIN</Button>
                    <p/>
                    <Button variant="contained" size="large" color="secondary" onClick={handleCopiedLinkedIn}>Copy to Clipboard</Button>
            

                    {/* <h1>{count}</h1> */}
			        {/* <button onClick={() => setCount(count + 1)}>Click to Increment</button> */}

            </div>
            </Col>

            <div className={classes.root}>

            <Snackbar open={openLinkedIn} autoHideDuration={2000} onClose={handleCloseLinkedIn}>
            <Alert onClose={handleCloseLinkedIn} severity="success">
            Kevin's LinkedIn URL successfully copied!
            </Alert>
            </Snackbar>

            <Snackbar open={openEmail} autoHideDuration={2000} onClose={handleCloseEmail}>
            <Alert onClose={handleCloseEmail} severity="success">
            Kevin's e-mail address successfully copied!
            </Alert>
            </Snackbar>
            
            <Snackbar open={openGithub} autoHideDuration={2000} onClose={handleCloseGithub}>
            <Alert onClose={handleCloseGithub} severity="success">
            Kevin's Github URL successfully copied!
            </Alert>
            </Snackbar> 

            </div> 

            </ThemeProvider >
        </Row>
        </Container>
    )
}

export default Contact