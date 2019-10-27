import { Card, Checkbox } from 'antd';

function onChange(e) {
	console.log(`checked = ${e.target.checked}`);
}

const Filters = () => {
	return (
		<div style={{ marginRight: '2rem' }}>
			<Card className="mb-2" style={{ width: '90%' }}>
				<h1>Travels: </h1>
				<div className="checkbox-wrappper">
					<Checkbox onChange={onChange}>Sudur-paschim Yatayat</Checkbox>
				</div>
				<div className="checkbox-wrappper">
					<Checkbox onChange={onChange}>Karnali Yatayat</Checkbox>
				</div>
				<div className="checkbox-wrappper">
					<Checkbox onChange={onChange}>Badimalika Yatayat</Checkbox>
				</div>
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
