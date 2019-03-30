import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import map from '../image/map.png';
import '../style/map.css'
export default class Map extends Component {
	render(){
		return(
			<div>
			<img src={map} className="map"></img>
			</div>
		);
	}
}