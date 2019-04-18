import React, { Component } from 'react';

import '../style/console.css';


export default class Console extends Component {
	constructor() {
		super();
		this.state = {
			output:[]
			
		}
}

	addOutput(){
		var roomNumber = this.props.room.split("");
		var room = "Room(s) "
		var safeEnd = " no attack so far " + Date()
		var attackEnd = "under attack at " + Date()
		var warningEnd = "near attack room at" + Date()
		var safe = ""
		var attack = ""
		var warning = ""
		var safeString = ""
		var warningString =""
		var attackString=""
		for(var i=0;i<roomNumber.length;i++){
			if(roomNumber[i] == 1){
				attack = attack + i + ", "
			}else if(roomNumber[i] == 2){
				warning = warning + i + ", "
			}else{
				safe = safe + i+ ", "
			}
		}
		if(safe != ""){
			safeString = room + safe + safeEnd
		}
		if(attack != ""){
			attackString = room + attack + attackEnd
		}
		if(warning != ""){
			warningString = room + warning + warningEnd;
			
		}
		this.setState({ 
			output: this.state.output.concat([safeString,attackString,warningString])
		})
		
	}

	

	componentDidMount(){
		this.setState({room:this.props.room})
		this.interval = setInterval(() => this.addOutput(), 5000);
		this.scrollToBottom();
	}

	componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom() {
		//this.el.scrollTop = this.el.scrollHeight
    this.el.scrollIntoView({ behavior: 'smooth' });
  }
	render(){
		console.log(this.state)
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