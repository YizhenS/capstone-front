import React, { Component } from 'react';

import '../style/console.css';


export default class Console extends Component {
	constructor() {
		super();
		this.state = {
			output:[],
			room1:"",
			room2:"",
			room3:"",
			room4:"",
			room5:""
			
			
		}
}

	changeRoomState(){
		//console.log("change room state is running" + Date())
		console.log(this.state)
		var data = this.props.room;
		if(data == null){
			return
		}
		if(data[0] == 0){
			this.setState({
				room1 : "no"
			})
			
		}else if(data[0] == 1){
			this.setState({
				room1 : "yes"
			})
		}else{
			this.setState({
				room1 : "warning"
			})
		}
		if(data[1] == 0){
			this.setState({
				room2 : "no"
			})
			
		}else if(data[1] == 1){
			this.setState({
				room2 : "yes"
			})
		}else{
			this.setState({
				room2 : "warning"
			})
		}
		if(data[2] == 0){
			this.setState({
				room3 : "no"
			})
			
		}else if(data[2] == 1){
			this.setState({
				room3 : "yes"
			})
		}else{
			this.setState({
				room3 : "warning"
			})
		}
		if(data[3] == 0){
			this.setState({
				room4 : "no"
			})
			
		}else if(data[3] == 1){
			this.setState({
				room4 : "yes"
			})
		}else{
			this.setState({
				room4 : "warning"
			})
		}
		if(data[4] == 0){
			this.setState({
				room5 : "no"
			})
			
		}else if(data[4] == 1){
			this.setState({
				room5 : "yes"
			})
		}else{
			this.setState({
				room5 : "warning"
			})
		}
	}

	addOutput(){
		this.changeRoomState()
		//console.log(this.state)
		console.log(this.state.output.length)
		if(this.state.output.length>30){
			console.log("here")
			this.setState({
				output: []
			})
		}
		// if(this.state.Last === null||this.state.Last === this.props.room){
		// 	console.log(this.props.room)
		// 	return
		// }
		// this.setState({
		// 	Last: this.props.room
		// })
		console.log("add out put ran")
		var safe = "Room "
		var danger = "Room "
		var warning = "Room "
		if(this.state.room1 === "no" ){
			safe = safe + "1111, "
		}else if(this.state.room1 === "yes"){
			danger = danger + "1111, "
		}else if(this.state.room1 === "warning"){
			warning  = warning + "1111, "
		}
		if(this.state.room2 === "no" ){
			safe = safe + "1114, "
		}else if(this.state.room2 === "yes"){
			danger = danger + "1114, "
		}else if(this.state.room2 === "warning"){
			warning  = warning + "1114, "
		}
		if(this.state.room3 === "no" ){
			safe = safe + "1300, "
		}else if(this.state.room3 === "yes"){
			danger = danger + "1300, "
		}else if(this.state.room3 === "warning"){
			warning  = warning + "1300, "
		}
		if(this.state.room4 === "no" ){
			safe = safe + "1554, "
		}else if(this.state.room4 === "yes"){
			danger = danger + "1554, "
		}else if(this.state.room4 === "warning"){
			warning  = warning + "1554, "
		}
		if(this.state.room5 === "no" ){
			safe = safe + "1800F, "
		}else if(this.state.room5 === "yes"){
			danger = danger + "1800F, "
		}else if(this.state.room5 === "warning"){
			warning  = warning + "1800F, "
		}
		
		safe = safe +" is clear of attact "+ Date()
		warning = warning + " might near the attact " + Date()
		danger = danger + " is reporting an attact "+Date()
		
			
		this.setState({
			output : this.state.output.concat([safe,danger,warning])
		})
		
	}

	

	componentDidMount(){
		//this.changeRoomState();
		//this.addOutput();
		//this.changeRoomState()
		//this.addOutput()
		this.scrollToBottom();
	}

	componentDidUpdate() {
		this.interval = setInterval(() => this.addOutput(), 10000);
    this.scrollToBottom();
  }

  scrollToBottom() {
		//this.el.scrollTop = this.el.scrollHeight
    this.el.scrollIntoView({ behavior: 'smooth' });
  }
	render(){
		// this.interval = setInterval(() => this.changeRoomState(), 10000);
		
		//console.log(this.state)
		return(
			<div className="scroller" >
			<div className="console"  >
			<div className="output">
			{
				this.state.output.map((text)=>{
					return(
					<p>{text}</p> 
						
					)
				})
			}
			</div>
			<p ref={el => { this.el = el; }}></p>
			</div>
				
			</div>
		);
	}
}