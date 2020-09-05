import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
	ApplicationContainer,
	ApplicationList,
	ApplicationListItem,
	ApplicationId,
	ApplicationStatus,
	ModalContainer,
	ModalBody
} from '../styled-components';
import Spinner from '../layout/Spinner';

export default function Applications() {
	const [applications, setApplications] = useState({
		data: []
	});
	const [application, setApplication] = useState(null);
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
			{/* <ModalContainer></ModalContainer> */}
			<ApplicationList>
				{applications.data.map(application => (
					<ApplicationListItem onClick={() => getApplication(application)}>
						<ApplicationId>{application._id}</ApplicationId>
						<ApplicationStatus>{application.status}</ApplicationStatus>
					</ApplicationListItem>
				))}
			</ApplicationList>
		</ApplicationContainer>
	);
}
