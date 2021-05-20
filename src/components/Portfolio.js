import Divider from '@material-ui/core/Divider';
import { Row, Col, Container, Button } from "react-bootstrap";

import ThisPage from "../images/portfolio/thiswebsite.png"

function Portfolio() {


return (
        <Container>
        <Row>
        <Col xs={11} md={10}>
            <div class="aboutInfoTitle">
				<h2>Things I've Made</h2>
            </div>
        </Col>
        <Col xs={1} md={2}>
            <Button id="xBtn" variant="outline-dark" >CLOSE</Button>
        </Col>
        </Row>
        <Row>
        <div>
			<p class="aboutInfo">Here are a few of the projects i've worked on.</p>
		</div>
        </Row>
        <Divider class="divider" variant="middle"/>
        <Row>
        <div class="yearTitle">
    This Website
        </div>
        <Col xs={12} md={6}>
        <p class="aboutInfo">I designed this website- it's not a template! I used React, React-bootstrap, Material-ui, and many other self-designed elements. The original iteration of this website was much simpler as it was made in pure javascript. I also wanted an excuse to practice hooks. My goal was to create something simple, clean, and intuitive. I'm happy with how it's turned out- particularly the buttons on the main page that will copy my related web addresses directly to the clipboard and give an alert.</p>
        </Col>
        <Col xs={12} md={6}>
        <img src={ThisPage} alt="This Website" />
        <Button size="large" class="portfolioBtn" href="https://www.kevinjabbott.com" target="_blank">LINK</Button>
        <Button size="large" class="portfolioBtn" href="https://github.com/abbo-1/websitev2" target="_blank">CODE</Button>
        </Col>
        </Row>

        <Divider class="divider" variant="middle"/>



        </Container>

    )
}

export default Portfolio