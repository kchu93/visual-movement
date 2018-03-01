import React from 'react';
import { Link } from 'react-router-dom';

class Homepage extends React.Component {

  render () {
    return (
      <div className="Homepage">
        <div className="section1">
          <a href="/#/signup">
            <div className="section1-link">
              <img className="left-side-image" src="https://i.imgur.com/vXydIFI.png"/>
            </div>
          </a>

          <div className="section2">
            <a href="/#/signup">
              <div className="section2-link">
                <img className="right-side-image" src="https://i.imgur.com/Kajf7x5.png"/>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
