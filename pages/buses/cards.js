import SingleCard from './singleCard';
import { Row, Col } from 'antd';

const Cards = () => {
	return (
		<div className="cards">
			<div className="card-header">
				<h2>
					<b>10</b> seats available in <strong>20</strong> buses
				</h2>
			</div>
			<h4 className="card-header" style={{ color: 'red' }}>
				Date- Katrik 02 2076
			</h4>
			<div>
				<hr />
				<Row className="buses-header">
					<Col span={4}></Col>
					<Col span={4}>
						<h3>Travels</h3>
					</Col>
					<Col span={4}>
						<h3>Bus Type</h3>
					</Col>
					<Col span={4}>
						<h3>Departure</h3>
					</Col>
					<Col span={4}>
						<h3>Available</h3>
					</Col>
					<Col span={4}>
						<h3>Fare</h3>
					</Col>
				</Row>
				{[0, 1, 2, 3, 4, 5, 6].map(num => (
					<SingleCard />
				))}
			</div>
		</div>
	);
};

export default Cards;
