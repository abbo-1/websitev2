import coffeepic from '../images/photo2.png'
import photo from '../images/photo3.png'
import resume from '../documents/abbottResume.pdf'
import { Row, Col, Alert, Container} from "react-bootstrap";

function Greetings() {
    return (
        <Container>
        <Row id="greetingDiv">
            <Col xs={12} md={6}>
                <img src={photo}  id="coffeepic" alt="A photo of me, exactly the kind of guy you want to hire" />
            </Col>
            <Col xs={12} md={6}>
                <p id="greetingsText">Greetings!</p>
                <p id="text">I'm Kevin--a full stack developer based in Houston, Texas. I know that there are countless developer websites and portfolios out there, so whatever brought you here, I offer a sincere thank you for visiting. If you have any questions please don't hesitate to reach out to me!</p>
                {/* <button id="resumeBTN">Résumé</button> */}
                <a href={resume} target="_blank" id="resumeBTN">Résumé</a>
                {/* I went with the fancy spelling because otherwise it felt like it needed a "STOP" and "FAST FORWARD" button next to it. */}
            </Col>
        </Row>
        </Container>
    )
}

export default Greetings