import React, { Component } from "react";
import Layout from "../../core/Layout";
import Swal from "sweetalert2";
import showError from "../../core/Error";
import showLoading from "../../core/Loading";
import { addNewLocation } from "../../../Utils/Requests/Location";
import districtJson from "../../../Utils/helpers/district.json";

class AddLocation extends Component {
  state = {
    error: "",
    name: "",
    districts: [],
    loading: "",
    district: "achham"
  };

  componentDidMount() {
    const resp = JSON.parse(JSON.stringify(districtJson));
    this.setState({ districts: resp });
  }

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
    const { error, name, districts, district, loading } = this.state;

    return (
      <Layout title="Add Location">
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
              <select
                className="custom-select custom-select-sm form-control"
                onChange={handleChange("district")}
                value={district}
              >
                <option value="Default" disabled>
                  Select District
                </option>
                {districts.length > 0 &&
                  districts.map(location => (
                    <option value={location} key={location}>
                      {location}
                    </option>
                  ))}
              </select>
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
