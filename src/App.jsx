import React, { Component } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import SkewedContainer from "sc-react";
import { Button, Image } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faCode, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { faDiscord, faGithub, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

import Particles from 'react-particles-js';

import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import Bounce from 'react-reveal/Bounce';
import Roll from 'react-reveal/Roll';

import Skills from './Skills';

class App extends Component {
  render() {
    return (
      <div>
        <Particles
          params={{
            "particles": {
              "number": {
                "value": 50
              },
              "size": {
                "value": 3
              }
            },
            "interactivity": {
              "events": {
                "onhover": {
                  "enable": true,
                  "mode": "repulse"
                }
              }
            }
          }} />
        <section id="home" style={{ background: '#272341', marginBottom: '0px' }}>
          <div className="intro" style={{ background: '#272341' }}>
            <p>
              <Fade top cascade>
                Hello, I am <span style={{ color: "#a7087f" }}>Ayush CH</span>
              </Fade>
            </p>
            <h1><Fade bottom cascade>I am a sportsman and a programmer</Fade></h1>
            <p>
              <Flip bottom cascade>
                <Button id="btn"
                  style={{ border: 0 }}
                  onClick={() => window.location.assign("#ayush")}
                >
                  Explore More
              </Button>
              </Flip>
            </p>
          </div>
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
              <Bounce left cascade>
                WHO IS AYUSH CH?
              </Bounce>
            </h1>
            <div className="container" style={{ textAlign: "center" }}>
              <div class="row">
                <div class="col-sm-4">
                  <Fade left cascade>

                    <Image
                      src="https://cdn.discordapp.com/attachments/739002420704706571/752844170208477285/Absolute_Fashion.png"
                      rounded
                    />
                  </Fade>
                </div>
                <div class="col-sm-8">
                  <p id="myself">
                    <Roll top cascade>
                      Hello I am Ayush Chowdhury. I am a self-taught programmer
                      wanting to learn more everyday. My enthusiasm in Coding
                      begun when I was 10 years old. The 1st language I learnt was
                      BASIC.
                    </Roll>
                    <br />
                    <br />
                    <h2> <Roll bottom cascade> # Be a developer to aspire another developer </Roll> </h2>
                  </p>
                </div>
              </div>
            </div>
          </SkewedContainer>
        </section>
        <div className="jumbotron" style={{ padding: "90px", background: '#fff' }} id="skills">
          <br />
          <h1 align="center" id="whois">
            <Bounce left cascade>
              SKILLS
            </Bounce>
          </h1>
          <p align="center" style={{ fontSize: "20px" }}>

            <Skills />

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
              <Fade big cascade>
                CONTACT ME
              </Fade>
            </h1><br />
            <Fade bottom cascade>
              <p> Wanting to Contact Me? Click on the button below! </p><br />
              <Button variant="outline-light"
                onClick={() => window.location.assign('mailto:ayush.chowdhury2004@gmail.com')}
              >
                <FontAwesomeIcon icon={faEnvelope} /> Contact Me
            </Button>

            </Fade>
          </div>
        </SkewedContainer>
        <div className="jumbotron footer" style={{ background: '#333333', margin: '0px', width: '100%', borderRadius: '0', color: 'white', textAlign: 'center', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
          <center><FontAwesomeIcon icon={faAngleUp} style={{ fontSize: '50px' }} id="up" onClick={() => window.location.assign('#home')} /></center><br />
          <div className="social-links" style={{ fontSize: '35px', textAlign: 'center' }}>
            <a style={{ textDecoration: 'none', color: 'white' }} href="https://discord.com/invite/sY57ftY"><FontAwesomeIcon icon={faDiscord} id="ic" />&nbsp;</a>
            <a style={{ textDecoration: 'none', color: 'white' }} href="https://github.com/theplus04"><FontAwesomeIcon icon={faGithub} id="ic" />&nbsp;</a>
            <a style={{ textDecoration: 'none', color: 'white' }} href="https://www.instagram.com/ayush_ch04"><FontAwesomeIcon icon={faInstagram} id="ic" />&nbsp;</a>
            <a style={{ textDecoration: 'none', color: 'white' }} href="https://www.facebook.com/ayushkr004"><FontAwesomeIcon icon={faFacebook} id="ic" /></a>          
          </div>
          <hr />

          <Zoom left cascade>
            <span className="footer-text">
              <FontAwesomeIcon icon={faCode} /> with <FontAwesomeIcon icon={faHeart} /> by Ayush CH
              </span>
          </Zoom>
        </div>
      </div>
    );
  }
}

export default App;


