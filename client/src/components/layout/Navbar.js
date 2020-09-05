import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const Navbar = ({ title, icon, showRegister }) => {
	const authContext = useContext(AuthContext);

	const { isAuthenticated, logout, user } = authContext;

	const onLogout = () => {
		logout();
	};

	const authLinks = (
		<Fragment>
			<li>Hello, {user && user.first_name}</li>
			<li>
				<a onClick={onLogout} href="#!">
					<i className="fas fa-sign-out-alt icon-white"></i> <span className="hide-sm">Logout</span>
				</a>
			</li>
		</Fragment>
	);

	const guestLinks = (
		<Fragment>
			{showRegister && (
				<li>
					<Link to="/register">Register</Link>
				</li>
			)}
			<li>
				<Link to="/login">Login</Link>
			</li>
		</Fragment>
	);

	return (
		<div className="navbar bg-primary">
			<h1>
				<i className={icon} /> {title}
			</h1>

			<ul>{isAuthenticated ? authLinks : guestLinks}</ul>
		</div>
	);
};

export default Navbar;

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string
};

Navbar.defaultProps = {
	title: 'C2G Vehicle Manager',
	icon: 'fas fa-id-card-alt'
};
