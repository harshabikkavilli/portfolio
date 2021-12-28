// React
import classnames from 'classnames';
import {Menubar} from 'primereact/menubar';
import React from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import Logo from '../assets/logo.png';

export default function NavBar() {
	const location = useLocation();
	const navigate = useNavigate();

	const navItems = [
		{
			label: 'About Me',
			icon: 'pi pi-fw pi-user',
			className: classnames({
				'p-menuitem-active':
					location.pathname === '/' || location.pathname === '/about'
			}),
			command: () => {
				navigate('/about');
			}
		},
		{
			label: 'Work',
			icon: 'pi pi-fw pi-palette',
			className: classnames({
				'p-menuitem-active': location.pathname.includes('/work')
			}),
			command: () => {
				navigate('/work');
			}
		},
		{
			label: 'Experience',
			icon: 'pi pi-fw pi-briefcase',
			className: classnames({
				'p-menuitem-active': location.pathname.includes('/experience')
			}),
			command: () => {
				navigate('/experience');
			}
		}
	];

	const start = (
		<Link to='/' className='layout-topbar-logo'>
			<img src={Logo} alt='logo' />
		</Link>
	);

	return <Menubar className='layout-topbar' model={navItems} start={start} />;
}
