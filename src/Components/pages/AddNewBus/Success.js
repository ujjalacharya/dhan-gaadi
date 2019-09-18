import React, { Component } from "react";
import Layout from "../../core/Layout";
import Swal from "sweetalert2";
import { addNewBus } from "../../../Utils/Requests/Bus";

export class Success extends Component {
  state = {
    loading: true,
    error: ""
  };

  async componentDidMount() {
    // Submit the form
    console.log(this.props.formData);
    const resp = await addNewBus(this.props.formData);
    console.log(resp);
    if (resp.status === 200) {
      this.setState({ loading: false });
    } else {
      this.setState({ loading: false, error: resp.data.message });
    }
  }

  renderMessage = () => {
    const { error } = this.state;
    if (error) {
      return Swal.fire({
        type: "error",
        title: error
      });
    }
    Swal.fire({
      type: "success",
      title: "Successfully added the bus!"
    });
  };

  render() {
    return <Layout>{!this.state.loading && this.renderMessage}</Layout>;
  }
}

export default Success;
