import React, { useState, useEffect } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import SeatDetails from './SeatDetails';
import Layout from '../../core/Layout';
import { getBusBySlug } from '../../../Utils/Requests/Bus';
import Loading from '../../core/Loading';

function BusCaller(props) {
	const [sold, setSold] = useState([]);
	const [booked, setBooked] = useState([]);
	const [error, setError] = useState('');
	const [details, setDetails] = useState({ name: 'Bus' });
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchAllBookingDetails();
	}, []);

	const fetchAllBookingDetails = async () => {
		const resp = await getBusBySlug(props.match.params.slug).catch(err => {
			setError(err.response.data.error);
			setLoading(false);
		});
		if (resp && resp.status === 200) {
			setDetails(resp.data);
			setBooked(resp.data.bookedSeat);
			setSold(resp.data.soldSeat);
			setLoading(false);
		}
	};

	return (
		<Layout title="Seat Details">
			{console.log(details)}
			<h1 className="mt-2 text-primary">{`Seat Details of ${details.name}`}</h1>
			{loading ? (
				<Loading />
			) : (
				<>
					{details.isAvailable !== true ? (
						<Redirect to="/" />
					) : (
						<SeatDetails
							sold={sold}
							setSold={setSold}
							booked={booked}
							setBooked={setBooked}
							slug={props.match.params.slug}
						/>
					)}
				</>
			)}
		</Layout>
	);
}

export default withRouter(BusCaller);
