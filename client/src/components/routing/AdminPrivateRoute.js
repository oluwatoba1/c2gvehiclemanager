import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const AdminPrivateRoute = ({ component: Component, ...rest }) => {
	const authContext = useContext(AuthContext);
	const { isAuthenticated, user, loading } = authContext;
	const token = localStorage.getItem('token');
	return (
		<Route
			{...rest}
			render={props =>
				!user && user.role !== null && !loading ? (
					<Redirect to="/adminlogin" />
				) : (
					<Component {...props} />
				)
			}
		/>
	);
};

export default AdminPrivateRoute;
