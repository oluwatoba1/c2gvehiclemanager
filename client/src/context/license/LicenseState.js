import React, { useReducer } from 'react';
import axios from 'axios';
import LicenseContext from './licenseContext';
import licenseReducer from './licenseReducer';
import { LICENSE_REG_FAIL, LICENSE_REG_SUCCESS } from '../types';

const LicenseState = props => {
	const initialState = {
		info: null,
		error: null
	};

	const [state, dispatch] = useReducer(licenseReducer, initialState);

	//  Login user
	const saveCredentials = async formData => {
		const config = {
			headers: {
				'Content-Type': 'application/json'
			}
		};

		try {
			const res = await axios.post('/api/license/', formData, config);
			dispatch({
				type: LICENSE_REG_SUCCESS,
				payload: res.data
			});
		} catch (error) {
			dispatch({
				type: LICENSE_REG_FAIL,
				payload: error.response.msg
			});
		}
	};

	return (
		<LicenseContext.Provider
			value={{
				info: state.info,
				error: state.error,
				saveCredentials
			}}>
			{props.children}
		</LicenseContext.Provider>
	);
};

export default LicenseState;
