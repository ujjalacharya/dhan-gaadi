import Layout from '../../components/Layout';
import { Row, Col, Card, Input, Select, AutoComplete, InputNumber, Button } from 'antd';
const { Option } = Select;

class Details extends React.Component {
	state = {
		dataSource: [],
	};

	handleChange = value => {
		this.setState({
			dataSource:
				!value || value.indexOf('@') >= 0
					? []
					: [`${value}@gmail.com`, `${value}@hotmail.com`, `${value}@yahoo.com`],
		});
	};

	render() {
		return (
			<Layout>
				<Row className="row-container">
					<Col span={4}></Col>
					<Col span={8}>
						<Card title="Passengers Details" style={{ width: '100%' }}>
							<Input.Group>
								<h4>Passenger Name:</h4>
								<Input />
							</Input.Group>
							<br />
							{/* <Input.Group> */}
							<Input.Group>
								<h4>Email Address:</h4>
								<AutoComplete
									dataSource={this.state.dataSource}
									style={{ width: '100%' }}
									onChange={this.handleChange}
								/>
							</Input.Group>
							<Row>
								<Col span={11}>
									<Input.Group>
										<h4>Mobile: </h4>
										<InputNumber style={{ width: '100%' }} />
									</Input.Group>
								</Col>
								<Col span={2}></Col>
								<Col span={11}>
									<Input.Group>
										<h4>Boarding Point: </h4>
										<Select defaultValue="Buspark" style={{ width: '100%' }}>
											<Option value="Buspark">Buspark</Option>
											<Option value="Attariya">Attariya</Option>
										</Select>
									</Input.Group>
								</Col>
							</Row>
							<br />
							<Button type="primary" style={{ width: '100%' }}>
								Proceed to Confirmation
							</Button>
						</Card>
					</Col>
					<Col span={2}></Col>
					<Col span={6}>
						<Card title="Travel Details" style={{ width: '100%' }}>
							<p>
								<b>Route: </b>Dhangadhi - Kathmandu
							</p>
							<p>
								<b>Date: </b>2076-07-17
							</p>
							<p>
								<b>Seats: </b>B16
							</p>
							<p>
								<b>Travel: </b>Karnali Yatayat
							</p>
						</Card>

						<br />
						<Card title="Payment Details" style={{ width: '100%' }}>
							<p>
								<b>Per Ticket Cost: </b>Rs. 1600
							</p>
							<p>
								<b>Total Cost: </b>Rs. 1600
							</p>
						</Card>
					</Col>
					<Col span={4}></Col>
				</Row>
			</Layout>
		);
	}
}

export default Details;
