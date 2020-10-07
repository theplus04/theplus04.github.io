import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class TopNav extends Component {
	render() {
		return (
			<>
				<Navbar
					variant='dark'
					expand='lg'
					fixed={this.props.fixed ? '' : 'top'}
					style={{ background: this.props.colour ? this.props.colour : '#282a36' }}
				>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='mr-auto'>
							<Nav.Link href='/#home'>Home</Nav.Link>
							<Nav.Link href='/#ayush'>About</Nav.Link>
							<Nav.Link href='/#skills'>Skills</Nav.Link>
							<Nav.Link href='/#contact'>Contact</Nav.Link>
						</Nav>
						<Nav>
							<Nav.Link as={Link} to='/blog'>Blogs</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</>
		);
	}
}

export default TopNav;
