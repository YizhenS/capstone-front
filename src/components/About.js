import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Table } from 'reactstrap';
import '../style/about.css'
import Pi from '../image/pi.jpg'
import Map from '../image/map.png'
export default class About extends Component {
	render(){
		return(
			<div>
				<Container>
					<Row className="header">
						<h1>Threat Interception, Our Number One Intention</h1>
						
					</Row>
					<Row className="header">
					<h3>Currently aviable for UT Rocket Hall</h3>
					</Row>
					<Row className="content">
							<Col>
							<img className="pi-img" src={Pi} />
							</Col>
							<Col>
							<p>As violence in school settings increases throughout the United States, so does the need
for precautionary measures. A prominent focus of this venture is to aid in the prevention of the
loss of life should violent circumstances transpire. Thus, this project is motivated by the intention
of producing an economical active threat alert system with a web application. Ultimately, it is to
be designed to assist in vigilant notification of endangerment and tracking hazards with a
preference for use in educational institutions.</p>
							</Col>
					</Row>
					<Row className="content">
						<Col>
						This project will achieve a working prototype of an active threat alert system. It will
consist of both an example of the final system that would be installed within a building, as well
as an accompanying web application. It is desired that this system, if implemented by an actual
educational institution, be an economical option to employ. Thus, mindfulness for costs of items
will be taken into account. Additionally, this project requires careful consideration for ADA
compliance, room occupancy, and mobile accessibility.
						</Col>
						<Col>
						<img className="pi-img" src={Map} />
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}