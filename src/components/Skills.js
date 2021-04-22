import { Row, Col, Alert, Container} from "react-bootstrap";

function Skills() {


    return (
        <Container className="background2">
                        <div id="skillIcons">
        <Row>
            {/* <div class="col-12 col-md-2">
				<h2>-Skills</h2>
			</div> */}
            <Col xs={12} sm={12} md={4}>
				<i class="devicon-html5-plain-wordmark"></i>
				<i class="devicon-css3-plain-wordmark"></i>
				<i class="devicon-javascript-plain"></i>
                </Col>
            <Col xs={12} sm={12} md={4}>
                <i class="devicon-react-original-wordmark"></i>
				{/* <i class="devicon-jquery-plain-wordmark"></i> */}
				<i class="devicon-bootstrap-plain-wordmark"></i>
				<i class="devicon-mysql-plain-wordmark"></i>
                </Col>
            <Col xs={12} sm={12} md={4}>
				<i class="devicon-nodejs-plain-wordmark"></i>
				<i class="devicon-postgresql-plain-wordmark"></i>
				<i class="devicon-sequelize-plain-wordmark"></i>
                </Col>
        </Row>
        </div>
        </Container>
    )
}

export default Skills