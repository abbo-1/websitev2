import Divider from '@material-ui/core/Divider';
import { Row, Col, Container, Button } from "react-bootstrap";
import {useState} from "react"

import ThisPage from "../images/portfolio/thiswebsite.png"
import FamPage from "../images/portfolio/familyweb.png"
import BookPage from "../images/portfolio/bookweb.png"
import TitanicExp from "../images/portfolio/titanicconstruction.png"
import TastingBoard from "../images/portfolio/tastingBoard1.png"
import TastingBoardSite from "../images/portfolio/tastingBoardSite.gif"
import LyricGenie from "../images/portfolio/lyricGenie.png"
import LyricGenieSite from "../images/portfolio/lyriceGenieSite.gif"
import RichardsonLogo from "../images/portfolio/richardsonLogo3.png"
import TastingBoardLogo from "../images/portfolio/tbLogo2.png"
import WeibeBrew from "../images/portfolio/wiebeBrewingLogo2.png"
import SleepingCat from "../images/portfolio/sleepingCatLogo.png"
import TedLasso from "../images/portfolio/tedLasso.png"
import Titanic from "../images/portfolio/rmsTitanic.png"
import GunslingersLogo from "../images/portfolio/gunslingersLogo2.png"
import Weibebuilding from "../images/portfolio/weibebuilding.png"

function Portfolio(props) {

return (
        <Container>
        <Row>
        <Col xs={12} md={12}>
            <div class="aboutInfoTitle">
				<h2>Here are a few of the projects I've worked on:</h2>
            </div>
        </Col>
        </Row>

        <Divider class="divider" variant="middle"/>

        <Row>
        <Col xs={{ span: 12, order: 1 }} md={{ span: 12, order: 1 }}>
        <div class="portfolioTitle">
        This Website
        </div>
        </Col>
        <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 2 }}>
        <img src={ThisPage} class="portfolioPic" alt="A screenshot of the webpage you're on right now! Very Inception, I know." />
        <p class="break" />
        <p class="break" />
        <Row>
        <div class="portfolioBtn">
        <Button size="large" class="portfolioBtn" href="https://www.kevinjabbott.com" target="_blank">LINK</Button>
        </div>
        <div class="portfolioBtn">
        <Button size="large" class="portfolioBtn" href="https://github.com/abbo-1/websitev2" target="_blank">CODE</Button>
        </div>
        </Row>
        <p class="break" />
        <p class="break" />
        </Col>
        <Col xs={{ span: 12, order: 3 }} md={{ span: 6, order: 3 }}>
        <p class="aboutInfo">I designed this very website- it's not a template! I used React, React-bootstrap, Material-ui, and several other self-designed elements. The original iteration of this website was much simpler. It was made in pure javascript. I redesigned it so I could get more experience with React (and work with hooks specifically). 
        <p class="break" />
        <p class="break" />
        My goal was to create something simple, clean, and intuitive. I'm happy with how it's turned out- particularly the buttons on the main page that copy the related web addresses directly to the clipboard, and then gives an alert.</p>
        </Col>
        </Row>

        <Divider class="divider" variant="middle"/>

        <Row>
        <Col xs={{ span: 12, order: 4 }} md={{ span: 12, order: 4 }}>
        <div class="portfolioTitle">
        Family History Website
        </div>
        </Col>
        <Col xs={{ span: 12, order: 5 }} md={{ span: 6, order: 5 }}>
        <img src={FamPage} class="portfolioPic" alt="A screenshot of a family history webpage" />
        <p class="break" />
        <p class="break" />
        
        <Row>
        <div class="portfolioBtn">
        <Button size="large" class="portfolioBtn" href="https://www.richardsonfamilyhistory.org/" target="_blank">LINK</Button>
        </div>
        <div class="portfolioBtn">
        <Button size="large" class="portfolioBtn" href="https://github.com/abbo-1/familywebsite2" target="_blank">CODE</Button>
        </div>
        </Row>
        <p class="break" />
        <p class="break" />
        </Col>
        <Col xs={{ span: 12, order: 6 }} md={{ span: 6, order: 6 }}>
        <p class="aboutInfo">This is the first major project I embarked on after I left boot camp. I was hired to create a webpage that would make my client's years of family history research available online for others. I used primarily React, with resources from Material-ui and Semantic-ui- and help from independent projects like react-lightbox.
        <p class="break" />
        <p class="break" />
        Being my first solo project, this project was an education to say the least. The fact that there was so much information to organize made React the perfect solution for this particular project. The biographies/information pages came out really well and, though there are still some things i'd like to go back and tweak, i'm proud of the final result.</p>
        </Col>
        </Row>
        
        <Divider class="divider" variant="middle"/>

        <Row>
        <Col xs={{ span: 12, order: 4 }} md={{ span: 12, order: 4 }}>
        <div class="portfolioTitle">
        Book Website
        </div>
        </Col>
        <Col xs={{ span: 12, order: 5 }} md={{ span: 6, order: 5 }}>
        <img src={BookPage} class="portfolioPic" alt="A screenshot of an author's webpage" />
        <p class="break" />
        <p class="break" />
        
        <Row>
        <div class="portfolioBtn">
        <Button size="large" class="portfolioBtn" href="http://alexandergray.us/" target="_blank">LINK</Button>
        </div>
        <div class="portfolioBtn">
        <Button size="large" class="portfolioBtn" href="https://github.com/abbo-1/alexander_grey" target="_blank">CODE</Button>
        </div>
        </Row>
        <p class="break" />
        <p class="break" />
        </Col>
        <Col xs={{ span: 12, order: 6 }} md={{ span: 6, order: 6 }}>
        <p class="aboutInfo">A simple, single-page site built in react. I also used react-bootstrap. I had fun designing a website that was meant to be heavily theme'd. I found a react component called TypewriterJS that would create the effect of displaying text as though it was being typed out.
        <p class="break" />
        <p class="break" />
        Myself, and the authors, were very pleased with the final result.
        </p>
        </Col>
        </Row>
        
        <Divider class="divider" variant="middle"/>

        <Row>
        <Col xs={{ span: 12, order: 7 }} md={{ span: 12, order: 7 }}>
        <div class="portfolioTitle">
        Titanic: Lifeboat Tracker
        </div>
        </Col>
        <Col xs={{ span: 12, order: 8 }} md={{ span: 6, order: 8 }}>
        <img src={TitanicExp} class="portfolioPic" alt="Screenshot of Titanic Lifeboat Website" />
        <p class="break" />
        <p class="break" />
        <Row>
        <div class="portfolioBtn">
        <Button size="large" target="_blank" disabled>LINK</Button>
        </div>
        <div class="portfolioBtn">
        <Button size="large" class="portfolioBtn" href="https://github.com/abbo-1/project401" target="_blank">CODE</Button>
        </div>
        </Row>
        <p class="break" />
        <p class="break" />
        </Col>
        <Col xs={{ span: 12, order: 9 }} md={{ span: 6, order: 9 }}>
        <p class="aboutInfo">Anyone who knows anything about me knows that i'm a total and complete Titanic enthusiast- (and by enthusiast I mean enthusiastic about the historical event not the tragic loss of life). This website is still under construction- as of mid-2021 it's still in early stages but I wanted to include it here to share some information about a project i'm currently working on.
        <p class="break" />
        <p class="break" />
        This is by far the most ambitious project I've attempted. If it ends up as i've envisioned it, it will utilize React and Redux in order to display a birds-eye view of the ship's deck where the user can see who was where at particular times during sinking. It will include the ability to see historical quotes and first hand accounts about what that person was seeing and doing. It's the best way to really understand what happened (and when it happened) on that cold April night in 1912 as well as it being a great technical challenge. I will update this as I make progress! ~ September 2021
        </p>
        </Col>
        </Row>

        <Divider class="divider" variant="middle"/>

        {/* <Row>
        <Col xs={12} md={12}>
        <div class="portfolioTitle">
        Titanic: Lifeboat Tracker
        </div>
        </Col>
        <Col xs={12} md={6}>
        <img src={TitanicExp} class="portfolioPic" alt="Screenshot of Titanic Lifeboat Website" />
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
        
        <Divider class="divider" variant="middle"/> */}
        
        <Row>

        <Col xs={{ span: 12, order: 10 }} md={{ span: 12, order: 10  }}>
        <div class="portfolioTitle">
        Collaborations
        </div>
        </Col>
        </Row>
            
        <Row>
        <Col md={12}>
        <p class="aboutInfo">These are two projects I collaborated on- the first was called Lyric Genie. It was a simple app utilzing two APIs. The youtube API and another called MusixMatch. You could type in partial lyrics to a song and the app would pull up a list of possible matches. If you selected one the API would pull up the first result from youtube (ideally a music video).
        <p class="break" />
        <p class="break" />
         Tasting Board was an app that allowed users to log, organize, rate, and comment on different alcoholic beverages they've tried. We used postgres, sequelize, javascript, and even implemented local and google authentication for users to sign in.</p>
        <p class="break" />
        <p class="break" />
        </Col>

        <Col xs={{ span: 12, order: 11 }} md={6}>
        <img src={TastingBoard} class="portfolioPic" alt="Screenshot of Tasting Board" />
        <p class="break" />
        <p class="break" />
        </Col>

        <Col xs={{ span: 12, order: 13 }} md={6}>
        <img src={LyricGenie} class="portfolioPic" alt="Gif of Lyric Genie Website" />
        <p class="break" />
        <p class="break" />
        </Col>

        <Col xs={{ span: 12, order: 12 }} md={6}>
        <img src={TastingBoardSite} class="portfolioPic" alt="Gif of Tasting Board Functionality" />
        <p class="break" />
        <p class="break" />
        <div class="portfolioBtn">
        <Button size="large" class="portfolioBtn" href="https://github.com/SamKlep/tastingBoard" target="_blank">CODE</Button>
        </div>
        </Col>

        <Col xs={{ span: 12, order: 14 }} md={6}>
        <img src={LyricGenieSite} class="portfolioPic" alt="Gif of Lyric Genie Website" />
        <p class="break" />
        <p class="break" />
        <div class="portfolioBtn">
        <Button size="large" class="portfolioBtn" href="https://github.com/abbo-1/lyricGenie" target="_blank">CODE</Button>
        </div>
        <p class="break" />
        <p class="break" />
        </Col>
        </Row>


                {/* <Col xs={{ span: 12, order: 11 }} md={{ span: 6, order: 11 }}>
        <img src={TastingBoard} class="portfolioPic" alt="Screenshot of Tasting Board" />
        </Col>

        <Col xs={{ span: 12, order: 12 }} md={{ span: 6, order: 12 }}>
        <img src={TastingBoardSite} class="portfolioPic" alt="Gif of Tasting Board Functionality" />
        <p class="break" />
        <p class="break" />
        <Button size="large" class="portfolioBtn" href="https://github.com/SamKlep/tastingBoard" target="_blank">CODE</Button>
        </Col>

        <Col md={12}>
        <p class="aboutInfo">Tasting Board was an app that allowed users to log, organize, rate, and comment on different alcoholic beverages they've tried.</p>
        </Col>

        <p class="break" />
        <p class="break" />

        <Col xs={{ span: 12, order: 14 }} md={{ span: 6, order: 14 }}>
        <img src={LyricGenie} class="portfolioPic" alt="Gif of Lyric Genie Website" />
        </Col>

        <Col xs={{ span: 12, order: 15 }} md={{ span: 6, order: 15 }}>
        <img src={LyricGenieSite} class="portfolioPic" alt="Gif of Lyric Genie Website" />
        <p class="break" />
        <p class="break" />
        <Button size="large" class="portfolioBtn" href="https://github.com/abbo-1/lyricGenie" target="_blank">CODE</Button>
 */}
{/* 
        </Col> */}
{/* 
        </Row> */}

        <Divider class="divider" variant="middle"/>

        <Row>
        <Col xs={12} md={12}>
        <div class="portfolioTitle">
        Designs
        </div>
        </Col>

        <Row>
        <Col xs={12}>
        <p class="aboutInfo">I've also designed/done the CSS for a handful of subreddits. Please checkout /r/RMS_Titanic and /r/TedLasso on the old version of reddit linked below.</p>
        <p class="break" />
        <p class="break" />
        </Col>
        </Row>

        <Row>
        <Col xs={12} md={6}>
        <img src={TedLasso} class="portfolioPic" alt="Screenshot of Ted Lasso Reddit" />
        <p class="break" />
        <p class="break" />
        <div class="portfolioBtn">
        <Button size="large" class="portfolioBtn" href="https://old.reddit.com/r/TedLasso/" target="_blank">LINK</Button>
        </div>
        <p class="break" />
        <p class="break" />
        </Col>

        <Col xs={12} md={6}>
        <img src={Titanic} class="portfolioPic" alt="Screenshot of RMS_Titanic Reddit" />
        <p class="break" />
        <p class="break" />
        <div class="portfolioBtn">
        <Button size="large" class="portfolioBtn" href="https://old.reddit.com/r/rms_titanic/" target="_blank">LINK</Button>
        </div>
        <p class="break" />
        <p class="break" />
        </Col>
        </Row>

        <Row>
        <Col xs={12}>
        <p class="aboutInfo">One of my side passions is graphic/logo design. Below you'll see some logos I've created for projects I've worked on, independent companies, or by request.</p>
        <p class="break" />
        <p class="break" />
        </Col>
        </Row>

        <Col xs={12} md={6}>
        <img src={SleepingCat} class="portfolioPic" alt="Sleeping Cat Logo" />
        <p class="break" />
        <p class="break" />
        </Col>

        <Col xs={12} md={6}>
        <img src={WeibeBrew} class="portfolioPic" alt="Weibe Brewing Logo" />
        <p class="break" />
        <p class="break" />
        </Col>
        

        <Col xs={12} md={6}>
        <img src={TastingBoardLogo} class="portfolioPic" alt="Tasting Board Logo" />
        <p class="break" />
        <p class="break" />
        </Col>

        <Col xs={12} md={6}>
        <img src={RichardsonLogo} class="portfolioPic" alt="Richardson Website Logo" />
        <p class="break" />
        <p class="break" />
        </Col>


        <Col xs={12} md={6}>
        <img src={GunslingersLogo} class="portfolioPic" alt="Gunslingers Logo" />
        <p class="break" />
        <p class="break" />
        </Col>

        <Col xs={12} md={6}>
        <img src={Weibebuilding} class="portfolioPic" alt="Weibe Building Logo" />
        <p class="break" />
        <p class="break" />
        </Col>
        

        </Row>

        </Container>

    )
}

export default Portfolio