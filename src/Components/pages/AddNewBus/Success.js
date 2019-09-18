import React, { Component } from "react";
import Layout from "../../core/Layout";
import Swal from "sweetalert2";
import { Redirect } from "react-router-dom";
import { addNewBus } from "../../../Utils/Requests/Bus";

class Success extends Component {
  state = {
    loading: true,
    error: ""
  };

  async componentDidMount() {
    if (this.props.isUpdate) {
      console.log("this is update")
    } else {
      // Add the bus
      const resp = await addNewBus(this.props.formData).catch(err => {
        this.setState({ loading: false, error: err.response.data.error });
      });
      if (resp && resp.status === 200) {
        this.setState({ loading: false });
      }
    }
  }

  renderMessage = () => {
    const { error } = this.state;
    if (error) {
      Swal.fire({
        type: "error",
        title: error
      });
      return <Redirect to="/" />;
    } else {
      Swal.fire({
        type: "success",
        title: "Successfully added the bus!"
      });
      return <Redirect to="/" />;
    }
  };

  loadingShow = () => {
    return <h1>Loading...</h1>;
  };

  render() {
    return (
      <Layout>
        {this.state.loading ? this.loadingShow() : this.renderMessage()}
      </Layout>
    );
  }
}

export default Success;
