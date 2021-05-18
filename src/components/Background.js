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
				<h2>How I Got Here</h2>
            </div>
        </Col>
        <Col xs={1} md={2}>
            <Button id="xBtn" variant="outline-dark" >CLOSE</Button>
        </Col>
        </Row>
        <Row>
        <Col xs={12} md={6}>
            <div class="col-md-6">
				<p class="aboutInfo centerThis">My passion for technology was born while watching my older brother build and fix computers. With his guidance, I built my first PC in 7th grade. Though my primary motivation was the ability to play games like Starcraft, Max Payne, Unreal Tournament, and Fallout 2 - it ended up being the foundation for a life long passion for technology.</p>
		    </div>
        </Col>
        <Col xs={12} md={6}>
            <img class="img-fluid rounded" src={twoThouOne} alt="" />
				<div>
                <h2>2001</h2>
				<p>Me with my first computer. <h4>Note: the super cool, and not at all nerdy, signed George Takei photo in the background.</h4></p>
				</div>
        </Col>
        </Row>
        <Divider class="divider" variant="middle"/>
        <Row>
        <Col xs={12} md={6}>
        <img class="img-fluid rounded" src={twoThouFive} alt="" />
			<div>
                <h2>2005</h2>
                <p>Me (left) and my brother. <h4>Changing out a network card if I recall correctly.</h4></p>
		    </div>
        </Col>
        <Col xs={12} md={6}>
        <div class="col-md-6">
				<p class="aboutInfo">PC gaming opened the door to technology, but once I went through it there was no turning back. In high school I tested for my A+ certification and enrolled in networking classes as electives. I also got my first taste of web development, learning basic HTML and CSS.</p>
		</div>
        </Col>
        </Row>
        <Divider class="divider" variant="middle"/>
        <Row>
        <Col xs={12} md={6}>
            <div class="col-md-6 align-self-center">
				<p class="aboutInfo">One of my very first jobs out of high school was at a local community college. where I managed a computer lab. I honed my ability to diagnose, fix, and maintain three dozen machines. As I got older I found other interests- eventually earning my Bachelor's degree, where I graduated with a 4.0. I invested my spare time in learning to code through the wealth of online resources and a coding program where I was able to learn from industry veterans.</p>
		    </div>
        </Col>
        <Col xs={12} md={6}>
            <img class="img-fluid rounded" src={twoThouEight} alt="" />
				<div>
                <h2>2008</h2>
				<p>									
                Running the lab</p>
				</div>
        </Col>
        </Row>
        <Divider class="divider" variant="middle"/>
        <Row>
        <p class="aboutInfo">Obviously that's an incredibly truncated version of my life. In the decade+ that has elapsed- I went to college, got a 'just-to-get-by' job, married, adopted a dog, and sought distraction from the existential terror and dred that comes from our fleeting mortal existance. Last year, I decided to turn my hobby into a career and commited myself to learning everything I can about web development.</p>
        </Row>
        </Container>
      )
}

export default Background