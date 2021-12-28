import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import PrimeReact from 'primereact/api';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/vela-blue/theme.css';
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {createGlobalStyle} from 'styled-components';
import BasePage from './components/BasePage';
import {withProviders} from './hoc';
import './layout/layout.scss';
import {ResponsiveProvider} from './providers/ResponsiveProvider';
import AboutMe from './views/AboutMe';
import Contact from './views/Contact';
import Experience from './views/Experience';
import Work from './views/Work';

const GlobalStyle = createGlobalStyle`
  body {
		margin: 0;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
			'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji',
			'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
		font-size: 1rem;
		font-weight: 400;
		line-height: 1.5;
		color: #212529;
		text-align: left;
		background: #edf1f5;;
  }
`;

function App() {
	AOS.init({
		duration: 1200
	});
	PrimeReact.ripple = true;

	return (
		<BrowserRouter>
			<GlobalStyle />
			<BasePage>
				<Routes>
					<Route path='/' element={<AboutMe />} />
					<Route path='/about' element={<AboutMe />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/experience' element={<Experience />} />
					<Route path='/work' element={<Work />} />
				</Routes>
			</BasePage>
		</BrowserRouter>
	);
}

export default withProviders([ResponsiveProvider])(App);
