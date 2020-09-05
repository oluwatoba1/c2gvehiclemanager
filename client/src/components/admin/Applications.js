import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
	ApplicationContainer,
	ApplicationList,
	ApplicationListItem,
	ApplicationId,
	ApplicationStatus,
	ModalContainer,
	ModalBody,
	ModalCloseButton,
	LicenseHeader,
	LicenseHeaderText,
	ModalDetails,
	ItemWrapper,
	LicenseItem,
	LicenseText,
	ButtonContainer,
	AcceptButton,
	RejectButton
} from '../styled-components';
import Spinner from '../layout/Spinner';

export default function Applications() {
	const [applications, setApplications] = useState({
		data: []
	});
	const [item, setApplication] = useState(null);
	const [loading, setLoading] = useState(true);
	const [showModal, setShowModal] = useState(false);

	const toggleModal = () => setShowModal(!showModal);
	useEffect(() => {
		axios.get('/api/license').then(({ data }) => {
			// console;
			setApplications(data);
			setLoading(false);
		});
	});

	const getApplication = application => {
		toggleModal();
		setApplication(application);
	};

	if (loading) {
		return <Spinner />;
	}

	return (
		<ApplicationContainer>
			{showModal && (
				<ModalContainer>
					<ModalBody>
						<ModalCloseButton onClick={toggleModal}>&times;</ModalCloseButton>
						<LicenseHeader>
							<LicenseHeaderText>
								{item.user?.first_name} {item.user?.last_name}
							</LicenseHeaderText>
						</LicenseHeader>
						<ModalDetails>
							<ItemWrapper>
								<LicenseItem>Application Type:</LicenseItem>
								<LicenseText>{item.application_type}</LicenseText>
							</ItemWrapper>
							<ItemWrapper>
								<LicenseItem>Test Score:</LicenseItem>
								<LicenseText>{item.test_scores}</LicenseText>
							</ItemWrapper>
						</ModalDetails>
						<ModalDetails>
							<ItemWrapper>
								<LicenseItem>State:</LicenseItem>
								<LicenseText>{item.state_of_application}</LicenseText>
							</ItemWrapper>
							<ItemWrapper>
								<LicenseItem>Application:</LicenseItem>
								<LicenseText>{item.application}</LicenseText>
							</ItemWrapper>
						</ModalDetails>
						<ModalDetails>
							<ItemWrapper>
								<LicenseItem>Residential Address:</LicenseItem>
								<LicenseText>{item.residential_address}</LicenseText>
							</ItemWrapper>
						</ModalDetails>
						<ButtonContainer>
							<AcceptButton>Accept</AcceptButton>
							<RejectButton>Reject</RejectButton>
						</ButtonContainer>
					</ModalBody>
				</ModalContainer>
			)}
			<ApplicationList>
				{applications.data.map(application => (
					<ApplicationListItem key={application._id} onClick={() => getApplication(application)}>
						<ApplicationId>
							{application.user?.first_name} {application.user?.last_name}({application._id})
						</ApplicationId>
						<ApplicationStatus>{application.status}</ApplicationStatus>
					</ApplicationListItem>
				))}
			</ApplicationList>
		</ApplicationContainer>
	);
}
