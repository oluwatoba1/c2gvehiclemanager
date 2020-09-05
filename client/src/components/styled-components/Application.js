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
	width: 40%;
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
	opacity: 0.4;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 4;
`;

export const ModalBody = styled.div`
	width: 60%;
	height: 80%;
	border-radius: 10px;
	background-color: #fff;
	padding: 20px;
	z-index: 10;
`;
