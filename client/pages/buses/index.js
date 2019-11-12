import Layout from '../../components/Layout';
import SearchMenu from './searchMenu';
import Filters from './filters';
import Cards from './cards';
import { Row, Col } from 'antd';

const Buses = ({ info }) => {
	return (
		<Layout>
			{console.log(info)}
			<SearchMenu />
			<Row className="row-container">
				<Col span={6} className="main-filter">
					<Filters />
				</Col>
				<Col span={18}>
					<Cards />
				</Col>
			</Row>
		</Layout>
	);
};

Buses.getInitialProps = ({query: {startLocation, endLocation, journeyDate}}) => {
	const info = {startLocation, endLocation, journeyDate}
	return { info };
};

export default Buses;
