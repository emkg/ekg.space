import React, { Component } from 'react';
import '../css/projectList.css';

export default class ProjectList extends Component {
  render() {
    return (
      <div className="ProjectList">
          <ul className="list-unstyled list-inline">
              <br/>
              <br/>
              <li>
                <a href="passages.html">
                  Project 1: Passages
                </a>
              </li>
              <br/>
              <br/>
              <li>
                <a href="TUG_Spatial-Analysis.html">
                Project 2: Spatial Analysis of a Massive Multiplayer Online Game
                </a>
              </li>
          </ul>
      </div>
    );
  }
}
