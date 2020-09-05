import React, { useState } from 'react';
import {
	LicenseContaner,
	LicenseFormContainer,
	LicenseHeader,
	LicenseHeaderText,
	LicenseHeaderSmallText
} from '../styled-components';

export default function Registration() {
	const [registrationFields, setFields] = useState({
		application_type: '',
		test_scores: '',
		state_of_application: '',
		application: '',
		residential_address: ''
	});

	const onChange = e => {
		setFields({
			...registrationFields,
			[e.target.name]: e.target.value
		});
	};

	return (
		<LicenseContaner>
			<LicenseFormContainer>
				<LicenseHeader>
					<LicenseHeaderText>License Registration</LicenseHeaderText>
					<LicenseHeaderSmallText>Please fill in the following details</LicenseHeaderSmallText>
				</LicenseHeader>
			</LicenseFormContainer>
		</LicenseContaner>
	);
}
