import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faDiscord, faGithub, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Zoom from 'react-reveal/Zoom';

class Footer extends Component {
    render() {
        return (
            <>
                <div className="jumbotron footer" style={{ background: this.props.colour ? this.props.colour : '#272341', margin: '0px', width: '100%', borderRadius: '0', color: 'white', textAlign: 'center', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
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
            </>
        )
    }
}

export default Footer;