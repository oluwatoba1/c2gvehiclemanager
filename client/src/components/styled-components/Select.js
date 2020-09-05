/* eslint-disable */
import React from 'react';
import Select from 'react-select';

export default function SimpleSelect(props) {
	const { options, selectedValue, onChange } = props;
	return (
		<Select
			value={options && options.filter(obj => obj.value === selectedValue)}
			{...props}
			onChange={onChange}
			className="selectvms"
		/>
	);
}

export { SimpleSelect };
