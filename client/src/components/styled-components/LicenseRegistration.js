import styled from 'styled-components';

export const LicenseContainer = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	background-color: #000;
	padding: 20px;
`;

export const LicenseFormContainer = styled.div`
	width: 70%;
	height: 80%;
	border-radius: 10px;
	background-color: #fff;
	padding: 20px;
`;

export const LicenseHeader = styled.div`
	border-bottom: 1px solid #333;
	padding: 20px;
`;

export const LicenseHeaderText = styled.h3`
	color: #000;
	font-size: 24px;
	font-weight: 600;
	text-align: center;
	margin-bottom: 10px;
`;

export const LicenseHeaderSmallText = styled.p`
	color: #000;
	font-size: 14px;
	text-align: center;
`;

export const LicenseFormBodyWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	column-gap: 20px;
	padding: 20px;
	border-bottom: 1px solid #333;
`;

export const LicenseFormBody = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export const LicenseLabel = styled.label`
	width: 50%;
	font-size: 16px;
	color: #000;
`;

export const LicenseInput = styled.input`
	padding: 10px;
	border-radius: 5px;
	border: 1px solid #000;
	outline: #000;
	::placeholder {
		color: rgba(0, 0, 0, 0.5);
	}
`;

export const LicenseRadio = styled.input`
	background-color: #000;
	padding: 10px;
`;

export const LicenseButton = styled.button`
	background-color: #000;
	color: #fff;
	padding: 10px;
	width: 100px;
	border: none;
	text-transform: capitalize;
	border-radius: 10px;
	font-size: 16px;
	margin-top: 20px;
	margin-left: 40%;
	cursor: pointer;
`;
