import { Card, Checkbox } from 'antd';
import { getAllTravels } from '../../actions/travel';
import { useEffect, useState } from 'react';

function onChange(e) {
	console.log(`checked = ${e.target.checked}`);
}

const Filters = () => {

	const [travels, setTravels] = useState([])

	useEffect(() => {
		fetchAllTravels();
	}, [])
	const fetchAllTravels = async() => {
		const travels = await getAllTravels();
		setTravels(travels)
	}
	return (
		<div style={{ marginRight: '2rem' }}>
			<Card className="mb-2" style={{ width: '90%' }}>
				<h1>Travels: </h1>
				{travels.map(travel=>(
					<div className="checkbox-wrappper">
					<Checkbox onChange={onChange}>{travel.name}</Checkbox>
				</div>
				))}

			</Card>

			<Card className="mb-2" style={{ width: '90%' }}>
				<h1>Bus Type: </h1>
				<div className="checkbox-wrappper">
					<Checkbox onChange={onChange}>AC</Checkbox>
				</div>
				<div className="checkbox-wrappper">
					<Checkbox onChange={onChange}>Delux</Checkbox>
				</div>
				<div className="checkbox-wrappper">
					<Checkbox onChange={onChange}>Suspense AC</Checkbox>
				</div>
				<div className="checkbox-wrappper">
					<Checkbox onChange={onChange}>Suspense Delux</Checkbox>
				</div>
				<div className="checkbox-wrappper">
					<Checkbox onChange={onChange}>Normal</Checkbox>
				</div>
			</Card>
		</div>
	);
};

export default Filters;
