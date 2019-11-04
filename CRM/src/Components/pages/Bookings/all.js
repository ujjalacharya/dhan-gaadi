import React, { Component } from "react";
import Layout from "../../core/Layout";
import {
  changeVerificationStatus,
  removeBooking,
  getAllBookings
} from "../../../Utils/Requests/Booking";
import ReactDatatable from "@ashvin27/react-datatable";
import moment from "moment";
import Swal from "sweetalert2";
import { SERVER_ROUTE } from "../../../Utils/config";
import Loading from "../../core/Loading";

class MyBookings extends Component {
  constructor(props) {
    super(props);

    this.columns = [
      {
        key: "sn",
        text: "S.N",
        className: "id",
        align: "left",
        sortable: true
      },
      {
        key: "image",
        text: "Image",
        className: "image",
        width: 100,
        align: "left",
        sortable: false,
        cell: record => {
          return (
            <>
              <img
                className="busImage"
                src={`${SERVER_ROUTE}/uploads/` + record.image}
              />
            </>
          );
        }
      },
      {
        key: "busNumber",
        text: "Bus Number",
        className: "name",
        align: "left",
        sortable: true
      },
      {
        key: "busName",
        text: "Bus Name",
        className: "name",
        align: "left",
        sortable: true
      },
      {
        key: "ownerName",
        text: "Owner Name",
        className: "name",
        align: "left",
        sortable: true
      },
      {
        key: "journeyDate",
        text: "Journey Date",
        className: "name",
        align: "left",
        sortable: true
      },
      {
        key: "departure_time",
        text: "Departure time",
        className: "name",
        align: "left",
        sortable: true
      },
      {
        key: "clientName",
        text: "Client Name",
        className: "clientName",
        align: "left",
        sortable: true
      },
      {
        key: "clientPhone",
        text: "Client Phone",
        className: "clientPhone",
        align: "left",
        sortable: true
      },
      {
        key: "clientAddress",
        text: "Client Address",
        className: "clientAddress",
        align: "left",
        sortable: true
      },
      {
        key: "bookedDate",
        text: "Booked Date",
        className: "date",
        align: "left",
        sortable: true
      },
      {
        key: "seatNumber",
        text: "Seat Number",
        className: "date",
        align: "left",
        sortable: true
      },
      {
        key: "verification",
        text: "Status",
        className: "date",
        align: "left",
        sortable: true
      },
      {
        key: "action",
        text: "Action",
        className: "action",
        width: 100,
        align: "left",
        sortable: false,
        cell: record => {
          return (
            <>
              <button
                data-toggle="modal"
                data-target="#update-user-modal"
                className={`btn btn-${
                  record.verification === "verified" ? "warning" : "success"
                } btn-sm`}
                onClick={this.toggleVerify(record._id, record.verification)}
                style={{
                  marginRight: "5px",
                  display: record.verification === "payed" ? "none" : "block"
                }}
              >
                <i
                  className={`fa fa-${
                    record.verification === "verified" ? "times" : "check"
                  }`}
                ></i>
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => this.deleteRecord(record._id)}
              >
                <i className="fa fa-trash"></i>
              </button>
            </>
          );
        }
      }
    ];

    this.config = {
      page_size: 10,
      length_menu: [10, 20, 50],
      filename: "Bookings",
      no_data_text: "No bookings found!",
      button: {
        excel: true,
        print: true,
        csv: true
      },
      language: {
        length_menu: "Show _MENU_ result per page",
        filter: "Filter in records...",
        info: "Showing _START_ to _END_ of _TOTAL_ records",
        pagination: {
          first: "First",
          previous: "Previous",
          next: "Next",
          last: "Last"
        }
      },
      show_length_menu: true,
      show_filter: true,
      show_pagination: true,
      show_info: true
    };

    this.state = {
      bookings: [],
      isLoading: true,
      error: "",
      clientName: "",
      busNumber: ""
    };
  }

  componentDidMount() {
    this.fetchBookings();
  }

  componentDidUpdate(nextProps, nextState) {
    if (nextState.bookings === this.state.bookings) {
      this.fetchBookings();
    }
  }

  toggleVerify = (id, status) => async e => {
    let toggledVerification =
      status === "verified" ? "notverified" : "verified";

    Swal.fire({
      title: "Are you sure?",
      text: "You are changing the verification status",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!"
    }).then(async result => {
      if (result.value) {
        const resp = await changeVerificationStatus(
          id,
          toggledVerification
        ).catch(err => {
          this.setState({ error: err.response.data.error });
        });
        if (resp && resp.status === 200) {
          Swal.fire(
            `${toggledVerification}!`,
            "Your file has been updated.",
            "success"
          );
          this.setState({});
        }
      }
    });
  };

  deleteRecord = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async result => {
      if (result.value) {
        const resp = await removeBooking(id).catch(err => {
          this.setState({ error: err.response.data.error });
        });
        if (resp && resp.status === 200) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
          this.setState({});
        }
      }
    });
  };

  fetchBookings = async () => {
    const resp = await getAllBookings().catch(err => {
      this.setState({ error: err.response.data.error, isLoading: false });
    });

    if (resp && resp.status === 200) {
      let counter = 1;
      resp.data.map(booking => {
        const client = booking.guest
          ? booking.guest
          : booking.user
          ? booking.user
          : booking.self;
        booking.bookedDate = moment(booking.createdAt).format("MMMM Do, YYYY");
        booking.journeyDate = moment(booking.bus.journeyDate).format(
          "MMMM Do, YYYY"
        );
        booking.sn = counter;
        counter++;
        booking.clientName = client.name;
        booking.clientPhone = client.phone;
        booking.clientAddress = client.address;
        booking.ownerName = booking.owner.name;
        booking.busNumber = booking.bus.busNumber;
        booking.departure_time = booking.bus.departure_time;
        booking.image = booking.bus.image;
        booking.busName = booking.bus.name;
        return booking;
      });
      this.setState({ bookings: resp.data, isLoading: false });
    }
  };

  pageChange = pageData => {
    console.log("OnPageChange", pageData);
  };

  render() {
    console.log(this.state);
    return (
      <Layout title="All Bookings">
        <div className="d-flex" id="wrapper">
          <div id="page-content-wrapper">
            <div className="container-fluid">
              <button className="btn btn-link mt-3" id="menu-toggle"></button>

              <h1 className="mt-2 text-primary">All Bookings</h1>
              {this.state.isLoading ? (
                <Loading />
              ) : (
                <ReactDatatable
                  config={this.config}
                  records={this.state.bookings}
                  columns={this.columns}
                  onPageChange={this.pageChange}
                />
              )}
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default MyBookings;
