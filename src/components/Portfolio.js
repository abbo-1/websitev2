import Divider from '@material-ui/core/Divider';
import { Row, Col, Container, Button } from "react-bootstrap";

import ThisPage from "../images/portfolio/thiswebsite.png"
import FamPage from "../images/portfolio/familyweb.png"
import TitanicExp from "../images/portfolio/titanicconstruction.png"
import TastingBoard from "../images/portfolio/tastingBoard1.png"
import TastingBoardSite from "../images/portfolio/tastingBoardSite.gif"
import LyricGenie from "../images/portfolio/lyricGenie.png"
import LyricGenieSite from "../images/portfolio/lyriceGenieSite.gif"



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
        <p class="aboutInfo">This is the first major project I embarked on after I left boot camp. I was hired to create a webpage that would make my client's years of family history research available online for others. I used primarily React, with resources from Material-ui and Semantic-ui- and help from independent projects like react-lightbox.
        <p class="break" />
        <p class="break" />
        Being my first solo project, this project was an education to say the least. The fact that there was so much information to organize made React the perfect solution for this particular project. The biographies/information pages came out really well and though there's already some things i'd like to go back and tweak, i'm proud of the final result.</p>
        </Col>
        </Row>
        
        <Divider class="divider" variant="middle"/>

        <Row>
        <Col xs={12} md={12}>
        <div class="portfolioTitle">
        Titanic: Lifeboat Tracker
        </div>
        </Col>
        <Col xs={12} md={6}>
        <img src={TitanicExp} class="portfolioPic" alt="A screenshot of a family history webpage" />
        <Button size="large" class="portfolioBtn" target="_blank" disabled>LINK</Button>
        <Button size="large" class="portfolioBtn" href="https://github.com/abbo-1/project401" target="_blank">CODE</Button>
        </Col>
        <Col xs={12} md={6}>
        <p class="aboutInfo">Anyone who knows anything about me knows that i'm an amateur Titanic historian. This app is still under construction- as of mid-2021 it's still in it's nascent stages but I wanted to include it here as a place holder and to share some information about a project i'm currently working on.
        <p class="break" />
        <p class="break" />
        This is by far the most ambitious project i've attempted. If it ends up as i've envisioned it, it will utilize React and Redux in order to display a birds-eye view of the ship's deck where the user can interact with the lifeboats to really understand what on the cold April night in 1912. I will update this as I make progress.
        </p>
        </Col>
        </Row>

        <Divider class="divider" variant="middle"/>

        <Row>
        <Col xs={12} md={12}>
        <div class="portfolioTitle">
        Titanic: Lifeboat Tracker
        </div>
        </Col>
        <Col xs={12} md={6}>
        <img src={TitanicExp} class="portfolioPic" alt="A screenshot of a family history webpage" />
        <Button size="large" class="portfolioBtn" target="_blank" disabled>LINK</Button>
        <Button size="large" class="portfolioBtn" href="https://github.com/abbo-1/project401" target="_blank">CODE</Button>
        </Col>
        <Col xs={12} md={6}>
        <p class="aboutInfo">Anyone who knows anything about me knows that i'm an amateur Titanic historian. This app is still under construction- as of mid-2021 it's still in it's nascent stages but I wanted to include it here as a place holder and to share some information about a project i'm currently working on.
        <p class="break" />
        <p class="break" />
        This is by far the most ambitious project i've attempted. If it ends up as i've envisioned it, it will utilize React and Redux in order to display a birds-eye view of the ship's deck where the user can interact with the lifeboats to really understand what on the cold April night in 1912. I will update this as I make progress.
        </p>
        </Col>
        </Row>
        
        <Divider class="divider" variant="middle"/>
        
        <Row>

        <Col xs={12} md={12}>
        <div class="portfolioTitle">
        Collaborations
        </div>
        </Col>

        <Col xs={12} md={6}>
        <img src={TastingBoard} class="portfolioPic" alt="Screenshot of Tasting Board" />
        </Col>

        <Col xs={12} md={6}>
        <img src={LyricGenie} class="portfolioPic" alt="Screenshot of Tasting Board" />
        </Col>


        <Row>

        <Col xs={12} md={6}>
        <img src={TastingBoardSite} class="portfolioPic" alt="Gif of Tasting Board Functionality" />
        <Button size="large" class="portfolioBtn" href="https://github.com/abbo-1/project401" target="_blank">CODE</Button>
        </Col>

        <Col xs={12} md={6}>
        <img src={LyricGenieSite} class="portfolioPic" alt="Gif of Tasting Board Functionality" />
        <Button size="large" class="portfolioBtn" href="https://github.com/abbo-1/project401" target="_blank">CODE</Button>
        </Col>

        </Row>




{/* 
        <img src={TastingBoardSite} class="portfolioPic" alt="Gif of Tasting Board Functionality" />
        <Button size="large" class="portfolioBtn" href="https://github.com/abbo-1/project401" target="_blank">CODE</Button>
        <p class="aboutInfo">This is an </p>
        </Col>
        <img src={LyricGenieSite} class="portfolioPic" alt="Gif of Tasting Board Functionality" />
        <Button size="large" class="portfolioBtn" href="https://github.com/abbo-1/project401" target="_blank">CODE</Button>
        <p class="aboutInfo">This is an </p> */}
        {/* </Col>
        </Row> */}

        <Divider class="divider" variant="middle"/>

        <Row>
        <Col xs={12} md={12}>
        <div class="portfolioTitle">
        Designs
        </div>
        </Col>
        </Row>

        </Container>

    )
}

export default Portfolio