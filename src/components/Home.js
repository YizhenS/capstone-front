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
import data from '../FakeData/data.txt'



class Home extends Component {
	constructor() {
		super();
		this.state = {
			room: {
				"room1": { "attack": Boolean, "time": "" },
				"room2": { "attack": Boolean, "time": "" },
				"room3": { "attack": Boolean, "time": "" },
				"room4": { "attack": Boolean, "time": "" },
				"room5": { "attack": Boolean, "time": "" },
			},
			console: []
		}

	}

	readTextFile = file => {
		var rawFile = new XMLHttpRequest();
		rawFile.open("GET", file, false);
		rawFile.onreadystatechange = () => {
			if (rawFile.readyState === 4) {
				if (rawFile.status === 200 || rawFile.status == 0) {
					var allText = rawFile.responseText;

					this.setState({
						rawData: allText
					});
				}
			}
		};
		rawFile.send(null);
	};

	setRoom(){
		console.log(this.state.rawData)
	}


	getUser() {
		console.log(this.props.auth)

	}
	addConsole() {
		this.setState({ console: this.state.console.concat[Date()] })
	}

	componentWillMount() {
		console.log(this.state.console)
		this.addConsole()

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
		this.readTextFile(data);
		console.log(this.state)
	}
	componentDidMount(){
		console.log(this.setRoom())
	}
	render() {
		console.log(this.state)
		
		return (

			<div>
				{!this.props.auth.user.name ? <div><Map /> <Console room={this.state.rawData} /></div> : <About />}
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
	auth: state.auth
})



export default connect(mapStateToProps, { logoutUser })(Home);
