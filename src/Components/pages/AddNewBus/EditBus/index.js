import React, { Component } from 'react';
import { getBusBySlug } from '../../../../Utils/Requests/Bus';
import FormAdditionalDetails from '../FormAdditionalDetails';
import FormPrimaryDetails from '../FormPrimaryDetails';
import Confirm from '../Confirm';
import Success from '../Success';
import Layout from '../../../core/Layout';

class EditBus extends Component {
	state = {
		step: 0,
		bus: {},
		loading: true,
		formData: '',
		buttonStyle: 'block',
	};

	componentDidMount() {
		this.fetchBusDetails();
		this.setState({
			formData: new FormData(),
		});
	}

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

	fetchBusDetails = async () => {
		const { slug } = this.props.match.params;

		const resp = await getBusBySlug(slug).catch(err => {
			this.setState({ error: err.response.data.error });
		});
		if (resp && resp.status === 200) {
			this.setState({ step: 1, bus: resp.data });
		}
	};

	// Handle fields change
	handleChange = input => e => {
		console.log(this.state);
		let value;
		if (input === 'image') {
			if (e.length === 0) {
				return this.setState({ buttonStyle: 'block' });
			}

			value = e[0];
			this.setState({ buttonStyle: 'none' });
		} else if (input === 'isAvailable') {
			value = !this.state.isAvailable;
		} else {
			value = e.target.value;
		}

		this.state.formData.set(input, value);

		this.setState({ [input]: value });
	};

	componentWillUnmount() {
		this.setState({ buttonStyle: 'block' });
	}

	render() {
		const { bus, step, formData, buttonStyle } = this.state;

		switch (step) {
			case 0:
				return (
					<Layout title="Edit bus">
						<h1>Loading...</h1>;
					</Layout>
				);
			case 1:
				return <FormPrimaryDetails nextStep={this.nextStep} handleChange={this.handleChange} values={bus} />;
			case 2:
				return (
					<FormAdditionalDetails
						nextStep={this.nextStep}
						prevStep={this.prevStep}
						handleChange={this.handleChange}
						values={bus}
					/>
				);
			case 3:
				return (
					<Confirm
						nextStep={this.nextStep}
						prevStep={this.prevStep}
						values={bus}
						handleChange={this.handleChange}
						buttonStyle={buttonStyle}
					/>
				);
			case 4:
				return <Success values={bus} formData={formData} isUpdate={true} />;
			default:
				return <h3>Error</h3>;
		}
	}
}

export default EditBus;
