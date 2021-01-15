import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faDiscord, faGithub, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Jump from 'react-reveal/Jump';
import RubberBand from 'react-reveal/RubberBand';

import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Footer extends Component {
	render() {
		return (
			<>
				<div
					className='jumbotron footer'
					style={{
						background: this.props.colour ? this.props.colour : '#282a36',
						margin: '0px',
						width: '100%',
						borderRadius: '0',
						color: 'white',
						textAlign: 'center',
						display: 'flex',
						justifyContent: 'center',
						flexDirection: 'column'
					}}
				>
					<Jump>
						<div className='social-links' style={{ fontSize: '35px', textAlign: 'center' }}>
							<a
								style={{ textDecoration: 'none', color: 'white' }}
								href='/discord'
								target='_blank'
								rel='noopener noreferrer'
							>
								<FontAwesomeIcon icon={faDiscord} id='ic' />
								&nbsp;
							</a>
							<a
								style={{ textDecoration: 'none', color: 'white' }}
								href='/github'
								target='_blank'
								rel='noopener noreferrer'
							>
								<FontAwesomeIcon icon={faGithub} id='ic' />
								&nbsp;
							</a>
							<a
								style={{ textDecoration: 'none', color: 'white' }}
								href='/facebook'
								target='_blank'
								rel='noopener noreferrer'
							>
								<FontAwesomeIcon icon={faFacebook} id='ic' />
								&nbsp;
							</a>
							<a
								style={{ textDecoration: 'none', color: 'white' }}
								href='/instagram'
								target='_blank'
								rel='noopener noreferrer'
							>
								<FontAwesomeIcon icon={faInstagram} id='ic' />
							</a>
						</div>
					</Jump>
					<hr />

					<RubberBand>
						<span className='footer-text'>
							<FontAwesomeIcon icon={faCode} /> with <FontAwesomeIcon icon={faHeart} /> by Ayush CH
						</span>
					</RubberBand>
				</div>
			</>
		);
	}
}

export default Footer;
