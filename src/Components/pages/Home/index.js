import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import Layout from '../../core/Layout';
import { getAllAvailableBuses, getAllUnavailableBuses } from '../../../Utils/Requests/Bus';

class Home extends React.Component {
	state = {
		totalBus: {},
		totalPeople: {},
		myBus: {},
		myBookings: {},
		allBookings: {},
	};

	componentDidMount() {
		this.fetchAllBusData();
	}

	fetchAllBusData = async () => {
		let availablecount = 0;
		let unavailablecount = 0;
		const avialable = await getAllAvailableBuses();
		if (avialable && avialable.status === 200) {
			availablecount = avialable.data.length;
		}
		const unavailable = await getAllUnavailableBuses();
		if (unavailable && unavailable.status === 200) {
			unavailablecount = unavailable.data.length;
		}
		this.setState({
			totalBus: {
				labels: ['Available', 'Unavailable'],
				datasets: [
					{
						data: [availablecount, unavailablecount],
						backgroundColor: ['#36A2EB', '#FFCE56'],
						hoverBackgroundColor: ['#36A2EB', '#FFCE56'],
					},
				],
			},
		});
	};

	fetchAllPeopleData = async () => {
		
	}

	render() {
		const { totalBus, totalPeople, myBus, myBookings, allBookings } = this.state;
		return (
			<Layout>
				<div className="row">
					<div className="col-md-6">
						<h3>Total Buses</h3>
						<Doughnut data={totalBus} height={'20%'} width={'50%'} />
					</div>
					<div className="col-md-6">
						<h3>Total People</h3>
						<Doughnut data={totalPeople} height={'20%'} width={'50%'} />
					</div>
				</div>
				<div className="row">
					<div className="col-md-6">
						<h3>My Bus</h3>
						<Doughnut data={myBus} height={'20%'} width={'50%'} />
					</div>
					<div className="col-md-6">
						<h3>My Bookings</h3>
						<Doughnut data={myBookings} height={'20%'} width={'50%'} />
					</div>
				</div>
			</Layout>
		);
	}
}

export default Home;
