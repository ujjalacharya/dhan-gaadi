import React, { Component } from "react";
import Layout from "../../core/Layout";
import Swal from "sweetalert2";
import showError from "../../core/Error";
import showLoading from "../../core/Loading";
import { addNewTravel } from "../../../Utils/Requests/Travel";

class AddTravel extends Component {
  state = {
    error: "",
    name: "",
    loading: "",
  };

  submit = async e => {
    e.preventDefault();
    const { error, name, loading } = this.state;

    const resp = await addNewTravel({ name }).catch(err => {
      this.setState({ loading: false, error: err.response.data.error });
    });
    if (resp && resp.status === 200) {
      this.setState({ loading: false });
      Swal.fire({
        type: "success",
        title: "Successfully add new travel!",
        onRender: () => {
          this.props.history.push("/travels");
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
    const { error, name, loading } = this.state;

    return (
      <Layout title="Add Travel">
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
              Add travel
            </button>
          </>
        )}
      </Layout>
    );
  }
}

export default AddTravel;
