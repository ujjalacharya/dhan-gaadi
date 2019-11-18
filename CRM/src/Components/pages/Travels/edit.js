import React, { Component } from "react";
import Layout from "../../core/Layout";
import Swal from "sweetalert2";
import showError from "../../core/Error";
import showLoading from "../../core/Loading";
import districtJson from "../../../Utils/helpers/district.json";
import { getATravel, updateTravel } from "../../../Utils/Requests/Travel";

class EditTravel extends Component {
  state = {
    error: "",
    loading: true,
    travel: {},
    travels: []
  };

  componentDidMount() {
    this.fetchTravel();
  }

  fetchTravel = async () => {
    const { slug } = this.props.match.params;

    const resp = await getATravel(slug).catch(err => {
      this.setState({ error: err.response.data.error, loading: false });
    });
    if (resp && resp.status === 200) {
      this.setState({
        travel: resp.data,
        loading: false
      });
    }
  };

  submit = async e => {
    e.preventDefault();
    const {
      travel: { _id, name },
      error,
      loading,
    } = this.state;

    const resp = await updateTravel(_id, this.state.travel).catch(err => {
      this.setState({ loading: false, error: err.response.data.error });
    });
    if (resp && resp.status === 200) {
      this.setState({ loading: false });
      Swal.fire({
        type: "success",
        title: "Successfully updated the travel!",
        onRender: () => {
          this.props.history.push("/travels");
        }
      });
    }
  };

  handleChange = input => e => {
    let value = e.target.value;

    this.setState(prevState => ({
      travel: {
        ...prevState.travel,
        [input]: value
      },
      error: ""
    }));
  };

  render() {
    const handleChange = this.handleChange;
    const {
      travel: { name },
      error,
      loading,
    } = this.state;
    console.log(this.state)
    return (
      <Layout title="Update travel">
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
                placeholder="Travel Name"
                onChange={handleChange("name")}
                value={name}
              />
            </div>

            <button
              className="btn btn-success submit-form"
              onClick={this.submit}
            >
              Update Travel
            </button>
          </>
        )}
      </Layout>
    );
  }
}

export default EditTravel;
