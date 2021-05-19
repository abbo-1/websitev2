import Divider from '@material-ui/core/Divider';
import { Row, Col, Container, Button } from "react-bootstrap";

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



        <Divider class="divider" variant="middle"/>
      test
        </Container>

    )
}

export default Portfolio