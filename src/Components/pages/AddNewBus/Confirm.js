import React, { Component } from 'react';
import Layout from '../../core/Layout';
import Swal from 'sweetalert2';

export default class Confirm extends Component {
	continue = e => {
  e.preventDefault();
  
		this.props.nextStep();
	};

	render() {
		const { values, handleChange } = this.props;

		return (
			<Layout title="Photo Upoad">
				<div className="form-group">
					<label>Upload bus photo </label>
					<input
						type="text"
						className="form-control"
						required
						placeholder="Enter the bus name"
					/>
				</div>

				<button className="btn btn-info" onClick={this.continue}>
					Submit
				</button>
			</Layout>
		);
	}
}
