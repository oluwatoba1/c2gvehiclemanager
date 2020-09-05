import React, { Fragment, useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

import Navbar from '../layout/Navbar';

const AdminLogin = props => {
	const [user, setUser] = useState({
		email: '',
		password: ''
	});

	let { email, password } = user;

	const alertContext = useContext(AlertContext);
	const authContext = useContext(AuthContext);

	const { setAlert } = alertContext;
	const { adminLogin, error, clearErrors, isAuthenticated } = authContext;

	useEffect(() => {
		if (isAuthenticated) {
			props.history.push('/admin');
		}

		if (error === 'Invalid credentials') {
			setAlert(error, 'danger', 3000);
			clearErrors();
		}
		//eslint-disable-next-line
	}, [error, isAuthenticated, props.history]);

	const onChange = e => {
		setUser({
			...user,
			[e.target.name]: e.target.value
		});
	};

	const onSubmit = e => {
		e.preventDefault();
		email = email.trim();
		password = password.trim();
		if (email === '' && password === '') {
			setAlert('Please complete all fields', 'danger');
		} else if (email === '') {
			setAlert(`Please complete the email field`, 'danger');
		} else if (password === '') {
			setAlert(`Please complete the password field`, 'danger');
		} else {
			adminLogin({
				email,
				password
			});
		}
	};

	return (
		<Fragment>
			<Navbar />
			<div className="form-container">
				<h1>Admin Login</h1>

				<form onSubmit={onSubmit}>
					<div className="form-group">
						<label htmlFor="email">Email</label>
						<input type="email" name="email" value={email} onChange={onChange} />
					</div>
					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input type="password" name="password" value={password} onChange={onChange} />
					</div>

					<input type="submit" value="Login" className=" btn btn-primary btn-block" />
				</form>
			</div>
		</Fragment>
	);
};

export default AdminLogin;
