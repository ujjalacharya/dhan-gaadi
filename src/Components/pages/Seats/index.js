import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import SeatDetails from './SeatDetails';
import Layout from '../../core/Layout';
import { getBusBySlug } from '../../../Utils/Requests/Bus';
import Loading from '../../core/Loading';

function BusCaller(props) {
	const [sold, setSold] = useState([]);
	const [booked, setBooked] = useState([]);
	const [error, setError] = useState('');
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
			setBooked(resp.data.bookedSeat);
			setSold(resp.data.soldSeat);
			setLoading(false);
		}
	};

	return (
		<Layout title="Seat Details">
			<h1 className="mt-2 text-primary">Seat Details</h1>
			{loading ? (
				<Loading />
			) : (
				<SeatDetails sold={sold} setSold={setSold} booked={booked} setBooked={setBooked} slug={props.match.params.slug}/>
			)}
		</Layout>
	);
}

export default withRouter(BusCaller);
