import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const UserPrivateRoute = ({ component: Component, ...rest }) => {
	const authContext = useContext(AuthContext);
	const { isAuthenticated, user, loading } = authContext;
	const token = localStorage.getItem('token');
	return (
		<Route
			{...rest}
			render={props =>
				user === null && !loading ? <Redirect to="/userlogin" /> : <Component {...props} />
			}
		/>
	);
};

export default UserPrivateRoute;
