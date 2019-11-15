import SingleCard from "./singleCard";
import { Row, Col } from "antd";
import NepaliDate from "ad-bs-converter";

const Cards = ({ buses=[] }) => {

  const nepaliDate =
    buses[0] &&
    NepaliDate.ad2bs(buses[0].journeyDate.replace("-", "/").replace("-", "/"))
      .en || Date.now();

  const markup =
    buses.length <= 0 ? (
      <h2>No bus found</h2>
    ) : (
      <div className="cards">
        <div className="card-header">
          <h2>
            <b>10</b> seats available in <strong>{buses.length}</strong> buses
          </h2>
        </div>
        <h4 className="card-header" style={{ color: "red" }}>
          {`Date: ${nepaliDate.strMonth} ${nepaliDate.day}, ${nepaliDate.year}`}
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
          {buses.length > 0 && buses.map(bus => (
            <SingleCard key={bus._id} bus={bus} />
          ))}
        </div>
      </div>
    );

  return markup;
};

export default Cards;
