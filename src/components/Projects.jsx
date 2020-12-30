import React from 'react';
import projects from '../constants/projects';
import Fade from 'react-reveal/Fade';

class Card extends React.Component {
	render() {
		return (
			<div class="container">
				{projects.map((m, i) => {
					return (
						<>
							{i % 2 === 0 ?
								(<Fade left>
									<div>
										<div class="shadow-lg p-3 mb-5" style={{ borderRadius: 10, background: '#393266', color: 'wheat' }}>
											<div class="row no-gutters">
												<div class="col-md-4">
													<center>
														<img src={m.icon} style={{ borderRadius: '50%', width: '80%' }} class="card-img img-fluid" alt="..." />
													</center>
												</div>
												<div class="col-md-8">
													<div class="card-body" style={{
														textAlign: 'center',
														justifyContent: 'center',
														display: 'flex',
														flexDirection: 'column'
													}}>
														<h1 class="card-title">{m.name}</h1>
														<p class="card-text">{m.info}</p>
														<p /><p />
														{m.source ? (<> <a href={m.source} target="_blank" rel="noopener noreferrer" class="btn btn-outline-primary">Source Code</a> <p /></>) : ''}
														{m.live ? (<> <a href={m.live} target="_blank" rel="noopener noreferrer" class="btn btn-outline-primary">See Live</a> <p /></>) : ''}
													</div>
												</div>
											</div>
										</div>
										<br />
									</div>
								</Fade>)
								:
								(
									<Fade right>
										<div>
											<div class="shadow-lg p-3 mb-5" style={{ borderRadius: 10, background: '#393266', color: 'wheat' }}>
												<div class="row no-gutters">
													<div class="col-md-4">
														<center>
															<img src={m.icon} style={{ borderRadius: '50%', width: '80%' }} class="card-img img-fluid" alt="..." />
														</center>
													</div>
													<div class="col-md-8">
														<div class="card-body" style={{
															textAlign: 'center',
															justifyContent: 'center',
															display: 'flex',
															flexDirection: 'column'
														}}>
															<h1 class="card-title">{m.name}</h1>
															<p class="card-text">{m.info}</p>
															<p /><p />
															{m.source ? (<> <a href={m.source} target="_blank" rel="noopener noreferrer" class="btn btn-outline-info">Source Code</a> <p /></>) : ''}
															{m.live ? (<> <a href={m.live} target="_blank" rel="noopener noreferrer" class="btn btn-outline-info">See Live</a> <p /></>) : ''}
														</div>
													</div>
												</div>
											</div>
											<br />
										</div>
									</Fade>
								)
							}
						</>
					);
				})}
			</div>
		)
	}
}

export default Card;
