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
							{i % 2 == 0 ?
								(<Fade left>
									<div>
										<div class="shadow-lg p-3 mb-5 bg-white rounded">
											<div class="row no-gutters">
												<div class="col-md-4">
													<img src={m.icon} class="card-img" alt="..." />
												</div>
												<div class="col-md-8">
													<div class="card-body" style={{ paddingTop: '10%' }}>
														<h1 class="card-title">{m.name}</h1>
														<p class="card-text">{m.info}</p>
														{m.source ? (<> <a href={m.source} target="_blank" class="btn btn-outline-primary">Source Code</a> <br /></>) : ''}
														{m.live ? (<> <a href={m.live} target="_blank" class="btn btn-outline-primary">See Live</a> <br /></>) : ''}
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
											<div class="shadow-lg p-3 mb-5 bg-white rounded">
												<div class="row no-gutters">
													<div class="col-md-4">
														<img src={m.icon} class="card-img" alt="..." style={{
															width: '90%',
															height: '100%'
														}} />
													</div>
													<div class="col-md-8">
														<div class="card-body" style={{ paddingTop: '10%' }}>
															<h1 class="card-title">{m.name}</h1>
															<p class="card-text">{m.info}</p>
															{m.source ? (<> <a href={m.source} target="_blank" class="btn btn-outline-primary">Source Code</a> <br /></>) : ''}
															{m.live ? (<> <a href={m.live} target="_blank" class="btn btn-outline-primary">See Live</a> <br /></>) : ''}
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
