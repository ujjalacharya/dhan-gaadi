import React, { Component } from 'react';
import FormAdditionalDetails from './FormAdditionalDetails';
import FormPrimaryDetails from './FormPrimaryDetails';
import Confirm from './Confirm';
import Success from './Success';

class AddNewBus extends Component {
	state = {
		step: 3,
		name: '',
		type: 'Normal',
		busNumber: '',
		fare: '',
		features: '',
		description: '',
		seatsAvailable: '',
		numberOfSeats: '',
		departure_time: '',
		isAvailable: false,
		startLocation: '',
		endLocation: '',
		journeyDate: '',
		boardingPoints: '',
		droppingPoints: '',
		image: "",
		buttonStyle: 'block',
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

	//Handle image upload
	onDrop = picture => {
		if (picture.length === 0) {
			return this.setState({ buttonStyle: 'block' });
		}
		
		const fd = new FormData();
		fd.append("file", picture[0], picture[0].name)

		console.log(fd);

		console.log(picture[0])

		this.setState({
			image: picture[0],
			buttonStyle: 'none',
		});

		console.log(this.state)
	};

	// Handle checkbox change
	handleCheckbox = () => {
		this.setState({ isAvailable: !this.state.isAvailable });
	};

	render() {
		const { step } = this.state;

		const {
			name,
			type,
			busNumber,
			fare,
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
			buttonStyle,
		} = this.state;

		const values = {
			name,
			type,
			busNumber,
			fare,
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
			buttonStyle,
		};

		switch (step) {
			case 1:
				return (
					<FormPrimaryDetails
						nextStep={this.nextStep}
						handleChange={this.handleChange}
						handleCheckbox={this.handleCheckbox}
						values={values}
					/>
				);
			case 2:
				return (
					<FormAdditionalDetails
						nextStep={this.nextStep}
						prevStep={this.prevStep}
						handleChange={this.handleChange}
						handleCheckbox={this.handleCheckbox}
						values={values}
					/>
				);
			case 3:
				return (
					<Confirm nextStep={this.nextStep} prevStep={this.prevStep} values={values} onDrop={this.onDrop} />
				);
			case 4:
				return <Success values={values}/>;
			default:
				return <h3>Error</h3>;
		}
	}
}

export default AddNewBus;
