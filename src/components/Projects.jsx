import React from 'react';
import projects from '../constants/projects';
import Fade from 'react-reveal/Fade';

class Card extends React.Component {
	render() {
		return (
			<div className="projects">
					<div class="row">
						{projects.map((m, i) => {
							return (
								<div className="container-fluid">
									<div class="col-sm">
										{i % 2 === 0 ? (<>
											<Fade left>
												<div class="col-12 mt-3">
													<div class="card text-white mb-3 shadow-lg p-3 bg-white rounded" style={{ width: '750px', float: 'left' }}>
														<div class="card-horizontal">
															<div class="img-square-wrapper">
																<img style={{ width: '250px' }} src={m.icon} alt="Card image cap" />
															</div>
															<div class="card-body" style={{ color: 'black' }}>
																<h4 class="card-title">{m.name}</h4>
																<p class="card-text" id="myself">{m.info}</p>
																{m.source ? (<><a href={m.source} className="btn btn-primary">Code</a><br /></>) : ''}
																{m.live ? (<><a href={m.live} className="btn btn-primary">Live</a><br /></>) : ''}
															</div>

														</div>
													</div>
												</div>
											</Fade>
										</>) : (<>
											<Fade right>
											<div class="col-12 mt-3">
													<div class="card text-white mb-3 shadow-lg p-3 bg-white rounded" style={{ width: '750px', float: 'right' }}>
														<div class="card-horizontal">
															<div class="img-square-wrapper">
																<img style={{ width: '250px' }} src={m.icon} alt="Card image cap" />
															</div>
															<div class="card-body" style={{ color: 'black' }}>
																<h4 class="card-title">{m.name}</h4>
																<p class="card-text" id="myself">{m.info}</p>
																{m.source ? (<><a href={m.source} className="btn btn-primary">Code</a><br /></>) : ''}
																{m.live ? (<><a href={m.live} className="btn btn-primary">Live</a><br /></>) : ''}
															</div>

														</div>
													</div>
												</div>
											</Fade>
										</>)}
									</div>
								</div>
							);
						})}
					</div>
			</div>
		)
	}
}

export default Card;
