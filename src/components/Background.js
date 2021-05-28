import { Row, Col, Container, Button } from "react-bootstrap";
import Divider from '@material-ui/core/Divider';

import twoThouOne from '../images/history/2001-3.png'
import twoThouFive from '../images/history/2005-2.png'
import twoThouEight from '../images/history/2008-2.png'

{/* <Container className="background3">
<Row>
<ThemeProvider theme={theme}>
    <Col xs={12} md={4}> */}


function Background() {

      return (
        <Container>
        <Row>
        <Col xs={11} md={10}>
            <div class="aboutInfoTitle">
				<h2>My Background</h2>
            </div>
         </Col>
        <Col xs={1} md={2}>
            <Button id="xBtn" variant="outline-dark" >CLOSE</Button>
        </Col>
        </Row>
        <Row>
        <Col xs={12} md={6}>
        <div class= "centerThis">
            <div class="yearTitle">
                2001
            </div>
				<p class="aboutInfo centerThis">
                    My passion for technology took root while watching my older brother build and fix computers. Under his guidance, I built my first PC in 7th grade. 
                <p class="break" />
                <p class="break" />
                    Though my primary motivation at the time was merely to be able to play games like Starcraft, Max Payne, Unreal Tournament, and Fallout 2 - it ended up being the foundation for a life long passion for technology.
                </p>
		    </div>
        </Col>
        <Col xs={12} md={6}>
            <img class="img-fluid rounded" src={twoThouOne} alt="" />
			<p class="turnItWhite">
                With my first computer
            </p>
        </Col>
        </Row>
        <Divider class="divider" variant="middle"/>
        <Row>
        <Col xs={12} md={6}>
        <img class="img-fluid rounded" src={twoThouFive} alt="" />
            <p class="turnItWhite">
                Me (left) and my brother replacing a network card
            </p>
        </Col>
        <Col xs={12} md={6}>
        <div class= "centerThis">
        <div class="yearTitle">
            2005
        </div>
			<p class="aboutInfo">PC gaming opened the door to technology, but once I went through it there was no turning back. In high school I tested for my A+ certification and enrolled in networking classes as electives. I also got my first taste of web development, learning basic HTML and CSS.</p>
		</div>
        </Col>
        </Row>
        <Divider class="divider" variant="middle"/>
        <Row>
        <Col xs={12} md={6}>
        <div class= "centerThis">
            <div class="yearTitle">
                2008
            </div>
            <div>
				<p class="aboutInfo">One of my very first jobs out of high school was at a local community college where I managed a computer lab. Here I honed my ability to diagnose, fix, and maintain over three dozen machines. 
                <p class="break" />
                <p class="break" />
                Eventually I earned my Bachelor's degree at University of Houston Downtown, where I graduated with a 4.0.</p>
		    </div>
        </div>
        </Col>
        <Col xs={12} md={6}>
            <img class="img-fluid rounded" src={twoThouEight} alt="" />
                <p class="turnItWhite">					
                Running the lab
                </p>
        </Col>
        </Row>
        <Divider class="divider" variant="middle"/>
        <Row>
        <div class= "centerThis">
        <p class="aboutInfo">In the decade+ that has elapsed- I got a 'just-to-get-by' job, got married, adopted a rescue dog,
        {/* sought distraction from the existential terror and dred that comes from our fleeting mortal existance ,  */} and moved into my first house.
        <p class="break" />
        <p class="break" />
        Last year, I decided to commit myself to turning this lifelong hobby and interest into a career. I invested my spare time in learning to code using the wealth of online resources and enrolled myself a coding program where I was able to learn from industry veterans.</p>
        </div>
        <p class="break" />
        <p class="break" />
        </Row>
        </Container>
      )
}

export default Background