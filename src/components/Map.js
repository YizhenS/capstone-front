import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import map from '../image/map.png';
import '../style/map.css'




export default class Map extends Component {


	constructor() {
		super();
		this.state = {
			room1:false,
			room2:false,
			room3:false,
			room4:false,
			room5:false
			
		}
}
	renderRoom(){
		//console.log("render room state is running" + Date())
		var data = this.props.room;
		if(data == null){
			return;
		}
		if(data[0] == 0){
			this.setState({
				room1:false
			})
		}else{
			this.setState({
				room1:true
			})
		}
		if(data[1] == 0){
			this.setState({
				room2:false
			})
		}else{
			this.setState({
				room2:true
			})
		}
		if(data[2] == 0){
			this.setState({
				room3:false
			})
		}else{
			this.setState({
				room3:true
			})
		}
		if(data[3] == 0){
			this.setState({
				room4:false
			})
		}else{
			this.setState({
				room4:true
			})
		}
		if(data[4] == 0){
			this.setState({
				room5:false
			})
		}else{
			this.setState({
				room5:true
			})
		}

	}
	componentDidMount(){
		//this.setState({room:this.props.room})
		this.renderRoom()
		//this.scrollToBottom();
	}
	componentDidUpdate() {
    this.interval = setInterval(() => this.renderRoom(), 5000);
  }


	render(){
		return(
			<div className="map">
			<img src={map} >
			
			</img>
			{this.state.room1?<div>
			<div className="room1_box"></div>
			<div className="room1_round"></div>
			</div>:<div></div>}
			{this.state.room2?<div>
			<div className="room2_box"></div>
			<div className="room1_round"></div>
			</div>:<div></div>}
			{this.state.room3?<div>
			<div className="room3_box"></div>
			<div className="room3_round"></div>
			</div>:<div></div>}
			{this.state.room4?<div>
			<div className="room4_box"></div>
			<div className="room4_round"></div>
			</div>:<div></div>}
			{this.state.room5?<div>
			<div className="room5_box"></div>
			<div className="room5_round"></div>
			</div>:<div></div>
			}

			{this.state.room1||this.state.room2?<div>
				<div className="door1-enter"></div>
				<div className="door2-enter"></div>
				<div className="door15-enter"></div>
				<div className="door16-enter"></div>
			</div>:<div>
			<div className="door1"></div>
			<div className="door2"></div>
			<div className="door15"></div>
			<div className="door16"></div>
			</div>}

			{this.state.room3?<div>
				<div className="door1-enter"></div>
				<div className="door2-enter"></div>
				<div className="door3-enter"></div>
			</div>:<div>
			<div className="door1"></div>
			<div className="door2"></div>
			<div className="door3"></div>
				</div>}

			{this.state.room4?<div>
				<div className="door10-enter"></div>
				<div className="door12-enter"></div>
				<div className="door13-enter"></div>
				<div className="door14-enter"></div>
				<div className="door15-enter"></div>
				<div className="door16-enter"></div>
			</div>:<div>
			<div className="door10"></div>
				<div className="door12"></div>
				<div className="door13"></div>
				<div className="door14"></div>
				<div className="door15"></div>
				<div className="door16"></div>
			</div>}
			
			{this.state.room5?<div>
				<div className="door7-enter"></div>
				<div className="door9-enter"></div>
				<div className="door10-enter"></div>
				<div className="door12-enter"></div>
			</div>:<div>
			<div className="door7"></div>
				<div className="door9"></div>
				<div className="door10"></div>
				<div className="door12"></div>
			</div>}
			<div>
				
			
				
			</div>
			

			</div>
		);
	}
}