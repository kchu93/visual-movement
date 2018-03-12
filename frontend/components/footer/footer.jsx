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

        <h2 className="created-by-tag">Created by Kevin Chu</h2>
      </div>
    );
  }
}


export default Footer;
