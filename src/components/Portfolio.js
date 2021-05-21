import Divider from '@material-ui/core/Divider';
import { Row, Col, Container, Button } from "react-bootstrap";

import ThisPage from "../images/portfolio/thiswebsite.png"
import FamPage from "../images/portfolio/familyweb.png"

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
        <Col xs={12} md={12}>
        <div class="portfolioTitle">
        This Website
        </div>
        </Col>
        <Col xs={12} md={6}>
        <img src={ThisPage} class="portfolioPic" alt="A screenshot of the webpage you're on right now! Very Inception, I know." />
        <Button size="large" class="portfolioBtn" href="https://www.kevinjabbott.com" target="_blank">LINK</Button>
        <Button size="large" class="portfolioBtn" href="https://github.com/abbo-1/websitev2" target="_blank">CODE</Button>
        </Col>
        <Col xs={12} md={6}>
        <p class="aboutInfo">I designed this website- it's not a template! I used React, React-bootstrap, Material-ui, and many other self-designed elements. The original iteration of this website was much simpler as it was made in pure javascript. I also was looking for excuses to practice hooks. 
        <p class="break" />
        <p class="break" />
        My goal was to create something simple, clean, and intuitive. I'm happy with how it's turned out- particularly the buttons on the main page that will copy my related web addresses directly to the clipboard and give an alert.</p>
        </Col>
        </Row>

        <Divider class="divider" variant="middle"/>

        <Row>
        <Col xs={12} md={12}>
        <div class="portfolioTitle">
        Family History Website
        </div>
        </Col>
        <Col xs={12} md={6}>
        <img src={FamPage} class="portfolioPic" alt="A screenshot of a family history webpage" />
        <Button size="large" class="portfolioBtn" href="https://www.richardsonfamilyhistory.org/" target="_blank">LINK</Button>
        <Button size="large" class="portfolioBtn" href="https://github.com/abbo-1/familywebsite2" target="_blank">CODE</Button>
        </Col>
        <Col xs={12} md={6}>
        <p class="aboutInfo">I designed this website- it's not a template! I used React, React-bootstrap, Material-ui, and many other self-designed elements. The original iteration of this website was much simpler as it was made in pure javascript. I also was looking for excuses to practice hooks. 
        <p class="break" />
        <p class="break" />
        My goal was to create something simple, clean, and intuitive. I'm happy with how it's turned out- particularly the buttons on the main page that will copy my related web addresses directly to the clipboard and give an alert.</p>
        </Col>
        </Row>

        </Container>

    )
}

export default Portfolio