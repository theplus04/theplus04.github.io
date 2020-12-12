import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

class TopNav extends Component {
	constructor() {
		super();
		this.state = { scrollY: 0 };
	}

	onScroll = () => {
		this.setState({ scrollY: window.scrollY });
	}

	componentDidMount() {
		window.addEventListener('scroll', this.onScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.onScroll);
	}
	render() {
		let { background, variant } = { background: '#272341', variant: 'dark' };
		if (this.state.scrollY > 0) {
			background = 'white';
			variant = 'light';
		} else {
			background = '#272341';
			variant = 'dark';
		}
		return (
			<>
				<Navbar
					variant={variant}
					expand='lg'
					fixed='top'
					style={{ background }}
				>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='mr-auto'>
							<Nav.Link href='/#home'>Home</Nav.Link>
							<Nav.Link href='/#ayush'>About</Nav.Link>
							<Nav.Link href='/#projects'>Projects</Nav.Link>
							<Nav.Link href='/#contact'>Contact</Nav.Link>
						</Nav>
						<Nav>
							<Nav.Link href='https://blog.ayushkr.me/' target="_blank" >Blogs</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</>
		);
	}
}

export default TopNav;
