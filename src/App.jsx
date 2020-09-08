import React, { Component } from "react";
import SkewedContainer from "sc-react";
import "./App.css";
import { Jumbotron, Button, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHeart, faCode } from '@fortawesome/free-regular-svg-icons';

class App extends Component {
  render() {
    return (
      <div>
        <section id="hero">
          <Jumbotron className="intro" fluid style={{ background: '#fff' }}>
            <p>
              Hello, I am <span style={{ color: "#a7087f" }}>Ayush CH</span>
            </p>
            <h1>I am a sportsman and a programmer</h1>
            <p>
              <Button id="btn"
                style={{ border: 0 }}
                onClick={() => window.location.assign("#ayush")}
              >
                Explore More
              </Button>
            </p>
          </Jumbotron>
        </section>

        <section id="ayush">
          <SkewedContainer
            style={{
              background: "linear-gradient(130deg, #560088, #a7087f)",
              color: "#fff"
            }}
            bottom="right"
            noMargin
          >
            <h1 align="center" id="whois">
              WHO IS AYUSH CH?
            </h1>
            <div className="container" style={{ textAlign: "center" }}>
              <div class="row">
                <div class="col-sm-4">
                  <Image
                    src="https://cdn.discordapp.com/attachments/739002420704706571/752844170208477285/Absolute_Fashion.png"
                    rounded
                  />
                </div>
                <div class="col-sm-8">
                  <p id="myself">
                    Hello I am Ayush Chowdhury. I am a self-taught programmer
                    wanting to learn more everyday. My enthusiasm in Coding
                    begun when I was 10 years old. The 1st language I learnt was
                    BASIC.
                    <br />
                    <br />
                    <h1> #Be a developer to aspire another developer </h1>
                  </p>
                </div>
              </div>
            </div>
          </SkewedContainer>
        </section>
        <div className="jumbotron" style={{ padding: "90px" }}>
          <br />
          <h1 align="center" id="whois">
            SKILLS
          </h1>
          <p align="center" style={{ fontSize: "20px" }}>
            COMING SOON
          </p>
        </div>
        <SkewedContainer
          top="left"
          style={{
            background: "linear-gradient(130deg, #560088, #a7087f)",
            color: "#fff"
          }}
          noMargin
        >
          <div className="container" style={{ paddingTop: "0", textAlign: 'center' }}>
            <h1 align="center" id="whois">
              CONTACT ME
            </h1><br />
            <p> Wanting to Contact Me? Click on the button below! </p><br />
            <Button variant="outline-light"
              onClick={() => window.location.assign("#about")}
            >
              <FontAwesomeIcon icon={faEnvelope} /> Contact Me
            </Button>
          </div>
        </SkewedContainer>
          <div className="jumbotron" style={{ background: '#333333', margin: '0px', width: '100%', borderRadius: '0', color:'white', textAlign: 'center', wordSpacing: '5px' }}>
            {'</>'}{" "} with <FontAwesomeIcon icon={faHeart} /> by Ayush CH
          </div>
      </div>
    );
  }
}

export default App;
