import coffeepic from '../images/photo2.png'
import { Row, Col, Alert, Container} from "react-bootstrap";

function Greetings() {
    return (
        <Container>
        <Row id="greetingDiv">
            <Col className="w-50  d-inline-block">
                <img src={coffeepic}  id="coffeepic" alt="Logo" />
            </Col>
            <Col className="w-50  d-inline-block">
                <p id="greetingsText">Greetings!</p>
                <p id="text">I'm Kevin- a full-stack developer based in Houston, Texas. I know that there are countless developer websites and portfolios out there, so whatever brought you here, I offer a sincere thank you for visiting. If you have any questions please don't hesitate to reach out to me!</p>
                <button id="resumeBTN">Résumé</button>
            </Col>
        </Row>
        </Container>
    )
}

export default Greetings