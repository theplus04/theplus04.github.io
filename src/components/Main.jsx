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
										src='https://cdn.discordapp.com/avatars/539770184236269568/9c0ac9c7eeccb54cc651c28c4f3fbaca.png?size=1024'
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
				<div className='container-fluid' style={{ background: 'wheat', paddingBottom: 100 }}>
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
							<Markdown source={stripIndents`
							[![Discord](https://img.shields.io/badge/Discord-Ayush%233192-B1A7F0?style=for-the-badge&logo=discord&link=https://discord.gg/sY57ftY)](https://discord.gg/sY57ftY) &nbsp; [![Mail](https://img.shields.io/badge/Mail-ayush.chowdhury2004%40gmail.com-B1A7F0?style=for-the-badge&logo=gmail&link=mailto:ayush.chowdhury2004@gmail.com)](mailto:ayush.chowdhury2004@gmail.com)

							[![Insta](https://img.shields.io/badge/Instagram-ayushkr.me-B1A7F0?style=for-the-badge&logo=instagram&link=https://www.instagram.com/ayushkr.me)](https://www.instagram.com/ayushkr.me) &nbsp; [![Facebook](https://img.shields.io/badge/Facebook-Ayush%20Chowdhury-B1A7F0?style=for-the-badge&logo=facebook&link=https://www.facebook.com/ayushkr004)](https://www.facebook.com/ayushkr004)
							`} />
						</Fade>
					</div>
				</SkewedContainer>
				<Footer colour='#333333' />
			</div>
		);
	}
}

export default App;
