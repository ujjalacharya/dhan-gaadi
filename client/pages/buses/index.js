import Layout from "../../components/Layout";
import SearchMenu from "./searchMenu";
import Filters from "./filters";
import Cards from "./cards";
import { Row, Col } from "antd";
import { searchBus } from "../../actions/location";
import Param from "../../utils/checkQueryParam";
import { useState, useEffect } from "react";
import Loading from "../../components/Loading";

const Buses = ({ resp, info }) => {
  const [buses, setBuses] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchBuses();
  }, [resp]);

  const fetchBuses = () => {
    setBuses(resp)
  }
  return (
    <Layout>
      <Param info={info}>
        <SearchMenu buses={buses} info={info} />
        <Row className="row-container">
          <Col span={6} className="main-filter">
            <Filters info={info} setBuses={setBuses} setLoading={setLoading} />
          </Col>
          <Col span={18}>
            {loading ? <Loading /> : <Cards buses={buses} />}
          </Col>
        </Row>
      </Param>
    </Layout>
  );
};

Buses.getInitialProps = async ({
  query: { startLocation, endLocation, journeyDate }
}) => {
  const info = { startLocation, endLocation, journeyDate };
  const resp = await searchBus(info);
  return { resp, info };
};

export default Buses;
