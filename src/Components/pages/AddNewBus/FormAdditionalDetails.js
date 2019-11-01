import React, { Component } from "react";
import Layout from "../../core/Layout";

export default class FormAdditionalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;

    console.log(values);

    return (
      <Layout title="Add new bus (Additional details)">
        <div className="form-group">
          <label>Additional Features</label>
          <input
            type="text"
            className="form-control"
            required
            placeholder="Separate features with commas"
            onChange={handleChange("features")}
            value={values.features}
          />
        </div>

        <div className="form-group">
          <label>Departure Time *</label>
          <input
            type="time"
            className="form-control"
            required
            placeholder="Enter the bus number"
            onChange={handleChange("departure_time")}
            value={values.departure_time}
            disabled={!values.isAvailable}
          />
        </div>

        <div className="form-group">
          <label>Journey date</label>
          <input
            type="date"
            className="form-control"
            onChange={handleChange("journeyDate")}
            value={values.journeyDate}
            disabled={!values.isAvailable}
          />
        </div>

        <div className="form-group">
          <label>Start Location</label>

          <select
            className="custom-select custom-select-sm form-control"
            onChange={handleChange("startLocation")}
            value={values.startLocation}
          >
            <option value="Default" disabled>
              Select Location
            </option>
            {values.locations.map(location => (
              <option value={location._id} key={location._id}>
                {location.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>End Location</label>
          <select
            className="custom-select custom-select-sm form-control"
            onChange={handleChange("endLocation")}
            value={values.endLocation}
          >
            <option value="Default" disabled>
              Select Location
            </option>
            {values.locations.map(location => (
              <option value={location._id} key={location._id}>
                {location.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Boarding Points</label>
          <input
            type="text"
            className="form-control"
            required
            placeholder="Enter names separated by comma"
            onChange={handleChange("boardingPoints")}
            value={values.boardingPoints}
          />
        </div>

        <div className="form-group">
          <label>Dropping Points</label>
          <input
            type="text"
            className="form-control"
            required
            placeholder="Enter names separated by comma"
            onChange={handleChange("droppingPoints")}
            value={values.droppingPoints}
          />
        </div>

        <button
          className="btn btn-info"
          onClick={this.back}
          style={{ marginRight: "2rem" }}
        >
          Back
        </button>
        <button className="btn btn-info mx-5" onClick={this.continue}>
          Continue to submit
        </button>
      </Layout>
    );
  }
}
