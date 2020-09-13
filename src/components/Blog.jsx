import React, { Component } from 'react';
import Markdown from 'react-markdown';
import './Blogs.css';
import "prism-themes/themes/prism-dracula.css";
import Prism from 'prismjs';

import NavBar from './Navbar';
import Footer from './Footer';

const blogs = require('../blogs/blogs');

export const CatalogView = () => {
  return (
    <div style={{ background: 'linear-gradient(to right, #00c6ff, #0072ff)'}}>
      <NavBar />
      <div className="main">
        <h1>My Blogs</h1>
        <ul className="cards">
          {blogs.map(m => {
            return (
              <li className="cards_item">
                <div className="card">
                  <div className="card_image"><img src={m.image} /></div>
                  <div className="card_content">
                    <h2 className="card_title">{m.title}</h2>
                    <p className="card_text">{m.description}</p>
                    <button className="btn card_btn" onClick={() => window.location.assign(`/blog/${m.path}`)}>Read More</button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <Footer />
    </div>
  )
}


export class ProductView extends Component {
  constructor() {
    super();
    this.state = {
      markdown: null
    }
  }

  componentDidMount() {
    try {
      const file = require(`../blogs/${this.props.match.params.id}.md`);
      Prism.highlightAll();
      fetch(file)
        .then(response => {
          return response.text();
        }).then(text => {
          this.setState({
            markdown: text
          });
        });
    } catch (e) {
      this.setState({
        markdown: `
# Blog Not Found
# [Return To Blogs Page](/blogs)     
` })
    }
  }

  componentDidUpdate() {
    Prism.highlightAll();
  }

  render() {
    return (
      <>
        <NavBar />
        <div className="blog">
          <Markdown source={this.state.markdown} />
        </div>
        <Footer />
      </>
    )
  }
}
