import styled from 'styled-components';

export const ApplicationContainer = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: #000;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const ApplicationList = styled.div`
	width: 60%;
	height: 80%;
	border-radius: 10px;
	background-color: #fff;
	padding: 20px;
	overflow-y: scroll;
	display: grid;
	grid-template-rows: repeat(1, 1fr);
	row-gap: 20px;
`;

export const ApplicationListItem = styled.div`
	background-color: #fff;
	padding: 10px;
	border-radius: 10px;
	border: 2px solid #000;
	margin-bottom: 20px;
	cursor: pointer;
`;

export const ApplicationId = styled.h3`
	font-size: 20px;
	color: #000;
	text-align: center;
`;

export const ApplicationStatus = styled.p`
	font-size: 14px;
	color: #333;
	text-align: center;
`;

export const ModalContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: #000;
	// opacity: 0.4;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 4;
`;

export const ModalBody = styled.div`
	position: relative;
	width: 60%;
	height: 80%;
	border-radius: 10px;
	background-color: #fff;
	padding: 20px;
	z-index: 10;
`;

export const ModalCloseButton = styled.div`
	position: absolute;
	top: 0;
	right: 20px;
	font-size: 30px;
	border: 0;
	color: #000;
	cursor: pointer;
`;

export const ModalDetails = styled.div`
	display: grid;
	padding: 20px 10px;
	grid-template-columns: repeat(2, 1fr);
	column-gap: 20px;
`;

export const ItemWrapper = styled.div`
	width: 100%;
	display: flex;
`;

export const LicenseItem = styled.h3`
	font-size: 20px;
	color: #000;
	font-weight: 700;
	margin-right: 20px;
`;

export const LicenseText = styled.h3`
	color: #000;
	font-size: 20px;
	font-weight: 500;
`;

export const ButtonContainer = styled.div`
	display: flex;
	padding: 20px;
	height: 100px;
	flex-direction: row;
	align-items: flex-end;
	justify-content: space-around;
	border-top: 1px solid #000;
`;

export const AcceptButton = styled.button`
	background-color: green;
	color: #fff;
	padding: 10px;
	width: 100px;
	border: none;
	text-transform: capitalize;
	border-radius: 10px;
	font-size: 16px;
	cursor: pointer;
`;

export const RejectButton = styled.button`
	background-color: red;
	color: #fff;
	padding: 10px;
	width: 100px;
	border: none;
	text-transform: capitalize;
	border-radius: 10px;
	font-size: 16px;
	cursor: pointer;
`;
