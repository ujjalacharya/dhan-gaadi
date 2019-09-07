import React, { Component } from "react";

export default class SideBar extends Component {
 render(){
     return (
         <aside className="main-sidebar">
             <section className="sidebar">
                 <div className="user-panel">
                     <div className="pull-left image">
                         <img src="img/user2-160x160.jpg" className="img-circle" alt="User Image" />
                     </div>
                     <div className="pull-left info">
                         <p>Ujjal Acharya</p>
                         <a href="#"><i className="fa fa-circle text-warning"></i> Owner</a>
                     </div>
                 </div>
            
                 <ul className="sidebar-menu" data-widget="tree">
                    <br />
                     <li className="treeview">
                         <a href="#">
                             <i className="fa fa-tachometer"></i>
                             <span>Dashboard</span>
                         </a>

                     </li>

                     <li>
                     <a href="pages/calendar.html">
                         <i className="fa fa-bus"></i> <span>My Buses</span>
                         <span className="pull-right-container">
                         <small className="label pull-right bg-blue">17</small>
                         </span>
                     </a>
                     </li>

                     <li>
                     <a href="pages/widgets.html">
                         <i className="fa fa-calendar"></i> <span>My Bookings</span>
                         <span className="pull-right-container">
                         <small className="label pull-right bg-green">new</small>
                         </span>
                     </a>
                     </li>
                     <li className="treeview">
                     <a href="#">
                         <i className="fa fa-pie-chart"></i>
                         <span>Charts</span>
                         <span className="pull-right-container">
                         <i className="fa fa-angle-left pull-right"></i>
                         </span>
                     </a>
                     <ul className="treeview-menu">
                         <li><a href="pages/charts/chartjs.html"><i className="fa fa-circle-o"></i> ChartJS</a></li>
                         <li><a href="pages/charts/morris.html"><i className="fa fa-circle-o"></i> Morris</a></li>
                         <li><a href="pages/charts/flot.html"><i className="fa fa-circle-o"></i> Flot</a></li>
                         <li><a href="pages/charts/inline.html"><i className="fa fa-circle-o"></i> Inline charts</a></li>
                     </ul>
                     </li>
                     <li>
                     <ul className="treeview-menu">
                         <li><a href="pages/tables/simple.html"><i className="fa fa-circle-o"></i> Simple tables</a></li>
                         <li><a href="pages/tables/data.html"><i className="fa fa-circle-o"></i> Data tables</a></li>
                     </ul>
                     </li>

                 </ul>
             </section>
         </aside> 
     )
 }
}