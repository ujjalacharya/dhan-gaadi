import { Card } from 'antd';

const SingleCard = () => {
	return (
		<Card className="single-card" style={{ width: '100%', marginBottom: '1rem' }} onClick={() => alert('sup')}>
			<p>Card content</p>
			<p>Card content</p>
			<p>Card content</p>
		</Card>
	);
};

export default SingleCard;
