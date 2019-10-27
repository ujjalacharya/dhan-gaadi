import { Card, Row, Col } from 'antd';

const SingleCard = () => {
	return (
		<Card className="single-card" style={{ width: '100%', marginBottom: '1rem' }} onClick={() => alert('sup')}>
			<Row>
				<Col span={4}>
					<img src="/static/img/suspense.jpg" alt="suspense" className="bus-thumbnail" />
				</Col>
				<Col span={4}>
					<p>Sudur-paschim Yatayat</p>
				</Col>
				<Col span={4}>
					<p>Air Suspension</p>
				</Col>
				<Col span={4}>
				<strong><p>2:00 PM</p></strong>
				</Col>
				<Col span={4}>
					<p>Yes</p>
				</Col>
				<Col span={4}>
					<p>Rs 1600</p>
				</Col>
			</Row>
		</Card>
	);
};

export default SingleCard;
