import React, { Component } from "react";
import Layout from "../../core/Layout";
import ReactDatatable from "@ashvin27/react-datatable";
import moment from "moment";
import Swal from "sweetalert2";
import { getGuests } from "../../../Utils/Requests/People";
import Loading from "../../core/Loading";

class Guests extends Component {
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
        key: "name",
        text: "Name",
        className: "name",
        align: "left",
        sortable: true
      },
      {
        key: "phone",
        text: "Phone",
        className: "phone",
        align: "left",
        sortable: true
      },
      {
        key: "email",
        text: "Email",
        className: "phone",
        align: "left",
        sortable: true
      },
      {
        key: "createdAt",
        text: "Created At",
        className: "date",
        align: "left",
        sortable: true
      },
      {
        key: "address",
        text: "Address",
        className: "address",
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
            <button
              className="btn btn-danger btn-sm"
              onClick={() => this.deleteRecord()}
            >
              <i className="fa fa-trash"></i>
            </button>
          );
        }
      }
    ];

    this.config = {
      page_size: 10,
      length_menu: [10, 20, 50],
      filename: "Buses",
      no_data_text: "No bus found!",
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
      people: [],
      isLoading: true,
      error: ""
    };
  }

  componentDidMount() {
    this.fetchGuests();
  }

  componentDidUpdate(nextProps, nextState) {
    if (nextState.people === this.state.people) {
      this.fetchGuests();
    }
  }

  deleteRecord = slug => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, do it!"
    }).then(result => {
      if (result.value) {
        Swal.fire("Cant do this right now!");
        this.setState({});
      }
    });
  };

  fetchGuests = async () => {
    const resp = await getGuests().catch(err => {
      this.setState({ error: err.response.data.error, isLoading: false });
    });
    if (resp && resp.status === 200) {
      let counter = 1;
      resp.data.map(person => {
        person.createdAt = moment(person.createdAt).format("MMMM Do, YYYY");
        person.sn = counter;
        counter++;
        return person;
      });
      this.setState({ people: resp.data, isLoading: false });
    }
  };

  pageChange = pageData => {
    console.log("OnPageChange", pageData);
  };

  render() {
    return (
      <Layout title="People > Guests">
        <div className="d-flex" id="wrapper">
          <div id="page-content-wrapper">
            <div className="container-fluid">
              <button className="btn btn-link mt-3" id="menu-toggle"></button>

              <h1 className="mt-2 text-primary">Guests</h1>
              {this.state.isLoading ? (
                <Loading />
              ) : (
                <ReactDatatable
                  config={this.config}
                  records={this.state.people}
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

export default Guests;
