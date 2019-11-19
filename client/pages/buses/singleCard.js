import { Card, Row, Col, Modal, Button } from "antd";
import Router from "next/router";
import SeatDetails from "./seatDetails";
import { API_ROOT } from "../../utils/config";

class SingleCard extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
      loading: false
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
      Router.push({
        pathname: "/details"
      });
    }, 1000);
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  seatModal = () => (
    <Modal
      title="Seat Details"
      visible={this.state.visible}
      onCancel={this.handleCancel}
      footer={[
        <Button
          key="submit"
          type="primary"
          loading={this.state.loading}
          onClick={this.handleOk}
        >
          Continue Booking
        </Button>
      ]}
    >
      <SeatDetails
        sold={[]}
        setSold={() => {}}
        booked={[]}
        setBooked={() => {}}
        slug={"ss"}
      />
    
    </Modal>
  );

  render() {
    const {bus} = this.props;
    return (
      <>
        <Card
          className="single-card"
          style={{ width: "100%", marginBottom: "1rem" }}
          onClick={this.showModal}
        >
          <Row>
            <Col span={3}>
              <img
                src={`${API_ROOT}/uploads/${bus.image}`}
                alt="suspense"
                className="bus-thumbnail"
              />
            </Col>
            <Col span={1}></Col>
            <Col span={4}>
              <p>{bus.travel.name}</p>
            </Col>
            <Col span={4}>
              <p>{bus.type}</p>
            </Col>
            <Col span={4}>
              <strong>
                <p>{bus.departure_time}</p>
              </strong>
            </Col>
            <Col span={4}>
              <p>20 seats</p>
            </Col>
            <Col span={4}>
              <p>Rs {`${bus.fare}`}</p>
            </Col>
          </Row>
        </Card>
        {this.seatModal()}
      </>
    );
  }
}

export default SingleCard;
