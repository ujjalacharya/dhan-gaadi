import React, { useState } from 'react';
import SeatDetails from './SeatDetails';
import Layout from '../../core/Layout';

function BusCaller() {
	const [sold, setSold] = useState(['A3', 'B6', 'A9']);
	const [booked, setBooked] = useState(['A7', 'B1']);

	return (
		<Layout title="Seat Details">
			<h1 className="mt-2 text-primary">Seat Details</h1>

			<SeatDetails sold={sold} setSold={setSold} booked={booked} setBooked={setBooked} />
		</Layout>
	);
}

export default BusCaller;
