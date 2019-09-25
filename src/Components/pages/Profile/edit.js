import React, { Component } from "react";
import Layout from "../../core/Layout";
import Swal from "sweetalert2";
import ImageUploader from "react-images-upload";
import { updateOwner } from "../../../Utils/Requests/People";
import showError from "../../core/Error";
import showLoading from "../../core/Loading";
import {
  isAuthenticated,
  refreshToken,
  authenticate
} from "../../../Utils/Requests/Auth";

class EditProfile extends Component {
  state = {
    buttonStyle: "block",
    formData: "",
    oldPassword: "",
    newPassword: "",
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
    this.setState({ loading: true });
    const { oldPassword, newPassword, photo, formData } = this.state;
    if ((oldPassword && newPassword) || photo) {
      const resp = await updateOwner(
        isAuthenticated().user._id,
        formData
      ).catch(err => {
        this.setState({ loading: false, error: err.response.data.error });
      });
      if (resp && resp.status === 200) {
        let data = await refreshToken(isAuthenticated().user._id);
        if (data && data.status === 200) {
          authenticate(data, () => {
            if (isAuthenticated()) {
              this.setState({ loading: false });
            }
          });
        }
        this.setState({ loading: false });
        Swal.fire({
          type: "success",
          title: "Successfully updated the profile!",
          onRender: () => {
            this.props.history.push("/");
          }
        });
      }
    } else {
      Swal.fire({
        type: "error",
        title: "Can not submit empty form!"
      });
      this.setState({loading: false})
    }
  };

  handleChange = input => e => {
    let value;
    if (input === "photo") {
      if (e.length === 0) {
        return this.setState({ buttonStyle: "block", photo: "" });
      }

      value = e[0];
      this.setState({ buttonStyle: "none" });
    } else {
      value = e.target.value;
    }

    this.state.formData.set(input, value);

    this.setState({ [input]: value, error: "" });
  };

  render() {
    const handleChange = this.handleChange;
    const { oldPassword, newPassword, error, loading } = this.state;
    return (
      <Layout title="Update Profile">
        {showError(error)}
        {showLoading(loading)}
        {!loading && (
          <>
            <div className="form-group">
              <label>Old Password</label>
              <input
                type="password"
                className="form-control"
                required
                placeholder="Enter the old password"
                onChange={handleChange("oldPassword")}
                value={oldPassword}
              />
            </div>

            <div className="form-group">
              <label>New Password</label>
              <input
                type="password"
                className="form-control"
                required
                placeholder="Enter the new password"
                onChange={handleChange("newPassword")}
                value={newPassword}
              />
            </div>

            <button
              className="btn btn-success submit-form"
              onClick={this.submit}
            >
              Update Profile
            </button>

            <div className="form-group">
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
            </div>

            
          </>
        )}
      </Layout>
    );
  }
}

export default EditProfile;
