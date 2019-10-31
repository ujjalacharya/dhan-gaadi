import React, { Component } from "react";
import Layout from "../../core/Layout";
import Swal from "sweetalert2";
import showError from "../../core/Error";
import showLoading from "../../core/Loading";
import { addNewLocation } from "../../../Utils/Requests/Location";

class AddLocation extends Component {
  state = {
    error: "",
    name: "",
    district: "",
    loading: ""
  };

  submit = async e => {
    e.preventDefault();
    const { error, name, district, loading } = this.state;

    const resp = await addNewLocation({ name, district }).catch(err => {
      this.setState({ loading: false, error: err.response.data.error });
    });
    if (resp && resp.status === 200) {
      this.setState({ loading: false });
      Swal.fire({
        type: "success",
        title: "Successfully add new location!",
        onRender: () => {
          this.props.history.push("/locations");
        }
      });
    }
  };

  handleChange = input => e => {
    let value = e.target.value;

    this.setState({
      [input]: value
    });
  };

  render() {
    const handleChange = this.handleChange;
    const { error, name, district, loading } = this.state;

    return (
      <Layout title="Update Location">
        {showError(error)}
        {showLoading(loading)}
        {!loading && (
          <>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                required
                placeholder="Location Name"
                onChange={handleChange("name")}
                value={name}
              />
            </div>
            <div className="form-group">
              <label>District</label>
              <input
                type="text"
                className="form-control"
                required
                placeholder="District Name"
                onChange={handleChange("district")}
                value={district}
              />
            </div>

            <button
              className="btn btn-success submit-form"
              onClick={this.submit}
            >
              Add Location
            </button>
          </>
        )}
      </Layout>
    );
  }
}

export default AddLocation;
