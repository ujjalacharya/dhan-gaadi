import React from "react";
import { Link, withRouter } from "react-router-dom";

const SideBar = ({ history }) => {
  console.log(history);

  const isActive = (history, path) => {
    if (history.location.pathname === path) {
      return "active";
    } else {
      return;
    }
  };

  return (
    <aside className="main-sidebar">
      <section className="sidebar">
        <div className="user-panel">
          <div className="pull-left image">
            <img
              src="img/user2-160x160.jpg"
              className="img-circle"
              alt="UserImage"
            />
          </div>
          <div className="pull-left info">
            <p>Ujjal Acharya</p>
            <a href="false">
              <i className="fa fa-circle text-success"></i> Owner
            </a>
          </div>
        </div>

        <ul className="sidebar-menu" data-widget="tree">
          <br />
          <li className={isActive(history, "/")}>
            <Link to="/">
              <i className="fa fa-tachometer"></i>
              <span>Dashboard</span>
            </Link>
          </li>

          <li className="treeview">
            <a href="#" onClick={e=>e.preventDefault()}>
              <i className="fa fa-bus"></i> <span>My Buses</span>
              <span className="pull-right-container">
                <i className="fa fa-angle-left pull-right"></i>
                {/* <small className="label pull-right bg-blue">17</small> */}
              </span>
            </a>
            <ul className="treeview-menu">
              <li className={isActive(history, "/bus-available")}>
                <Link to="bus-available">
                  <i className="fa fa-circle-o"></i> Available Buses
                </Link>
              </li>
              <li className={isActive(history, "/bus-unavailable")}>
                <Link to="bus-unavailable">
                  <i className="fa fa-circle-o"></i> Unavailable Buses
                </Link>
              </li>
              <li className={isActive(history, "/add-new-bus")}>
                <Link to="add-new-bus">
                  <i className="fa fa-plus"></i> Add new bus
                </Link>
              </li>
            </ul>
          </li>

          <li className={isActive(history, "/mybookings")}>
            <Link to="mybookings">
              <i className="fa fa-calendar"></i> <span>My Bookings</span>
              <span className="pull-right-container">
                <small className="label pull-right bg-green">new</small>
              </span>
            </Link>
          </li>

          <li>
            <a href="pages/widgets.html">
              <i className="fa fa-sign-out"></i> <span>Logout</span>
            </a>
          </li>
        </ul>
      </section>
    </aside>
  );
};

export default withRouter(SideBar);
