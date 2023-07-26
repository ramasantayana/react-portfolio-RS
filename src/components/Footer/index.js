import React from 'react';

import  './footer.css';
let linkedInIcon = "/Images/linkedinIcon.png";
let gitHubIcon = "/Images/gitHub.png";
let instaIcon = "/Images/insta.png";

export default function Footer() {
  return (
    <div className="footer">
      <h4>Contact Me</h4>
      <p>
        
      
        Email: rama.santayana@uconn.edu
      </p>
      <a href="https://www.linkedin.com/in/ramasantayana1991" target="_blank"> <img className="myImg"  width="50px" height="50px" src={process.env.PUBLIC_URL + linkedInIcon} alt="linkedIn account" /></a>
      <a href="https://github.com/ramasantayana" target="_blank"> <img className="myImg"  width="50px" height="50px" src={process.env.PUBLIC_URL + gitHubIcon} alt="gitHub account" /></a>
      <a href="https://www.linkedin.com/in/ramasantayana1991" target="_blank"> <img className="myImg"  width="50px" height="50px" src={process.env.PUBLIC_URL + instaIcon} alt="insta account" /></a>
    </div>
  )
}
