import React, { Component } from 'react';

import NavBar from './Navbar';
import Skills from './Skills';
import Projects from './Projects'
import Footer from './Footer';

import SkewedContainer from 'sc-react';
import { Button, Image } from 'react-bootstrap';
import Particles from 'react-particles-js';
import Markdown from 'react-markdown';

import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import Bounce from 'react-reveal/Bounce';

import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { stripIndents } from 'common-tags';
import pfp from '../constants/pfp.jpg';

class App extends Component {
	render() {
		return (
			<div>
				<NavBar />
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
						<Fade top>
							<p>
								Hello, I am <span style={{ color: '#a7087f' }}>Ayush</span>
							</p>
						</Fade>
						<h3>
							<Fade bottom># Be a developer to aspire another developer</Fade>
						</h3>
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
						<div className='container-fluid' style={{ textAlign: 'center', padding: 40 }}>
							<div className='row'>
								<div className='col-sm'>
									<Image
										id='logo'
										src={pfp}
										rounded
									/> <br /> <br /> <br />
									<p id='myself'>
										<Fade>
											<p>
												Hello, I am Ayush Chowdhury.
												I am a self-taught programmer, web developer, sportsman, comedian and a mimicry artist upto some extent.😅
												If you are wanting to chat with me, hire me or work together please feel free to <a href="#contact" style={{ textDecoration: 'none', color: 'RoyalBlue', fontWeight: 'bolder' }}>contact me</a> 😉
											</p>
										</Fade>
										<Markdown source={stripIndents`
										🌐 Location - Darjeeling, WB, India.\n
										🎂 DOB - 30th Oct, 2006\n
										👤 Profession - Student
				
										![Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=itsayushch&theme=calm&layout=compact)
										`} />
									</p>
								</div>
								<div className='col-sm' style={{ textAlign: 'left' }}>
									<Bounce left cascade>
										<h1 align='center' id='whois'>
											<Bounce left cascade>
												SKILLS
											</Bounce>
										</h1>
									</Bounce>
									<Skills />
								</div>
							</div>
						</div>
					</SkewedContainer>
				</section>
				<div className='container-fluid' id="projects" style={{ background: 'pink', paddingBottom: 100 }}>
					<br />
					<h1 align='center' id='whois'>
						<Bounce left cascade>
							PROJECTS
						</Bounce>
						<br />
					</h1>
					<Projects />
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
							<span role="img" aria-label="mail">📧</span><Fade big cascade>
								CONTACT ME
						</Fade>
						</h1>
						<br />
						<Fade bottom cascade>
							<Button style={{ width: '50%' }} variant="outline-light"
								onClick={() => window.open('mailto:ayush.chowdhury2004@gmail.com', '_blank')}
							>
								<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="mail-bulk" class="svg-inline--fa fa-mail-bulk fa-w-18 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M160 448c-25.6 0-51.2-22.4-64-32-64-44.8-83.2-60.8-96-70.4V480c0 17.67 14.33 32 32 32h256c17.67 0 32-14.33 32-32V345.6c-12.8 9.6-32 25.6-96 70.4-12.8 9.6-38.4 32-64 32zm128-192H32c-17.67 0-32 14.33-32 32v16c25.6 19.2 22.4 19.2 115.2 86.4 9.6 6.4 28.8 25.6 44.8 25.6s35.2-19.2 44.8-22.4c92.8-67.2 89.6-67.2 115.2-86.4V288c0-17.67-14.33-32-32-32zm256-96H224c-17.67 0-32 14.33-32 32v32h96c33.21 0 60.59 25.42 63.71 57.82l.29-.22V416h192c17.67 0 32-14.33 32-32V192c0-17.67-14.33-32-32-32zm-32 128h-64v-64h64v64zm-352-96c0-35.29 28.71-64 64-64h224V32c0-17.67-14.33-32-32-32H96C78.33 0 64 14.33 64 32v192h96v-32z"></path></svg>
								{' '}Email
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
