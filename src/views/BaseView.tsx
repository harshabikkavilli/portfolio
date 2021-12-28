import {Button} from 'primereact/button';
import React from 'react';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';

type BaseViewType = {
	children: JSX.Element;
};

export default function BaseView({children}: BaseViewType) {
	const navigate = useNavigate();
	return (
		<Wrapper>
			{children}
			<ContactWrapper className='contact-wrapper'>
				<h1>Harsha Bikkavilli</h1>
				<ContactsGroup>
					<Button
						className='facebook p-button-rounded p-0 mx-2'
						onClick={() => {
							navigate('/contact');
						}}>
						<i className='pi pi-send px-2'></i>
						<span className='px-3'>Contact</span>
					</Button>
					<Button
						className='linkedin p-button-rounded p-0 mx-2'
						onClick={() => {
							window.open(
								'https://www.linkedin.com/in/harsha-bikkavilli-0382051b/',
								'_blank'
							);
						}}>
						<i className='pi pi-linkedin px-2'></i>
						<span className='px-3'>LinkedIn</span>
					</Button>
					<Button
						className='github p-button-rounded p-0'
						onClick={() => {
							window.open('https://github.com/harshabikkavilli', '_blank');
						}}>
						<i className='pi pi-github px-2'></i>
						<span className='px-3'>Github</span>
					</Button>
				</ContactsGroup>
			</ContactWrapper>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	width: 100%;
	min-width: 320px;
	max-width: 1920px;
	height: 100%;
	min-height: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;
`;

const ContactWrapper = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	justify-content: center;
	align-items: center;
	width: 100%;
	padding: 2rem 0;
	border-radius: 0.75rem 0.75rem 0 0;
	background: linear-gradient(to bottom right, #a1a1a1, #84b2d1);
`;

const ContactsGroup = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
`;
