import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

const Register = props => {
	const alertContext = useContext(AlertContext);
	const authContext = useContext(AuthContext);

	const { setAlert } = alertContext;
	const { register, error, clearErrors, isAuthenticated } = authContext;

	const [user, setUser] = useState({
		first_name: '',
		last_name: '',
		sex: '',
		date_of_birth: '',
		state_of_origin: '',
		occupation: '',
		residential_address: '',
		email: '',
		password: ''
	});

	const [password2, setPassword2] = useState('');
	let {
		first_name,
		last_name,
		sex,
		occupation,
		residential_address,
		date_of_birth,
		state_of_origin,
		email,
		password
	} = user;

	useEffect(() => {
		if (isAuthenticated) {
			props.history.push('/');
		}

		let password22 = document.getElementById('password2');
		if (password === password2) {
			password22.style.border = '1px solid #13a113';
		} else {
			password22.style.border = '1px solid #cc1e1e';
		}
		if (error === 'User already exists') {
			setAlert(error, 'danger', 3000);
			clearErrors();
		}
		//eslint-disable-next-line
	}, [password, password2, error, isAuthenticated, props.history]);

	const onChange = e => {
		setUser({
			...user,
			[e.target.name]: e.target.value
		});
	};

	const onChangePassword2 = e => setPassword2(e.target.value);

	const onSubmit = e => {
		e.preventDefault();
		first_name = first_name.trim();
		last_name = last_name.trim();
		residential_address = residential_address.trim();
		occupation = occupation.trim();
		state_of_origin = state_of_origin.trim();
		sex = sex.trim();
		date_of_birth = date_of_birth.trim();
		occupation = occupation.trim();
		email = email.trim();
		password = password.trim();

		if (password !== password2) {
			setAlert('passwords do not match', 'danger');
		} else {
			register(user);
		}
	};

	return (
		<div className="form-container">
			<h1>
				Account <span className="text-primary">Register</span>
			</h1>

			<form onSubmit={onSubmit}>
				<div className="form-group">
					<label htmlFor="name">First Name</label>
					<input type="text" name="first_name" value={first_name} onChange={onChange} required />
				</div>
				<div className="form-group">
					<label htmlFor="last_name">Last Name</label>
					<input type="text" name="last_name" value={last_name} onChange={onChange} required />
				</div>
				<div className="form-group">
					<label htmlFor="email">Email</label>
					<input type="email" name="email" value={email} onChange={onChange} required />
				</div>
				<div className="form-group">
					<label htmlFor="date_of_birth">Date of Birth</label>
					<input
						type="date"
						name="date_of_birth"
						value={date_of_birth}
						onChange={onChange}
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="sex">Sex</label>
					<input type="text" name="sex" value={sex} onChange={onChange} required />
				</div>
				<div className="form-group">
					<label htmlFor="state_of_origin">State of Origin</label>
					<input
						type="text"
						name="state_of_origin"
						value={state_of_origin}
						onChange={onChange}
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="occupation">Occupation</label>
					<input type="text" name="occupation" value={occupation} onChange={onChange} required />
				</div>
				<div className="form-group">
					<label htmlFor="residential_address">Residential Address</label>
					<input
						type="text"
						name="residential_address"
						value={residential_address}
						onChange={onChange}
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						name="password"
						value={password}
						onChange={onChange}
						required
						minLength="6"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="password2">Confirm Password</label>
					<input
						id="password2"
						type="password"
						name="password2"
						value={password2}
						onChange={onChangePassword2}
						required
						minLength="6"
					/>
				</div>
				<input type="submit" value="Register" className=" btn btn-primary btn-block" />
			</form>
		</div>
	);
};

export default Register;
