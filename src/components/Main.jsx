import React, { Component } from 'react';

import NavBar from './Navbar';
import Skills from './Skills';
import Footer from './Footer';

import SkewedContainer from 'sc-react';
import { Button, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import Particles from 'react-particles-js';

import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import Bounce from 'react-reveal/Bounce';

import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
	render() {
		return (
			<div>
				<NavBar colour='#272341' fixed='false' />
				<Particles
					params={{
						"particles": {
							"number": {
								"value": 160,
								"density": {
									"enable": false
								}
							},
							"size": {
								"value": 3,
								"random": true,
								"anim": {
									"speed": 4,
									"size_min": 0.3
								}
							},
							"line_linked": {
								"enable": false
							},
							"move": {
								"random": true,
								"speed": 1,
								"direction": "top",
								"out_mode": "out"
							}
						},
						"interactivity": {
							"events": {
								"onhover": {
									"enable": true,
									"mode": "bubble"
								},
								"onclick": {
									"enable": true,
									"mode": "repulse"
								}
							},
							"modes": {
								"bubble": {
									"distance": 250,
									"duration": 2,
									"size": 0,
									"opacity": 0
								},
								"repulse": {
									"distance": 400,
									"duration": 4
								}
							}
						}
					}} />
				<section id='home' style={{ background: '#272341', marginBottom: '0px' }}>
					<div className='intro' style={{ background: '#272341' }}>
						<p>
							<Fade top>
								Hello, I am <span style={{ color: '#a7087f' }}>Ayush</span>
							</Fade>
						</p>
						<h1>
							<Fade bottom>I am a sportsman and a programmer</Fade>
						</h1>
						<p>
							<Flip bottom cascade>
								<a href="#ayush" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
									<Button id='btn' style={{ border: 0 }}>EXPLORE MORE</Button>
								</a>
								<a href="https://blog.ayushkr.me/" target="_blank" style={{ textDecoration: 'none' }} rel="noopener noreferrer">
									<Button id='btn' style={{ border: 0 }}>MY BLOG PAGE</Button>
								</a>
							</Flip>
						</p>
					</div>
				</section>

				<section id='ayush'>
					<SkewedContainer
						style={{
							background: 'linear-gradient(130deg, #560088, #a7087f)',
							color: '#fff'
						}}
						bottom='right'
						noMargin
					>
						<h1 align='center' id='whois'>
							<Fade top>About Me</Fade>
						</h1>
						<div className='container' style={{ textAlign: 'center' }}>
							<div class='row'>
								<div class='col-md-6 col-sm-12'>
									<Image
										id='logo'
										src='https://cdn.discordapp.com/attachments/739002420704706571/752844170208477285/Absolute_Fashion.png'
										rounded
									/>
								</div>
								<div class='col-md-6 col-sm-12' style={{ textAlign: 'left' }}>
									<p id='myself'>
										<Fade>
											Hello I am Ayush Chowdhury. I am a self-taught programmer wanting to learn
											more everyday. My enthusiasm in Coding begun when I was 10 years old. The
											1st language I learnt was BASIC.
										</Fade>
										<br />
										<br />
										<h2>
											{' '}
											<Fade> #Be a developer to aspire another developer </Fade>{' '}
										</h2>
									</p>
								</div>
							</div>
						</div>
					</SkewedContainer>
				</section>
				<div className='jumbotron' style={{ padding: '90px', background: '#fff' }} id='skills'>
					<br />
					<h1 align='center' id='whois'>
						<Bounce left cascade>
							SKILLS
						</Bounce>
					</h1>
					<p align='center' style={{ fontSize: '20px' }}>
						<Skills />
					</p>
				</div>
				<SkewedContainer
					top='left'
					style={{
						background: 'linear-gradient(130deg, #560088, #a7087f)',
						color: '#fff'
					}}
					noMargin
				>
					<div className='container' style={{ paddingTop: '0', textAlign: 'center' }} id='contact'>
						<h1 align='center' id='whois'>
							<Fade big cascade>
								CONTACT ME
							</Fade>
						</h1>
						<br />
						<Fade bottom cascade>
							<p> Wanting to Contact Me? Click on the button below! </p>
							<br />
							<Button
								variant='outline-light'
								onClick={() => window.location.assign('mailto:ayush.chowdhury2004@gmail.com')}
							>
								<FontAwesomeIcon icon={faEnvelope} /> Contact Me
							</Button>
						</Fade>
					</div>
				</SkewedContainer>
				<Footer colour='#333333' />
			</div>
		);
	}
}

export default App;
