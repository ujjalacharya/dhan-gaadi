import React, { Component } from "react";
import Layout from "../../core/Layout";
import Swal from "sweetalert2";
import showError from "../../core/Error";
import showLoading from "../../core/Loading";
import { getALocation, updateLocation } from "../../../Utils/Requests/Location";
import districtJson from "../../../Utils/helpers/district.json";

class EditLocation extends Component {
  state = {
    error: "",
    loading: true,
    location: {},
    districts: []
  };

  componentDidMount() {
    this.fetchLocation();
    const resp = JSON.parse(JSON.stringify(districtJson));
    this.setState({ districts: resp });
  }

  fetchLocation = async () => {
    const { slug } = this.props.match.params;

    const resp = await getALocation(slug).catch(err => {
      this.setState({ error: err.response.data.error, loading: false });
    });
    if (resp && resp.status === 200) {
      this.setState({
        location: resp.data,
        loading: false
      });
    }
  };

  submit = async e => {
    e.preventDefault();
    const {
      location: { _id, name, district },
      error,
      loading,
    } = this.state;

    const resp = await updateLocation(_id, this.state.location).catch(err => {
      this.setState({ loading: false, error: err.response.data.error });
    });
    if (resp && resp.status === 200) {
      this.setState({ loading: false });
      Swal.fire({
        type: "success",
        title: "Successfully updated the location!",
        onRender: () => {
          this.props.history.push("/locations");
        }
      });
    }
  };

  handleChange = input => e => {
    let value = e.target.value;

    this.setState(prevState => ({
      location: {
        ...prevState.location,
        [input]: value
      },
      error: ""
    }));
  };

  render() {
    const handleChange = this.handleChange;
    const {
      location: { name, district },
      error,
      loading,
      districts
    } = this.state;
    console.log(this.state)
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
              Update Location
            </button>
          </>
        )}
      </Layout>
    );
  }
}

export default EditLocation;
