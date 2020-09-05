import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Alerts from './components/layout/Alerts';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import AdminLogin from './components/auth/AdminLogin';
import UserPrivateRoute from './components/routing/UserPrivateRoute';
import AdminPrivateRoute from './components/routing/UserPrivateRoute';
import LicenseRegistration from './components/license/LicenseRegistration';

import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import LicenseState from './context/license/LicenseState';

import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
	setAuthToken(localStorage.token);
}

const App = () => {
	return (
		<AuthState>
			<AlertState>
			<LicenseState>
				<Router>
					<Fragment>
						{/* <div className="container"> */}
						<Alerts />
						<Switch>
							<UserPrivateRoute exact path="/" component={LicenseRegistration} />
							{/* <AdminPrivateRoute exact path="/" component={AdminDashboard} /> */}
							<Route exact path="/register" component={Register} />
							<Route exact path="/userlogin" component={Login} />
							<Route exact path="/adminlogin" component={AdminLogin} />
						</Switch>
						{/* </div> */}
					</Fragment>
				</Router>
				</LicenseState>
			</AlertState>
		</AuthState>
	);
};

export default App;
