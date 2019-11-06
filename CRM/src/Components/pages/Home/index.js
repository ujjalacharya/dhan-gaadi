import React from "react";
import { Doughnut } from "react-chartjs-2";
import Layout from "../../core/Layout";
import {
  getAllAvailableBuses,
  getAllUnavailableBuses,
  getAvailableBusesOfOwner,
  getUnavailableBusesOfOwner
} from "../../../Utils/Requests/Bus";
import { getOwners, getGuests, getUsers } from "../../../Utils/Requests/People";
import { isAuthenticated } from "../../../Utils/Requests/Auth";
import { getOwnerBookings } from "../../../Utils/Requests/Booking";

class Home extends React.Component {
  state = {
    totalBus: {},
    totalPeople: {},
    myBus: {},
    myBookings: {},
    allBookings: {},
    user: { role: "owner" }
  };

  componentDidMount() {
    const { user } = isAuthenticated();
    this.setState({ user });
    this.fetchAllBusData();
    this.fetchAllPeopleData();
    this.fetchMyBusData();
    this.fetchBookingData();
  }

  handleRedirect = e => {
    this.props.history.push(`${e._url[e._index]}`);
  };

  fetchAllBusData = async () => {
    let availablecount = 0;
    let unavailablecount = 0;
    const avialable = await getAllAvailableBuses();
    if (avialable && avialable.status === 200) {
      availablecount = avialable.data.length;
    }
    const unavailable = await getAllUnavailableBuses();
    if (unavailable && unavailable.status === 200) {
      unavailablecount = unavailable.data.length;
    }
    this.setState({
      totalBus: {
        labels: ["Available", "Unavailable"],
        datasets: [
          {
            data: [availablecount, unavailablecount],
            backgroundColor: ["#36A2EB", "#FFCE56"],
            hoverBackgroundColor: ["#36A2EB", "#FFCE56"]
          }
        ]
      }
    });
  };

  fetchAllPeopleData = async () => {
    let guestscount = 0;
    let userscount = 0;
    let ownerscount = 0;

    const owners = await getOwners();
    if (owners && owners.status === 200) {
      ownerscount = owners.data.length;
    }

    const guests = await getGuests();
    if (guests && guests.status === 200) {
      guestscount = guests.data.length;
    }

    const users = await getUsers();
    if (users && users.status === 200) {
      userscount = users.data.length;
    }

    this.setState({
      totalPeople: {
        labels: ["Owners", "Users", "Guests"],
        datasets: [
          {
            data: [ownerscount, userscount, guestscount],
            backgroundColor: ["#36A2EB", "#FFCE56", "#FF6384"],
            hoverBackgroundColor: ["#36A2EB", "#FFCE56", "#FF6384"]
          }
        ]
      }
    });
  };

  fetchMyBusData = async () => {
    let availablecount = 0;
    let unavailablecount = 0;
    const avialable = await getAvailableBusesOfOwner();
    if (avialable && avialable.status === 200) {
      availablecount = avialable.data.length;
    }
    const unavailable = await getUnavailableBusesOfOwner();
    if (unavailable && unavailable.status === 200) {
      unavailablecount = unavailable.data.length;
    }
    this.setState({
      myBus: {
        labels: ["Available", "Unavailable"],
        datasets: [
          {
            data: [availablecount, unavailablecount],
            backgroundColor: ["#36A2EB", "#FFCE56"],
            hoverBackgroundColor: ["#36A2EB", "#FFCE56"]
          }
        ]
      }
    });
  };

  fetchBookingData = async () => {
    let verifiedcount = 0;
    let unverifiedcount = 0;
    let payedcount = 0;
    const resp = await getOwnerBookings();

    if (resp && resp.status === 200) {
      resp.data.map(booking => {
        if (booking.verification === "verified") {
          verifiedcount++;
        } else if (booking.verification === "notverified") {
          unverifiedcount++;
        } else if (booking.verification === "payed") {
          payedcount++;
        }
      });
    }

    this.setState({
      myBookings: {
        labels: ["Verfied", "UnVerified", "Payed"],
        datasets: [
          {
            data: [verifiedcount, unverifiedcount, payedcount],
            backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"],
            hoverBackgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"]
          }
        ]
      }
    });
  };

  render() {
    const {
      totalBus,
      totalPeople,
      myBus,
      myBookings,
      allBookings
    } = this.state;
    const { role } = this.state.user;
    return (
      <Layout>
        <div className="container">
          {role === "superadmin" && (
            <div className="row">
              <div className="col-md-6">
                <h3>Total Buses</h3>
                <Doughnut
                  data={totalBus}
                  height={20}
                  width={50}
                  onElementsClick={e => {
                    e[0]._url = ["all-bus-available", "all-bus-unavailable"];
                    this.handleRedirect(e[0]);
                  }}
                />
              </div>
              <div className="col-md-6">
                <h3>Total People</h3>
                <Doughnut
                  data={totalPeople}
                  height={20}
                  width={50}
                  onElementsClick={e => {
                    e[0]._url = [
                      "people-owners",
                      "people-users",
                      "people-guests"
                    ];
                    this.handleRedirect(e[0]);
                  }}
                />
              </div>
            </div>
          )}
          <div className="row">
            <div className="col-md-6">
              <h3>My Bus</h3>
              <Doughnut
                data={myBus}
                height={20}
                width={50}
                onElementsClick={e => {
                  e[0]._url = ["bus-available", "bus-unavailable"];
                  this.handleRedirect(e[0]);
                }}
              />
            </div>
            <div className="col-md-6">
              <h3>Booking Status</h3>
              <Doughnut
                data={myBookings}
                height={20}
                width={50}
                onElementsClick={e => {
                  e[0]._url = ["my-bookings", "my-bookings", "my-bookings"];
                  this.handleRedirect(e[0]);
                }}
              />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Home;
