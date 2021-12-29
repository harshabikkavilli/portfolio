import Carousel from 'nuka-carousel';
import {Button} from 'primereact/button';
import {Card} from 'primereact/card';
import React from 'react';
import styled, {css} from 'styled-components';
import {useResponsive} from '../providers/ResponsiveProvider';

type Testimonial = {
	message: string;
	name: string;
	role: string;
};

export default function Testimonials() {
	const {isBigScreen} = useResponsive()!;

	const testimonials: Testimonial[] = [
		{
			message: `Harsha has proven himself to be the definition of an Amazon SDE, being able to to take on any task, backend or frontend, and being able to deliver them. Harsha's quick ramp up and contributions to backend work was extremely helpful and instrumental in launching high profile products successfully.`,
			name: 'Billy Wu',
			role: 'Software Development Manager, Amazon'
		},
		{
			message: `Harsha constantly strives to raise the bar on the visual appeal and customer experiences. He enjoys learning and comes up with cool ideas that play a huge impact in customer experience. He would humbly ask questions when he actually intends to suggest something smart!`,
			name: 'Hardik Shah',
			role: 'Software Development Manager, Amazon'
		},
		{
			message: `Harsha is very quick to build an understanding of unknown concepts and team/org specific service architecture. He played an important role in successfully designing and delivering multiple critical services. He was also instrumental in adapting the common libraries used across the org to the specific requirements of our product.`,
			name: 'Sai Jonnala',
			role: 'Sr. Software Development Engineer, Amazon'
		},
		{
			message: `Through my experience talking with and working with Harsha, I've noticed that he often provides unique perspectives to problems - whether they be technical or process related. He is great at staying calm and objective while being faced with any problem. He is always friendly and I notice that his guidance is often sought, even if just for reassurance due to his wealth of experience.`,
			name: 'Jon Varner',
			role: 'Sr. Software Development Engineer, Amazon'
		},
		{
			message:
				'Harsha is always ready to fearlessly tackle large, complex, and impactful products to improve customer experience. Not only that, he always manages to deliver on them AND usually in less time than was estimated.',
			name: 'Coworker',
			role: 'Software Development Engineer II, Amazon'
		}
	];

	function testimonialTemplate(testimonial: Testimonial, index: number) {
		return (
			<ItemWrapper key={index} isBigScreen={isBigScreen}>
				<Message>"{testimonial.message}"</Message>
				<Name>{testimonial.name}</Name>
				<Role>{testimonial.role}</Role>
			</ItemWrapper>
		);
	}

	return (
		<TestimonialsWrapper className='testimonials'>
			<Header>Testimonials</Header>
			<Carousel
				wrapAround
				renderCenterLeftControls={({previousSlide}) => (
					<Button
						className='p-button-rounded'
						icon='pi pi-chevron-left'
						onClick={previousSlide}
					/>
				)}
				renderCenterRightControls={({nextSlide}) => (
					<Button
						className='p-button-rounded'
						icon='pi pi-chevron-right'
						onClick={nextSlide}
					/>
				)}>
				{testimonials.map((testimonial, i) =>
					testimonialTemplate(testimonial, i)
				)}
			</Carousel>
		</TestimonialsWrapper>
	);
}

const TestimonialsWrapper = styled(Card)`
	text-align: center;
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 670px;
	background-color: #edf1f5;
	border: none;
	box-shadow: none;
	color: black;
	margin-top: auto;
`;

const Header = styled.h5`
	margin: 0;
	font-size: 30px;
	font-weight: bold;
`;

const ItemWrapper = styled.div<{isBigScreen: boolean}>`
	display: flex;
	flex-direction: column;
	flex: 1;
	text-align: center;
	${(props) =>
		props.isBigScreen
			? css`
					padding: 3rem 10rem 5rem;
			  `
			: css`
					padding: 1rem 3rem 5rem;
			  `};
`;

const Message = styled.div`
	font-size: 14px;
	word-wrap: break-word;
`;

const Name = styled.div`
	font-size: 14px;
	font-weight: bold;
	margin-top: 1rem;
`;

const Role = styled.div`
	font-size: 10px;
`;
