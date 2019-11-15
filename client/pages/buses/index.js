import Layout from "../../components/Layout";
import SearchMenu from "./searchMenu";
import Filters from "./filters";
import Cards from "./cards";
import { Row, Col } from "antd";
import { searchBus } from "../../actions/location";
import Param from "../../utils/checkQueryParam";

const Buses = ({ resp, info }) => {

  return (
    <Layout>
      <Param info={info}>
        <SearchMenu buses={resp} info={info} />
        <Row className="row-container">
          <Col span={6} className="main-filter">
            <Filters />
          </Col>
          <Col span={18}><Cards buses={resp} />  </Col>
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
