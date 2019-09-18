import React, { Component } from 'react';
import Layout from '../../core/Layout';

export default class FormAdditionalDetails extends Component {
	continue = e => {
		e.preventDefault();
		this.props.nextStep();
	};

	back = e => {
		e.preventDefault();
		this.props.prevStep();
	};

	render() {
		const { values, handleChange } = this.props;

		return (
			<Layout title="Add new bus (Additional details)">

				<div className="form-group">
					<label>Additional Features</label>
					<input
						type="text"
						className="form-control"
						required
						placeholder="Separate features with commas"
						onChange={handleChange('features')}
						value={values.features}
					/>
				</div>

				<div className="form-group">
					<label>Departure Time *</label>
					<input
						type="time"
						className="form-control"
						required
						placeholder="Enter the bus number"
						onChange={handleChange('departure_time')}
						value={values.departure_time}
					/>
				</div>

				<div className="form-group">
					<label>Journey date</label>
					<input
						type="date"
						className="form-control"
						onChange={handleChange('journeyDate')}
						value={values.journeyDate}
					/>
				</div>

				<div className="form-group">
					<label>Start Location</label>
					<input
						type="text"
						className="form-control"
						required
						placeholder="Enter the start location of bus"
						onChange={handleChange('startLocation')}
						value={values.startLocation}
					/>
				</div>

				<div className="form-group">
					<label>End Location</label>
					<input
						type="text"
						className="form-control"
						required
						placeholder="Enter the end location of bus"
						onChange={handleChange('endLocation')}
						value={values.endLocation}
					/>
				</div>

				<div className="form-group">
					<label>Boarding Points</label>
					<input
						type="text"
						className="form-control"
						required
						placeholder="Enter names separated by comma"
						onChange={handleChange('boardingPoints')}
						value={values.boardingPoints}
					/>
				</div>
    
				<div className="form-group">
					<label>Dropping Points</label>
					<input
						type="text"
						className="form-control"
						required
						placeholder="Enter names separated by comma"
						onChange={handleChange('droppingPoints')}
						value={values.droppingPoints}
					/>
				</div>

				<button className="btn btn-info" onClick={this.back} style={{marginRight: '2rem'}}>
					Back
				</button>
				<button className="btn btn-info mx-5" onClick={this.continue}>
					Continue to submit
				</button>
			</Layout>
		);
	}
}
