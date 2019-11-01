import { Card, Row, Col, Modal } from "antd";

class SingleCard extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true
    });
  };


  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  seatModal = () => (
    <Modal
      title="Basic Modal"
      visible={this.state.visible}
	  onCancel={this.handleCancel}
	  footer={[]}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );

  render() {
    return (
		<>
      <Card
        className="single-card"
        style={{ width: "100%", marginBottom: "1rem" }}
        onClick={this.showModal}
      >
        <Row>
          <Col span={4}>
            <img
              src="/static/img/suspense.jpg"
              alt="suspense"
              className="bus-thumbnail"
            />
          </Col>
          <Col span={4}>
            <p>Sudur-paschim Yatayat</p>
          </Col>
          <Col span={4}>
            <p>Air Suspension</p>
          </Col>
          <Col span={4}>
            <strong>
              <p>2:00 PM</p>
            </strong>
          </Col>
          <Col span={4}>
            <p>Yes</p>
          </Col>
          <Col span={4}>
            <p>Rs 1600</p>
          </Col>
        </Row>
      </Card>
	  {this.seatModal()}
	  </>
    );
  }
}

export default SingleCard;
