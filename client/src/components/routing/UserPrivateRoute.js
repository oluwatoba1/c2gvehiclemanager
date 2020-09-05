import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const UserPrivateRoute = ({ component: Component, ...rest }) => {
	const authContext = useContext(AuthContext);
	const { user, loading } = authContext;
	return (
		<Route
			{...rest}
			render={props =>
				!user && !loading ? <Redirect to="/userlogin" /> : <Component {...props} />
			}
		/>
	);
};

export default UserPrivateRoute;
