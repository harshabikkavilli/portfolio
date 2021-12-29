import AOS from 'aos';
import {Button} from 'primereact/button';
import {Card} from 'primereact/card';
import {Timeline} from 'primereact/timeline';
import React, {useEffect} from 'react';
import styled, {css} from 'styled-components';
import SevenhillsLogo from '../assets/experience/7hillsLogo.png';
import CareLogo from '../assets/experience/careLogo.png';
import JuniperLogo from '../assets/experience/juniperLogo.png';
import PhotosLogo from '../assets/experience/photosLogo.png';
import {useResponsive} from '../providers/ResponsiveProvider';
import BaseView from './BaseView';

type ExperienceItem = {
	borderColor?: string;
	color: string;
	date: string;
	description: string;
	icon: string;
	link: string;
	name: string;
	role: string;
};
export default function Experience() {
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

	const experienceItems: ExperienceItem[] = [
		{
			color: '#2e2e2e',
			date: 'May 2020 - Present',
			description: `As a core member of Amazon Care Communications squad, 
			designing and driving multiple high profile products that scale to millions of users.`,
			icon: CareLogo,
			link: 'https://amazon.care/',
			name: 'Amazon Care',
			role: 'Software Development Engineer'
		},
		{
			color: '#fdc408',
			date: 'July 2017 - April 2020',
			description: `As a lead engineer for Amazon Prints, 
			I have successfully designed and launched several prints related products like Standard Prints, Wall Decor, Photo books.`,
			icon: PhotosLogo,
			link: 'https://www.amazon.com/photos',
			name: 'Amazon Photos',
			role: 'Software Development Engineer'
		},
		{
			color: '#448500',
			date: 'May 2016 - August 2016',
			description: `Created high impact as an intern in developing tools with Angular/NodeJS that integrates and runs several python backed tests on routers.`,
			icon: JuniperLogo,
			link: 'https://www.juniper.net/',
			name: 'Juniper Networks',
			role: 'Software Engineer Intern'
		},
		{
			color: '#fff',
			borderColor: '#dad8d8',
			date: 'July 2014 - June 2015',
			description: `Being one of the founding members, created various Web-Applets using Java-JDBC, ORACLE, SQL.`,
			icon: SevenhillsLogo,
			link: 'https://www.sevenhillsehealth.com/',
			name: 'Sevenhills e-Health',
			role: 'Full-Stack Software Engineer'
		}
	];

	const customizedMarker = (item: ExperienceItem) => {
		return (
			<span
				className='custom-marker p-shadow-2'
				style={{
					backgroundColor: item.color,
					padding: '2.25rem',
					border: item.borderColor && `2px solid ${item.borderColor}`
				}}>
				<img src={item.icon} alt={item.name} style={{width: '3rem'}} />
			</span>
		);
	};

	const customizedContent = (item: ExperienceItem, index: number) => {
		const getAOSStyle = () => {
			if (isBigScreen && index % 2 !== 0) {
				return 'fade-left';
			}
			return 'fade-right';
		};
		return (
			<div data-aos={getAOSStyle()}>
				<Card title={item.name} subTitle={item.role}>
					<p>{item.description}</p>
					<Button
						className='p-button-link'
						icon='pi pi-external-link'
						label='Visit site'
						onClick={() => {
							window.open(item.link, '_blank');
						}}
						style={{fontWeight: 'bold'}}
					/>
				</Card>
			</div>
		);
	};

	return (
		<BaseView>
			<Wrapper>
				<Timeline
					value={experienceItems}
					align='alternate'
					className='customized-timeline'
					marker={customizedMarker}
					content={customizedContent}
				/>
			</Wrapper>
		</BaseView>
	);
}

const Wrapper = styled(Card)`
	background: #fff;

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
