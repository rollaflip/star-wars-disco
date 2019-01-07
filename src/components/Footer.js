import React, { Component } from 'react';
import '../Footer.css';

class Footer extends Component {

  linkHandler =(e) =>{

  }
  render() {
    return (
      <div className="footer">
        <span className='foot-links' onClick={()=> window.open("https://github.com/rollaflip/star-wars-disco", "_blank")}>{' '}<i className="fab fa-github"></i>rollaflip</span>
{' '}
        <span className='foot-links' onClick={()=> window.open("https://www.linkedin.com/in/ianknepper/", "_blank")}><i className="fab fa-linkedin-in" />ianKnepper</span>


      </div>
    );
  }
}

export default Footer;
