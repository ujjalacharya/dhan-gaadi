import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { signout, isAuthenticated } from '../../Utils/Requests/Auth';

const SideBar = ({ history }) => {
	const [menu, setMenu] = useState({ display: 'block' });

	const { user } = isAuthenticated();

	useEffect(() => {
		if (history.location.pathname.includes('bus')) {
			setMenu({ display: 'block' });
    }
	}, [history.location.pathname]);

	const isActive = (history, path) => {
		if (history.location.pathname === path) {
			return 'active';
		} else if (history.location.pathname.includes('bus') && path === 'bus') {
			return 'active';
		} else {
			return;
		}
	};

	const toogleMenu = e => {
		e.preventDefault();
		if (menu.display === 'none') {
			setMenu({ display: 'block' });
		} else {
			setMenu({ display: 'none' });
		}
	};

	const handleSignOut = e => {
		e.preventDefault();
		if (signout()) {
			history.push('/');
		}
	};
console.log(user)
	return (
		<aside className="main-sidebar">
			<section className="sidebar">
				<div className="user-panel">
					<div className="pull-left image">
						<img src="img/user2-160x160.jpg" className="img-circle" alt="UserImage" />
					</div>
					<div className="pull-left info">
						<p>{user.name}</p>
						<a href="false">
							<i className="fa fa-circle text-success"></i>{user.role}
						</a>
					</div>
				</div>

				<ul className="sidebar-menu" data-widget="tree">
					<br />
					<li className={isActive(history, '/')}>
						<Link to="/">
							<i className="fa fa-tachometer"></i>
							<span>Dashboard</span>
						</Link>
					</li>

					<li className={isActive(history, 'bus')}>
						<a href="false" onClick={toogleMenu}>
							<i className="fa fa-bus"></i> <span>My Buses</span>
							<span className="pull-right-container">
								<i className="fa fa-angle-left pull-right"></i>
							</span>
						</a>
						<ul className="treeview-menu" style={menu}>
							<li className={isActive(history, '/bus-available')}>
								<Link to="/bus-available">
									<i className="fa fa-circle-o"></i> Available Buses
									{/* <small className="label pull-right bg-blue">17</small> */}
								</Link>
							</li>
							<li className={isActive(history, '/bus-unavailable')}>
								<Link to="/bus-unavailable">
									<i className="fa fa-circle-o"></i> Unavailable Buses
								</Link>
							</li>
							<li className={isActive(history, '/add-bus')}>
								<Link to="/add-bus">
									<i className="fa fa-plus"></i> Add new bus
								</Link>
							</li>
						</ul>
					</li>

					<li className={isActive(history, '/my-bookings')}>
						<Link to="my-bookings">
							<i className="fa fa-calendar"></i> <span>My Bookings</span>
							<span className="pull-right-container">
								<small className="label pull-right bg-green">new</small>
							</span>
						</Link>
					</li>

					<li>
						<a href="false" onClick={handleSignOut}>
							<i className="fa fa-sign-out"></i> <span>Logout</span>
						</a>
					</li>
				</ul>
			</section>
		</aside>
	);
};

export default withRouter(SideBar);
