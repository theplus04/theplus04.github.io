import React, { Component } from 'react';
import Markdown from 'react-markdown';
import Prism from 'prismjs';

import NavBar from './Navbar';
import Footer from './Footer';
import Loader from './Loader';

import 'prism-themes/themes/prism-dracula.css';
import '../styles/Blogs.css';

const blogs = require('../blogs/blogs');

export const CatalogView = () => {
	return (
		<div style={{ background: 'linear-gradient(to right, #00c6ff, #0072ff)' }}>
			<NavBar />
			<div className='main'>
				<h1>My Blogs</h1>
				<ul className='cards'>
					{blogs.map((m) => {
						return (
							<li className='cards_item'>
								<div className='card'>
									<div className='card_image'>
										<img src={m.image} alt="" />
									</div>
									<div className='card_content'>
										<h2 className='card_title'>{m.title}</h2>
										<p className='card_text'>{m.description}</p>
										<button
											className='btn card_btn'
											onClick={() => window.location.assign(`/blog/${m.path}`)}
										>
											Read More
										</button>
									</div>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
			<Footer />
		</div>
	);
};

export class ProductView extends Component {
	constructor() {
		super();
		this.state = {
			markdown: null,
			isLoaded: false
		};
	}

	componentDidMount() {
		try {
			const file = require(`../blogs/${this.props.match.params.id}.md`);
			Prism.highlightAll();
			fetch(file)
				.then((response) => {
					return response.text();
				})
				.then((text) => {
					this.setState({
						markdown: text,
						isLoaded: true
					});
				});
		} catch (e) {
			this.setState({
				markdown: `
          # Blog Not Found
          # [Return To Blogs Page](/blogs)     
        `,
				isLoaded: true
			});
		}
	}

	componentDidUpdate() {
		Prism.highlightAll();
	}

	render() {
		const { markdown, isLoaded } = this.state;
		if (!isLoaded) {
			return <Loader />;
		} else {
			return (
				<>
					<NavBar />
					<div className='blog'>
						<Markdown source={markdown} />
					</div>
					<Footer />
				</>
			);
		}
	}
}
