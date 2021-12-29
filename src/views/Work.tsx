import AOS from 'aos';
import {Button} from 'primereact/button';
import {Card} from 'primereact/card';
import {Chip} from 'primereact/chip';
import React, {useEffect} from 'react';
import styled, {css} from 'styled-components';
import HKFlix from '../assets/work/HKFlix.png';
import SafeTravels from '../assets/work/SafeTravels.png';
import SafeTravelsMobile from '../assets/work/SafeTravelsMobile.png';
import {useResponsive} from '../providers/ResponsiveProvider';
import BaseView from './BaseView';

enum INFO_TYPE {
	PRIMARY = 'PRIMARY',
	SECONDARY = 'SECONDARY'
}

export default function Work() {
	const {isBigScreen} = useResponsive()!;

	useEffect(() => {
		const resizeListener = () => {
			AOS.refresh();
		};
		// set resize listener
		window.addEventListener('resize', resizeListener);

		// clean up function
		return () => {
			// remove resize listener
			window.removeEventListener('resize', resizeListener);
		};
	}, []);

	const getImageAOSStyle = (infoTye: INFO_TYPE) => {
		if (isBigScreen) {
			if (infoTye === INFO_TYPE.SECONDARY) return 'fade-left';
			return 'fade-right';
		}
		if (infoTye === INFO_TYPE.SECONDARY) return 'fade-up';
		return 'fade-down';
	};

	return (
		<BaseView>
			<Wrapper className='work'>
				<div data-aos={getImageAOSStyle(INFO_TYPE.PRIMARY)}>
					<Info
						title='SafeTravels'
						subTitle='Travel Itinerary planner'
						style={{borderRadius: '0.75rem 0.75rem 0 0'}}>
						<Introduction>
							<StyledPhoto
								src={isBigScreen ? SafeTravels : SafeTravelsMobile}
								bgPos='top center'></StyledPhoto>
							<Description>
								<p>
									SafeTravels is a web application that allows users to safely
									plan their trip itinerary.
								</p>
								<ul>
									<li>
										<p>
											Stay up-to-date with the latest travel restrictions for
											the destination you are planning to go to.
										</p>
									</li>
									<li>
										<p>
											You can add places to watchlist and never lose track of
											the updates.
										</p>
									</li>
									<li>
										<p>
											Plan your trip with confidence and have all your trips in
											one place.
										</p>
									</li>
								</ul>
								<h5>Technologies</h5>
								<div className='d-flex ai-center flex-wrap'>
									<Chip label='React/Hooks' className='mr-2 mb-2 custom-chip' />
									<Chip label='Typescript' className='mr-2 mb-2 custom-chip' />
									<Chip label='Serverless' className='mr-2 mb-2 custom-chip' />
									<Chip label='AWS' className='mr-2 mb-2 custom-chip' />
									<Chip label='Amadeus API' className='mr-2 mb-2 custom-chip' />
									<Chip
										label='GoogleMaps Platform'
										className='custom-chip mb-2'
									/>
								</div>
								<div className='pt-2'>
									<Button
										className='p-button-link'
										icon='pi pi-external-link'
										label='Visit application'
										onClick={() => {
											window.open('https://travel.safe-4u.com', '_blank');
										}}
										style={{fontWeight: 'bold'}}
									/>
								</div>
							</Description>
						</Introduction>
					</Info>
				</div>
				<div data-aos={getImageAOSStyle(INFO_TYPE.SECONDARY)}>
					<Info
						title='HKFlix'
						subTitle='A minimalist Netflix clone'
						className='secondary'
						style={{borderRadius: '0 0 0.75rem 0.75rem'}}>
						<Introduction>
							<Description>
								<p>
									HKFlix is a web application built with the help of TMDB api to
									get the movie, TV and celebrity content.
								</p>
								<ul>
									<li>
										<p>
											Find ratings and reviews for the newest movie and TV
											shows.
										</p>
									</li>
									<li>
										<p>Watch your favorite movies and TV shows trailers.</p>
									</li>
								</ul>
								<h5>Technologies</h5>
								<div className='d-flex ai-center flex-wrap'>
									<Chip label='React/Hooks' className='mr-2 mb-2' />
									<Chip label='Typescript' className='mr-2 mb-2' />
									<Chip label='AWS' className='mr-2 mb-2' />
									<Chip label='TMDB API' className='mr-2 mb-2' />
								</div>
								<div className='py-2'>
									<Button
										className='p-button-link'
										icon='pi pi-external-link'
										label='Visit application'
										onClick={() => {
											window.open(
												'https://main.d13zdmao2ffrfd.amplifyapp.com/',
												'_blank'
											);
										}}
										style={{fontWeight: 'bold'}}
									/>
								</div>
							</Description>
							<StyledPhoto src={HKFlix} bgPos='top center'></StyledPhoto>
						</Introduction>
					</Info>
				</div>
			</Wrapper>
		</BaseView>
	);
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	${(props) =>
		props.theme.isBigScreen
			? css`
					width: calc(100% - 4rem);
					margin: auto;
			  `
			: css`
					flex-direction: column;
					width: calc(100% - 2rem);
					margin: 1rem;
			  `};
`;

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
`;

const Description = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
`;
