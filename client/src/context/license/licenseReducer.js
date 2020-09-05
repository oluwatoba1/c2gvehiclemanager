import {
	LICENSE_REG_FAIL,
	LICENSE_REG_SUCCESS,
} from '../types';

export default (state, action) => {
	const { type, payload } = action;
	switch (type) {
		case LICENSE_REG_SUCCESS:
			return {
				...state,
				info: payload
			};
		case LICENSE_REG_FAIL: 
		return {
			error: payload
		}
		default:
			return state;
	}
};
