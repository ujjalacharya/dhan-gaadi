import React, { Component } from 'react';
import Layout from '../../core/Layout';
import { getAvailableBusesOfOwner } from '../../../Utils/Requests/Bus';
import ReactDatatable from '@ashvin27/react-datatable';
import moment from 'moment';

class BusAvailable extends Component {
	constructor(props) {
		super(props);

		this.columns = [
			{
				key: '_id',
				text: 'Id',
				className: 'id',
				align: 'left',
				sortable: true,
			},
			{
				key: 'name',
				text: 'Name',
				className: 'name',
				align: 'left',
				sortable: true,
			},
			{
				key: 'busNumber',
				text: 'Bus Number',
				className: 'busNumber',
				align: 'left',
				sortable: true,
			},
			{
				key: 'date',
				text: 'Date',
				className: 'date',
				align: 'left',
				sortable: true,
			},
			{
				key: 'action',
				text: 'Action',
				className: 'action',
				width: 100,
				align: 'left',
				sortable: false,
				cell: record => {
					return (
						<>
							<button
								data-toggle="modal"
								data-target="#update-user-modal"
								className="btn btn-primary btn-sm"
								onClick={() => this.editRecord(record)}
								style={{ marginRight: '5px' }}
							>
								<i className="fa fa-edit"></i>
							</button>
							<button className="btn btn-danger btn-sm" onClick={() => this.deleteRecord(record)}>
								<i className="fa fa-trash"></i>
							</button>
						</>
					);
				},
			},
		];

		this.config = {
			page_size: 10,
			length_menu: [10, 20, 50],
			filename: 'Buses',
			no_data_text: 'No bus found!',
			button: {
				excel: true,
				print: true,
				csv: true,
			},
			language: {
				length_menu: 'Show _MENU_ result per page',
				filter: 'Filter in records...',
				info: 'Showing _START_ to _END_ of _TOTAL_ records',
				pagination: {
					first: 'First',
					previous: 'Previous',
					next: 'Next',
					last: 'Last',
				},
			},
			show_length_menu: true,
			show_filter: true,
			show_pagination: true,
			show_info: true,
		};

		this.state = {
			buses: [],
			isLoading: true,
			error: '',
		};
	}

	componentDidMount() {
		this.fetchAvailableBuses();
	}

	componentWillReceiveProps(nextProps) {
		this.fetchAvailableBuses();
	}

	fetchAvailableBuses = async () => {
		const buses = await getAvailableBusesOfOwner().catch(err => {
			this.setState({ error: err.response.data.error, isLoading: false });
		});
		if (buses && buses.status === 200) {
			buses.data.map(bus => {
				return (bus.date = moment(bus.createdAt).format('MMMM Do, YYYY'));
			});
			this.setState({ buses: buses.data, isLoading: false });
		}
	};

	pageChange = pageData => {
		console.log('OnPageChange', pageData);
	};

	render() {
		return (
			<Layout title="My Buses > Available buses">
				<div className="d-flex" id="wrapper">
					<div id="page-content-wrapper">
						<div className="container-fluid">
							<button className="btn btn-link mt-3" id="menu-toggle"></button>
							<button
								className="btn btn-outline-primary float-right mt-3 mr-2"
								data-toggle="modal"
								data-target="#add-user-modal"
								onClick={()=> this.props.history.push("/add-bus")}
							>
								{' '}
								Add Bus
							</button>
							<h1 className="mt-2 text-primary">Available Buses</h1>
							{this.state.isLoading ? (
								<h1>Loading</h1>
							) : (
								<ReactDatatable
									config={this.config}
									records={this.state.buses}
									columns={this.columns}
									onPageChange={this.pageChange}
								/>
							)}
						</div>
					</div>
				</div>
			</Layout>
		);
	}
}

export default BusAvailable;
