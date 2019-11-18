import React, { Component } from "react";
import { getBusBySlug } from "../../../../Utils/Requests/Bus";
import { getAllLocations } from "../../../../Utils/Requests/Location";
import FormAdditionalDetails from "../FormAdditionalDetails";
import FormPrimaryDetails from "../FormPrimaryDetails";
import Confirm from "../Confirm";
import Success from "../Success";
import Layout from "../../../core/Layout";
import { getAllTravels } from "../../../../Utils/Requests/Travel";

class EditBus extends Component {
  state = {
    step: 0,
    bus: {},
    loading: true,
    formData: "",
    buttonStyle: "block",
    locations: [],
    travels: []
  };

  componentDidMount() {
    this.fetchLocations();	
    this.fetchBusDetails();
    this.setState({
      formData: new FormData()
    });
  }

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  fetchLocations = async () => {
    const resp = await getAllLocations();
    if (resp.status === 200) {
      this.setState({
        locations: resp.data,
        startLocation: this.state.bus.startLocation,
        endLocation: this.state.bus.endLocation
      });
    }
    this.fetchTravels();	
  };

  fetchTravels = async () => {
    const resp = await getAllTravels();
    if (resp.status === 200) {
      this.setState({
        travels: resp.data,
      });
    }
  };

  fetchBusDetails = async () => {
    const { slug } = this.props.match.params;

    const resp = await getBusBySlug(slug).catch(err => {
      this.setState({ error: err.response.data.error });
    });
    if (resp && resp.status === 200) {
      this.setState({
        step: 1,
        bus: resp.data,
        name: resp.data.name,
        type: resp.data.type,
        busNumber: resp.data.busNumber,
        fare: resp.data.fare,
        features: resp.data.features,
        description: resp.data.description,
        seatsAvailable: resp.data.seatsAvailable,
        numberOfSeats: resp.data.numberOfSeats,
        image: resp.data.image,
        departure_time: resp.data.departure_time,
        isAvailable: resp.data.isAvailable,
        startLocation: resp.data.startLocation,
        endLocation: resp.data.endLocation,
        journeyDate: resp.data.journeyDate,
        boardingPoints: resp.data.boardingPoints,
        droppingPoints: resp.data.droppingPoints,
        travel: resp.data.travel,
      });
	}
  };

  // Handle fields change
  handleChange = input => e => {
    let value;
    if (input === "image") {
      if (e.length === 0) {
        return this.setState({ buttonStyle: "block" });
      }

      value = e[0];
      this.setState({ buttonStyle: "none" });
    } else if (input === "isAvailable") {
      value = !this.state.isAvailable;
    } else {
      value = e.target.value;
    }

    this.state.formData.set(input, value);

    this.setState({ [input]: value });
  };

  // componentWillUnmount() {
  // 	this.setState({ buttonStyle: 'block' });
  // }

  render() {
    const { step, formData, buttonStyle } = this.state;

    console.log(this.state);

    switch (step) {
      case 0:
        return (
          <Layout title="Edit bus">
            <h1>Loading...</h1>
          </Layout>
        );
      case 1:
        return (
          <FormPrimaryDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={this.state}
          />
        );
      case 2:
        return (
          <FormAdditionalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={this.state}
          />
        );
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={this.state}
            handleChange={this.handleChange}
            buttonStyle={buttonStyle}
            isUpdate={true}
          />
        );
      case 4:
        return (
          <Success values={this.state} formData={formData} isUpdate={true} />
        );
      default:
        return <h3>Error</h3>;
    }
  }
}

export default EditBus;
