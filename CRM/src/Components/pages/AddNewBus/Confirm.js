import React from "react";
import ImageUploader from "react-images-upload";
import Layout from "../../core/Layout";

export default class Confirm extends React.Component {
  render() {
    const {
      nextStep,
      values,
      handleChange,
      buttonStyle = undefined,
      isUpdate = false
    } = this.props;
    
    const displayUpload = isUpdate
      ? "block"
      : (values.buttonStyle || buttonStyle) === "none"
      ? "block"
	  : "none";
	  
    return (
      <Layout title="Image uploader">
        <button
          className="btn btn-success submit-form"
          onClick={nextStep}
          style={{ display: displayUpload }}
        >
          Upload the photo and add the bus
        </button>
        <ImageUploader
          withIcon={true}
          buttonText="Choose photo"
          onChange={handleChange("image")}
          imgExtension={[".jpg", ".jpeg", ".gif", ".png", ".gif"]}
          maxFileSize={5242880}
          singleImage={true}
          withPreview={true}
          buttonStyles={{ display: values.buttonStyle || buttonStyle }}
          defaultImage={values.image}
        />
      </Layout>
    );
  }
}
