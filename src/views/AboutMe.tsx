import {Card} from 'primereact/card';
import {Chip} from 'primereact/chip';
import React from 'react';
import styled, {css, ThemeProvider} from 'styled-components';
import Hero from '../assets/hero.jpg';
import {useResponsive} from '../providers/ResponsiveProvider';
import BaseView from './BaseView';

export default function AboutMe() {
	const {isBigScreen} = useResponsive()!;

	return (
		<ThemeProvider theme={{isBigScreen}}>
			<BaseView>
				<div data-aos='fade'>
					<Info title="Hi, I'm Harsha" subTitle='Full-Stack Software Engineer'>
						<Introduction>
							<StyledPhoto src={Hero} bgPos='center center'></StyledPhoto>
							<Description>
								<p>
									I am a Software Engineer and specialize in creating web
									applications in TypeScript and Javascript, built natively or
									with rendering frameworks like React and Vue.js.
								</p>
								<p>
									I have strong knowledge on the cloud and its best practices
									through my 4+ years of experience in AWS (Amazon Web
									Services). Using the cloud, I have designed and built flexible
									systems based on serverless microarchitecture platforms that
									scale to millions of users while keeping costs low. Whether is
									performance, scalability, security, cost-efficiency, or
									operational excellence, I can help you design the best
									architecture for your product.
								</p>
								<h5>EDUCATION</h5>
								<ul>
									<li>
										<p>
											<strong>University of Southern California</strong> -
											Masters in Electrical/Computer Engineering
										</p>
									</li>
									<li>
										<p>
											<strong>IIIT Allahabad, India</strong> - Bachelor in
											Electronics and Communication Engineering
										</p>
									</li>
								</ul>
								<h5>SKILLS</h5>
								<div className='d-flex ai-center flex-wrap'>
									<Chip label='AWS' className='mr-2 mb-2 custom-chip' />
									<Chip label='React' className='mr-2 mb-2 custom-chip' />
									<Chip label='Vue' className='mr-2 mb-2 custom-chip' />
									<Chip label='Typescript' className='mr-2 mb-2 custom-chip' />
									<Chip label='Javascript' className='mr-2 mb-2 custom-chip' />
									<Chip label='Java' className='mr-2 mb-2 custom-chip' />
									<Chip label='HTML' className='mr-2 mb-2 custom-chip' />
									<Chip label='CSS' className='mr-2 mb-2 custom-chip' />
								</div>
							</Description>
						</Introduction>
					</Info>
				</div>
			</BaseView>
		</ThemeProvider>
	);
}

const Introduction = styled.div`
	width: 100%;
	height: 100%;
	display: flex;

	${(props) =>
		props.theme.isBigScreen
			? css`
					justify-content: flex-start;
			  `
			: css`
					flex-direction: column;
					align-items: center;
					justify-content: center;
			  `};
`;

const StyledPhoto = styled.div<{src: string; bgPos: string}>`
	background-image: url(${(props) => props.src});
	background-repeat: no-repeat;
	background-size: cover;
	display: flex;
	flex: 1;
	min-height: 300px;
	border-radius: 0.75rem;

	${(props) =>
		css`
			background-position: ${props.bgPos};
		`}

	${(props) =>
		props.theme.isBigScreen
			? css`
					margin-right: 2rem;
			  `
			: css`
					margin-bottom: 2rem;
					width: 100%;
			  `}
		max-width: 600px;
`;

const Info = styled(Card)`
	text-align: left;
	display: flex;

	${(props) =>
		props.theme.isBigScreen
			? css`
					width: calc(100% - 4rem);
					margin: 2rem;
			  `
			: css`
					flex-direction: column;
					width: calc(100% - 2rem);
					margin: 1rem;
			  `};
`;

const Description = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
`;
