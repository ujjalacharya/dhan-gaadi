import React, { Component } from 'react';
import FormAdditionalDetails from './FormAdditionalDetails';
import FormPrimaryDetails from './FormPrimaryDetails';
import Confirm from './Confirm';
import Success from './Success';

class AddNewBus extends Component {
	state = {
		step: 1,
		name: '',
		type: '',
		busNumber: '',
		fare: '',
		features: '',
		description: '',
		seatsAvailable: '',
		numberOfSeats: '',
		image: '',
		departure_time: '',
		isAvailable: '',
		startLocation: '',
		endLocation: '',
		journeyDate: '',
		boardingPoints: '',
		droppingPoints: '',
	};

	// Proceed to next step
	nextStep = () => {
		const { step } = this.state;
		this.setState({
			step: step + 1,
		});
	};

	// Go back to prev step
	prevStep = () => {
		const { step } = this.state;
		this.setState({
			step: step - 1,
		});
	};

	// Handle fields change
	handleChange = input => e => {
		this.setState({ [input]: e.target.value });
	};

	render() {
		const { step } = this.state;

		const {
			name,
			type,
			busNumber,
			features,
			description,
			seatsAvailable,
			numberOfSeats,
			image,
			departure_time,
			isAvailable,
			startLocation,
			endLocation,
			journeyDate,
			boardingPoints,
			droppingPoints,
		} = this.state;

		const values = {
			name,
			type,
			busNumber,
			features,
			description,
			seatsAvailable,
			numberOfSeats,
			image,
			departure_time,
			isAvailable,
			startLocation,
			endLocation,
			journeyDate,
			boardingPoints,
			droppingPoints,
		};

		switch (step) {
			case 1:
				return <FormPrimaryDetails nextStep={this.nextStep} handleChange={this.handleChange} values={values} />;
			case 2:
				return (
					<FormAdditionalDetails
						nextStep={this.nextStep}
						prevStep={this.prevStep}
						handleChange={this.handleChange}
						values={values}
					/>
				);
			case 3:
				return <Confirm nextStep={this.nextStep} prevStep={this.prevStep} values={values} />;
			case 4:
				return <Success />;
			default:
				return <h3>Error</h3>;
		}
	}
}

export default AddNewBus;
