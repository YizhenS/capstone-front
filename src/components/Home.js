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
	getUser(){
		console.log(this.props.auth)
		
	}

	componentWillMount(){
	
	}
    render() {
			
        return (
						
            <div>
                {this.props.auth.user.name?<div><Map/> <Console/></div>:<About/>}
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
	auth: state.auth
})



export default connect(mapStateToProps, { logoutUser })(Home);
