import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import { Select, Button, Input, DatePicker } from 'antd';
import moment from 'moment';

const { Option } = Select;
const InputGroup = Input.Group;

function handleChange(value) {
	console.log(`selected ${value}`);
}

function disabledDate(current) {
  // Can not select days before today and today
  return current && current < moment().endOf('day');
}


const Home = () => (
	<div>
		<Head>
			<title>Home</title>
			<link rel="icon" href="/static/favicon.ico" importance="low" />
		</Head>

		<Layout>
			<div className="hero">
				<Hero />

				<div className="row">
					<div className="input-background">
						<h1 className="tag-line">Get Seat Go</h1>
						<div className="route-form">
							<label htmlFor="">
								<h4 className="color-white">From: </h4>
							</label>
							<Select
								defaultValue="dhn"
								style={{ width: 150, marginRight: '1rem' }}
								onChange={handleChange}
							>
								<Option value="dhn">Dhangadhi</Option>
								<Option value="mnr">Mahendranagar</Option>
							</Select>
							<label htmlFor="">
								<h4 className="color-white">To: </h4>
							</label>
							<Select
								defaultValue="dhn"
								style={{ width: 150, marginRight: '1rem' }}
								onChange={handleChange}
							>
								<Option value="dhn">Kathmandu</Option>
								<Option value="mnr">Doti</Option>
							</Select>
							<label htmlFor="">
								<h4 className="color-white">Date: </h4>
							</label>
							<DatePicker
								style={{ width: '20%' }}
								format="YYYY-MM-DD"
								disabledDate={disabledDate}
							/>
							<Button type="primary" icon="search" style={{ marginLeft: '1rem' }}>
								Search
							</Button>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	</div>
);

export default Home;
