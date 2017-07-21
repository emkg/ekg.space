import React, { Component } from 'react';
import twitter from '../img/twitter.png'
import linkedin from '../img/linkedin.png'
import github from '../img/github.png'
import '../css/socialLinks.css'


export default class SocialLinks extends Component {
  render() {
    return (
      <div className="SocialLinks">
        <a href="http://www.twitter.com/em_k_g" target="_blank">
        <img src={twitter} alt="twitter"/>
        </a>
        <a href="https://github.com/emkg" target="_blank">
          <img src={github} alt="github" />
        </a>
        <a href="http://www.linkedin.com/in/emilykgrimes" target="_blank">
          <img src={linkedin} alt="linkedin"/>
        </a>
      </div>
    );
  }
}
