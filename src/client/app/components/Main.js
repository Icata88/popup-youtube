import React, { Component } from 'react';
import PopUp from './PopUp';

class Main extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showPopUp: false
		}

		this.togglePopUp = this.togglePopUp.bind(this);
	}

	togglePopUp() {
		this.setState((prevState) => ({showPopUp: !prevState.showPopUp}));
	}

	render() {
		return (
			<div className='row'>
				<h1 className='col-xs-12 striked'><span>Click the button below to trigger the pop up window</span></h1>
				<button onClick={this.togglePopUp} className='toggle-popup'>click me</button>
				{this.state.showPopUp ? <PopUp togglePopUp={this.togglePopUp} /> : null}
			</div>
		);
	}
}

export default Main;