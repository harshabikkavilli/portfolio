// React
import classNames from 'classnames';
import React from 'react';
import styled, {css, ThemeProvider} from 'styled-components';
import {useResponsive} from '../providers/ResponsiveProvider';
import NavBar from './NavBar';

type BasePageType = {
	children: JSX.Element;
};

export default function BasePage({children}: BasePageType) {
	const {isBigScreen} = useResponsive()!;

	const wrapperClass = classNames('layout-wrapper layout-theme-light');

	return (
		<ThemeProvider theme={{isBigScreen}}>
			<BasePageWrapper className={wrapperClass}>
				<NavBar />
				<BodyWrapper>{children}</BodyWrapper>
			</BasePageWrapper>
		</ThemeProvider>
	);
}

const BasePageWrapper = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
`;

const NAV_BAR_HEIGHT = 5;
const NAV_BAR_HEIGHT_MOBILE = 3.5;

const BodyWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: absolute;

	${(props) =>
		props.theme.isBigScreen
			? css`
					height: calc(100% - ${NAV_BAR_HEIGHT}rem);
					top: ${NAV_BAR_HEIGHT}rem;
			  `
			: css`
					height: calc(100% - ${NAV_BAR_HEIGHT_MOBILE}rem);
					top: ${NAV_BAR_HEIGHT_MOBILE}rem;
			  `}
`;
