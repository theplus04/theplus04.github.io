import React, { Component } from 'react';
import Markdown from 'react-markdown';
import './Blogs.css';
import "prism-themes/themes/prism-dracula.css";
import Prism from 'prismjs';
import { Card, Button, CardGroup, CardDeck } from 'react-bootstrap';

import NavBar from './Navbar';
import Footer from './Footer';

const blogs = require('../blogs/blogs');

export const CatalogView = () => {
  return (
    <>
      <NavBar />
      <div className="blog">
        <h1>Blogs Written By Me</h1>
        <CardDeck>
          <CardGroup>
            {blogs.map((m) => {
              return (
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={m.image} />
                  <Card.Body>
                    <Card.Title><h2>{m.title}</h2></Card.Title>
                    <Card.Text>
                      <p>{m.description}</p>
                    </Card.Text>
                    <Button variant="primary" onClick={() => window.location.assign(`/blog/${m.path}`)}>Read More</Button>
                  </Card.Body>
                </Card>
              );
            })}
          </CardGroup>
        </CardDeck>
      </div>
      <Footer />
    </>
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
