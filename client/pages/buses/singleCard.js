import { Card, Row, Col, Modal, Button } from "antd";
import Router from "next/router";
import SeatDetails from "./seatDetails";
import { API_ROOT } from "../../utils/config";
import { enc, dec } from "../../utils/encdec";

class SingleCard extends React.Component {
  state = { visible: false, userBooked: [] };

  showModal = () => {
    this.setState({
      visible: true,
      loading: false
    });
  };

  handleUserBooked = (seat) => {
    // let arr = [...this.state.userBooked];
    // arr.push(seat);
    // this.setState({userBooked: arr});
    this.encryptInfo(seat);
    // console.log(this.props)
  }

  handleOk = (info) => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
      Router.push({
        pathname: "/details",
        query: {info}
      });
    }, 1000);
  };

  encryptInfo = seat => {
    const {startLocation, endLocation, fare, journeyDate, travel, slug} = this.props.bus;
    let start = startLocation.name;
    let end = endLocation.name;
    let travelName = travel.name;
    const info = {start, end, fare, journeyDate, travelName, seat, slug}
    const resp = enc(info);
    this.handleOk(resp)
  }

  handleCancel = e => {
    this.setState({
      visible: false
    });
  };

  seatColorMeaning = () => {
    return(
      <>
        <div style={{display: 'flex', alignItems: 'start', flexDirection: 'row-reverse'}}>
          <p>Available</p>
          <Button type="primary" style={{margin: '0 1rem'}}></Button>
          <p>Booked</p>
          <Button style={{backgroundColor: "rgb(67, 67, 67)", margin: '0 1rem'}}></Button>
          <p>Sold</p>
          <Button type="danger" style={{margin: '0 1rem'}}></Button>
        </div>
      </>
    )
  }

  seatModal = () => (
    <Modal
      title="Seat Details"
      visible={this.state.visible}
      onCancel={this.handleCancel}
      footer={[
        this.seatColorMeaning()
      ]}
      >
      <SeatDetails
        sold={this.props.bus.soldSeat}
        setSold={() => {}}
        booked={this.props.bus.bookedSeat}
        setBooked={() => {}}
        slug={"ss"}
        handleUserBooked={this.handleUserBooked}
      />
    </Modal>
  );

  render() {
    const { bus } = this.props;
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
        {this.state.visible && this.seatModal()}
      </>
    );
  }
}

export default SingleCard;
