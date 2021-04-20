import { Row, Col, Alert, Container} from "react-bootstrap";



function Skills() {
    return (
        <Container className="background2">
        <Row>
            <Col className="w-10  d-inline-block">
            <div class="col-12 col-md-2">
				<h2>Skills</h2>
			</div>
            </Col>
            <Col className="w-90  d-inline-block">
            <div id="skillIcons">
				<i class="devicon-html5-plain-wordmark"></i>
				<i class="devicon-css3-plain-wordmark"></i>
				<i class="devicon-javascript-plain"></i>
				<i class="devicon-jquery-plain-wordmark"></i>
				<i class="devicon-bootstrap-plain-wordmark"></i>
				<i class="devicon-mysql-plain-wordmark"></i>
				<i class="devicon-nodejs-plain-wordmark"></i>
				<i class="devicon-postgresql-plain-wordmark"></i>
				<i class="devicon-react-original-wordmark"></i>
				<i class="devicon-sequelize-plain-wordmark"></i>
			</div>
            </Col>
        </Row>
        </Container>
    )
}

export default Skills