import React from 'react';

class Footer extends React.Component {
  render(){
    return (
      <div className="footer">
        <div className="footer-icons">
          <a target="_blank" href="https://github.com/kchu93">
            <i class="fab fa-github"></i>
          </a>

          <a target="_blank" href="https://www.linkedin.com/in/kchu93/">
            <i class="fab fa-linkedin"></i>
          </a>
        </div>

        <div className="footer-name-container">
        <h2 className="created-by-text">Created by<h2 className="created-by-text-name">Kevin Chu</h2></h2>
        </div>
      </div>
    );
  }
}


export default Footer;
