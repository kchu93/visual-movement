import React from 'react';
import { Link } from 'react-router-dom';

class Homepage extends React.Component {

  render () {
    return (
      <div className="Homepage">
        <div className="section1">
          <a href="/#/signup">
            <div className="section1-link">
            </div>
          </a>
        </div>

        <div className="section2">
          <a href="/#/login">
            <div className="section2-link"></div>
          </a>
        </div>

        <div className="section3">
          <a href="/#/login">
            <div className="section3-link"></div>
          </a>
        </div>
      </div>
    );
  }
}

export default Homepage;
