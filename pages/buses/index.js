import Layout from '../../components/Layout';
import SearchMenu from './searchMenu';
import Bunch from './bunch';
import Cards from './cards';
import { Row, Col } from 'antd';

const Buses = ({ bus }) => {
	return (
		<Layout>
			<SearchMenu />
			<Row className="row-container">
				<Col span={6} className="main-filter">
					<Bunch />
				</Col>
				<Col span={18}>
					<Cards />
				</Col>
			</Row>
		</Layout>
	);
};

Buses.getInitialProps = () => {
	let bus = 'Delux';
	return { bus };
};

export default Buses;
