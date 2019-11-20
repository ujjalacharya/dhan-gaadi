import { useEffect, useState } from "react";
import Head from "next/head";
import Router from "next/router";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import { Select, Button, Input, DatePicker } from "antd";
import moment from "moment";
import { getAllLocations } from "../actions/location";

const { Option } = Select;

function onBlur() {
  console.log("blur");
}

function onFocus() {
  console.log("focus");
}

function onSearch(val) {
  console.log("search:", val);
}

function disabledDate(current) {
  // Can not select days before today and today
  return current && current < moment().endOf("day");
}

const threeLengthArray = [];

const Home = () => {
  const [locations, setLocations] = useState([]);
  const [formData, setFormData] = useState({});
  const [disButton, setDisButton] = useState(true);

  const checkButtonDisabled = val => {
    threeLengthArray.push(val);
    if(threeLengthArray.length >= 3){
      setDisButton(false)
    }
  };

  const onChangeFrom = val => {
    setFormData({ ...formData, ...{ startLocation: val } });
    checkButtonDisabled(val);
  };

  const onChangeTo = val => {
    setFormData({ ...formData, ...{ endLocation: val } });
    checkButtonDisabled(val);
  };

  const onChangeDate = val => {
    const journeyDate = val && moment(val._d).format("YYYY-MM-DD");
    setFormData({ ...formData, ...{ journeyDate } });
    checkButtonDisabled(val);
  };

  const dummytransition = () => {
    Router.push({
      pathname: "/buses",
      query: formData
    });
  };

  useEffect(() => {
    fetchAllLocations();
  }, []);

  const fetchAllLocations = async () => {
    const locations = await getAllLocations();
    setLocations(locations);
  };

  return (
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
                  showSearch
                  placeholder="eg- Dhangadhi"
                  style={{ width: 200, marginRight: "1rem" }}
                  optionFilterProp="children"
                  onChange={onChangeFrom}
                  onFocus={onFocus}
                  name="startLocation"
                  onBlur={onBlur}
                  onSearch={onSearch}
                  filterOption={(input, option) =>
                    option.props.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  {locations.map(location => (
                    <Option value={location._id} key={location._id}>
                      {location.name}
                    </Option>
                  ))}
                </Select>
                <label htmlFor="">
                  <h4 className="color-white">To: </h4>
                </label>
                <Select
                  showSearch
                  style={{ width: 200, marginRight: "1rem" }}
                  placeholder="eg- Kathmandu"
                  optionFilterProp="children"
                  onChange={onChangeTo}
                  name="endLocation"
                  onFocus={onFocus}
                  onBlur={onBlur}
                  onSearch={onSearch}
                  filterOption={(input, option) =>
                    option.props.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  {locations.map(location => (
                    <Option value={location._id} key={location._id}>
                      {location.name}
                    </Option>
                  ))}
                </Select>
                <label htmlFor="">
                  <h4 className="color-white">Date: </h4>
                </label>
                <DatePicker
                  style={{ width: "20%" }}
                  format="YYYY-MM-DD"
                  disabledDate={disabledDate}
                  onChange={onChangeDate}
                />
                <Button
                  type="primary"
                  icon="search"
                  style={{ marginLeft: "1rem" }}
                  onClick={dummytransition}
                  disabled={disButton}
                >
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Home;
