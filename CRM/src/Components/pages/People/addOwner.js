import React, { Component } from "react";
import Layout from "../../core/Layout";
import Swal from "sweetalert2";
import ImageUploader from "react-images-upload";
import { updateOwner, addOwner } from "../../../Utils/Requests/People";
import showError from "../../core/Error";
import showLoading from "../../core/Loading";

class AddOwner extends Component {
  state = {
    buttonStyle: "block",
    formData: "",
    name: "",
    email: "",
    password: "",
    password2: "",
    citizenshipNumber: "",
    phone: "",
    photo: "",
    error: "",
    loading: ""
  };

  componentDidMount() {
    this.setState({
      formData: new FormData()
    });
  }

  submit = async e => {
    e.preventDefault();
    if (!this.checkPasswordConfirmation()) {
      Swal.fire({
        type: "error",
        title: "Password did not match"
      });
    } else {
      this.setState({ loading: true });

      const { formData } = this.state;

      for (let value of formData.values()) {
        console.log("value--", value);
      }

      const resp = await addOwner({...this.state}).catch(err => {
        this.setState({ error: err.response.data.error, loading: false });
      });

      if (resp && resp.status === 200) {
        this.setState({ loading: false });

        Swal.fire({
          type: "success",
          title: "New Owner Added"
        });

        this.props.history.push("/people-owners");
      }
    }
  };

  checkPasswordConfirmation = () => {
    return this.state.password === this.state.password2;
  };

  handleChange = input => e => {
    let value;
    // if (input === "photo") {
    //   if (e.length === 0) {
    //     return this.setState({ buttonStyle: "block", photo: "" });
    //   }

    //   value = e[0];
    //   this.setState({ buttonStyle: "none" });
    // } else {
      value = e.target.value;
    // }

    // this.state.formData.set(input, value);

    this.setState({ [input]: value, error: "" });
  };

  render() {
    const handleChange = this.handleChange;
    const {
      name,
      email,
      password,
      password2,
      phone,
      citizenshipNumber,
      error,
      loading
    } = this.state;
    return (
      <Layout title="Update Profile">
        {showError(error)}
        {showLoading(loading)}
        {!loading && (
          <>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                className="form-control"
                required
                placeholder="Enter your full name"
                onChange={handleChange("name")}
                value={name}
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                required
                placeholder="Enter your email"
                onChange={handleChange("email")}
                value={email}
              />
            </div>

            <div className="form-group">
              <label>Citizenship Number</label>
              <input
                type="text"
                className="form-control"
                required
                placeholder="Enter your citizenship number"
                onChange={handleChange("citizenshipNumber")}
                value={citizenshipNumber}
              />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="number"
                className="form-control"
                required
                placeholder="Enter your phone number"
                onChange={handleChange("phone")}
                value={phone}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                required
                placeholder="Enter the password"
                onChange={handleChange("password")}
                value={password}
              />
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                className="form-control"
                required
                placeholder="Confirm Password"
                onChange={handleChange("password2")}
                value={password2}
              />
            </div>

            <button
              className="btn btn-success submit-form"
              onClick={this.submit}
            >
              Add Owner
            </button>

            {/* <div className="form-group">
              <ImageUploader
                withIcon={true}
                buttonText="Upload photo"
                onChange={handleChange("photo")}
                imgExtension={[".jpg", ".jpeg", ".gif", ".png", ".gif"]}
                maxFileSize={5242880}
                singleImage={true}
                withPreview={true}
                buttonStyles={{ display: this.state.buttonStyle }}
                //   defaultImage={values.image}
              />
            </div> */}
          </>
        )}
      </Layout>
    );
  }
}

export default AddOwner;
