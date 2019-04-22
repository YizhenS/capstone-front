// Home.js

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authentication';
import { withRouter } from 'react-router-dom';
import Map from './Map';
import About from './About';
import Console from './Console'





class Home extends Component {
	constructor() {
		super();
		this.state = {
			
		}

	}

	
	
	addConsole() {
		this.setState({ console: this.state.console.concat[Date()] })
	}
	fetchData(){
		fetch("http://127.0.0.1:5000/")
    .then(response=> response.json())
		.then(myJson=> 
				this.setState({
		rawData:myJson
	}))
	}

	componentWillMount() {
		//console.log(this.state.console)
		//this.addConsole()

		this.setState({
			room: {
				"room1": { "attack": true, "time": "1" },
				"room2": { "attack": true, "time": "2" },
				"room3": { "attack": true, "time": "3" },
				"room4": { "attack": true, "time": "4" },
				"room5": { "attack": true, "time": "5" },
			}
		})
		this.setState({ console: this.state.console.concat[Date()] })
	}
	componentWillMount() {
		//this.fetchData();
		//console.log(this.state)
	}
	componentDidMount(){
		//console.log(this.setRoom())
		//this.interval = setInterval(() => this.fetchData(), 10000);
		//this.interval = setInterval(() => window.location.reload(),50000)
	}

	render() {
		//console.log(this.state)
		
		return (

			<div>
				<About/>
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
	auth: state.auth
})



export default connect(mapStateToProps, { logoutUser })(Home);
