import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import '../styles/App.css';

class Skills extends Component {
	render() {
		return (
			<>
				<br />
				<Fade left cascade>
					HTML/CSS
				</Fade>
				<div class='progress' style={{ height: '50px' }}>
					<div class='progress-bar bg-primary' style={{ width: '80%' }}></div>
				</div>
				<br></br>

				<Fade left cascade>
					Node.js
				</Fade>
				<div class='progress' style={{ height: '50px' }}>
					<div class='progress-bar bg-success' style={{ width: '73%' }}></div>
				</div>
				<br></br>

				<Fade left cascade>
					Typescript
				</Fade>
				<div class='progress' style={{ height: '50px' }}>
					<div class='progress-bar' style={{ width: '70%', background: '#003bff' }}></div>
				</div>
				<br></br>

				<Fade left cascade>
					React
				</Fade>
				<div class='progress' style={{ height: '50px' }}>
					<div class='progress-bar bg-warning' style={{ width: '65%' }}></div>
				</div>
				<br></br>


				<Fade left cascade>
					Vanilla JS
				</Fade>
				<div class='progress' style={{ height: '50px' }}>
					<div class='progress-bar bg-info' style={{ width: '60%' }}></div>
				</div>
				<br></br>

				<Fade left cascade>
					Python
				</Fade>
				<div class='progress' style={{ height: '50px' }}>
					<div class='progress-bar bg-danger' style={{ width: '50%' }}></div>
				</div>
				<br></br>

				<Fade left cascade>
					Java
				</Fade>
				<div class='progress' style={{ height: '50px' }}>
					<div class='progress-bar bg-secondary' style={{ width: '40%' }}></div>
				</div>
				<br></br>
			</>
		);
	}
}

export default Skills;
