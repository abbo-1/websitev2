import { Row, Col, Container} from "react-bootstrap";

import twoThouOne from '../images/history/2001.png'

{/* <Container className="background3">
<Row>
<ThemeProvider theme={theme}>
    <Col xs={12} md={4}> */}


function Background() {

      return (
        <Container className="background3">
        <Row>
        <div class="title aboutInfoTitle">
				<h2>My Background</h2>
				<h4>How I Got Here</h4>
        </div>
        </Row>
        <Row>
        <div class="col-md-6 align-self-center">
								<p class="aboutInfo">My passion for technology was born while watching my older brother build and fix computers. With his guidance, I built my first PC in 7th grade. Though my primary motivation was the ability to play games like Starcraft, Max Payne, Unreal Tournament, and Fallout 2 - it ended up being the foundation for a life long passion for technology.</p>
		</div>
        <img class="img-fluid rounded" src={twoThouOne} alt="" />
									<div class="overlayText"><h2>2001</h2>
										<p>Me in my room with my first computer. <h4>Note: the super cool, and not at all nerdy, signed George Takei photo in the background.</h4></p>
									</div>

        </Row>
{/* /* <body id="bodyAbout">
<div class="container">
	<div class="row">
		<div class="col">
			<div class="title aboutInfoTitle">
				<h2>My Background</h2>
				<h4>How I Got Here</h4>
				<span class="border"></span>
			</div>
		</div>
	</div>
		<div class="row">
			<div class="col-md-12">
					<div class="tab-content" id="myTabContent">
						<div class="tab-pane fade show active" id="philosophy" role="tabpanel" aria-labelledby="home-tab">
						<div class="row">
							<div class="col-md-6 align-self-center">
								<p class="aboutInfo">My passion for technology was born while watching my older brother build and fix computers. With his guidance, I built my first PC in 7th grade. Though my primary motivation was the ability to play games like Starcraft, Max Payne, Unreal Tournament, and Fallout 2 - it ended up being the foundation for a life long passion for technology.</p>
							</div>
							<div class="col-md-6">
								<div class="hoverEffect">
								<img class="img-fluid rounded" src="images/2001.png" alt="" />
									<div class="overlayText"><h2>2001</h2>
										<p>Me in my room with my first computer. <h4>Note: the super cool, and not at all nerdy, signed George Takei photo in the background.</h4></p>
									</div>
								</div>
							</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<div class="tab-content" id="myTabContent">
					<div class="tab-pane fade show active" id="philosophy" role="tabpanel" aria-labelledby="home-tab">
							<div class="row">
								<div class="col-md-6">
									<img class="img-fluid rounded" src="images/2005.png" alt="">
									 <!-- <div class="overlay">
										<div class="overlayText"><h2>2005</h2>
												<p>Me (left) and my brother. </br></br> <h4>Changing out a network card if I recall correctly.</h4></p>
										</div>
									</div>  -->
								</div>
								<div class="col-md-6 align-self-center">
									<p class="aboutInfo">PC gaming opened the door to technology, but once I went through it there was no turning back. In high school I tested for my A+ certification and enrolled in networking classes as electives. I also got my first taste of web development, learning basic HTML and CSS.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</br></br></br>
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<div class="tab-content" id="myTabContent">
					<div class="tab-pane fade show active" id="philosophy" role="tabpanel" aria-labelledby="home-tab">
						<div class="row">
							<div class="col-md-6 align-self-center">
								<p class="aboutInfo">One of my very first jobs out of high school was at a local community college. where I managed a computer lab. I honed my ability to diagnose, fix, and maintain three dozen machines. </br></br> As I got older I found other interests- eventually earning my Bachelor's degree, where I graduated with a 4.0. </br></br> I invested my spare time in learning to code through the wealth of online resources and a coding program where I was able to learn from industry veterans.</p>
							</div>
								<div class="col-md-6">
									<img class="img-fluid rounded" src="images/2008.png" alt="">
							</div>
							<!-- 2008. Running the lab (with terrible posture) -->
						</div>
					</div>
				</div>
			</div>
		</div>	
	</div>
</br></br></br>
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<div class="tab-content" id="myTabContent">
					<div class="tab-pane fade show active" id="philosophy" role="tabpanel" aria-labelledby="home-tab">
						<div class="row">
							<div class="col-md-12 align-self-center">
								<p class="aboutInfo">Obviously that's an incredibly truncated version of my life, but I hope it illustrates how committed and passionate I am about coding and technology.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>	
</div> */ }
</Container>
      )
}

export default Background