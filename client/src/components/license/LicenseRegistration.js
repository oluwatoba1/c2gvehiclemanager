import React, { Fragment, useState, useEffect, useContext } from 'react';
import {
	LicenseContainer,
	LicenseFormContainer,
	LicenseHeader,
	LicenseHeaderText,
	LicenseHeaderSmallText,
	LicenseFormBodyWrapper,
	LicenseFormBody,
	LicenseLabel,
	LicenseInput,
	LicenseRadio,
	LicenseButton
} from '../styled-components';
import AuthContext from '../../context/auth/authContext';

export default function Registration() {
	const authContext = useContext(AuthContext);

	const [registrationFields, setFields] = useState({
		application_type: '',
		test_scores: '',
		state_of_application: '',
		application: '',
		residential_address: ''
	});

	const {
		application_type,
		test_scores,
		state_of_application,
		residential_address
	} = registrationFields;

	useEffect(() => {
		authContext.loadUser();
		//eslint-disable-next-line
	}, []);

	const onChange = e => {
		setFields({
			...registrationFields,
			[e.target.name]: e.target.value
		});
	};

	const submit = () => {};

	return (
		<LicenseContainer>
			<LicenseFormContainer>
				<LicenseHeader>
					<LicenseHeaderText>License Registration</LicenseHeaderText>
					<LicenseHeaderSmallText>Please fill in the following details</LicenseHeaderSmallText>
				</LicenseHeader>
				<LicenseFormBodyWrapper>
					<LicenseFormBody>
						<LicenseLabel>Application Type</LicenseLabel>
						<select
							name="application_type"
							className="selectvms"
							onChange={onChange}
							value={application_type}>
							<option value="Articulated Vehicle">Articulated Vehicle</option>
							<option value="Commercial">Commercial</option>
							<option value="Private">Private</option>
							<option value="Motorcycle">Motorcycle</option>
						</select>
					</LicenseFormBody>
					<LicenseFormBody>
						<LicenseLabel>Driver's Test Scores</LicenseLabel>
						<LicenseInput
							name="test_scores"
							value={test_scores}
							onChange={onChange}
							placeholder="Must be between 0 and 100"
						/>
					</LicenseFormBody>

					<LicenseFormBody>
						<LicenseLabel>State</LicenseLabel>
						<LicenseInput
							name="state_of_application"
							value={state_of_application}
							onChange={onChange}
							placeholder="...where application is made"
						/>
					</LicenseFormBody>
					<LicenseFormBody>
						<LicenseLabel>Application</LicenseLabel>
						<Fragment>
							<LicenseRadio
								name="application"
								onChange={onChange}
								value="First time"
								type="radio"
							/>{' '}
							First Time
							<LicenseRadio
								name="application"
								onChange={onChange}
								value="Renewal"
								type="radio"
							/>{' '}
							Renewal
						</Fragment>
					</LicenseFormBody>

					<LicenseFormBody>
						<LicenseLabel>Residential Address</LicenseLabel>
						<LicenseInput
							name="residential_address"
							onChange={onChange}
							value={residential_address}
						/>
					</LicenseFormBody>
				</LicenseFormBodyWrapper>

				<LicenseButton onClick={submit}>Submit</LicenseButton>
			</LicenseFormContainer>
		</LicenseContainer>
	);
}
