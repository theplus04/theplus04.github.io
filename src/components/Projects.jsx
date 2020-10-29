import React from 'react';
import projects from '../constants/projects';

class Card extends React.Component {
	render() {
		return (
			<div class="container">
				{projects.map((m, i) => {
					return (
						<>
							<div class="card-group vgr-cards">
								<div class="card">
									<div class="card-img-body">
										<img class="card-img-top" src={m.icon} alt="Card image cap" style={{  width: '100%', height: '100%' }} />
									</div>
									<div class="card-body" style={{ padding: 40 }}>
										<h4 class="card-title">{m.name}</h4>
										<p class="card-text">
											{m.info}
										</p>
										{m.source ? (<> <a href={m.source} target="_blank" class="btn btn-outline-primary">Source Code</a> <br /></>) : '' }
										{m.live ? (<> <a href={m.live} target="_blank" class="btn btn-outline-primary">See Live</a> <br /></>) : '' }
									</div>
								</div>
							</div>
							<br />
						</>
					);
				})}
			</div>
		)
	}
}

export default Card;
