import React from 'react';
import "./portfiolio.css"
let myPicture = "/images/FB0E4CA2-7EE0-4857-B78A-70FD6E81963C.jpg"
export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <p>
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
        Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
        mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
        lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
        imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
        in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
      </p>
      <div class = "project"> 
        <h2>Project 1</h2>
      <img height = "500px" src={process.env.PUBLIC_URL + myPicture} className=" float-left myPic" alt="Rama Santyana Head Shot" />
      <p>For the code click <a href="git hub link for first project">here</a></p>
      </div>
      
      <img height = "500px" src={process.env.PUBLIC_URL + myPicture} className=" float-left myPic" alt="Rama Santyana Head Shot" />
      <img height = "500px" src={process.env.PUBLIC_URL + myPicture} className=" float-left myPic" alt="Rama Santyana Head Shot" />
      <img height = "500px" src={process.env.PUBLIC_URL + myPicture} className=" float-left myPic" alt="Rama Santyana Head Shot" />
      <img height = "500px" src={process.env.PUBLIC_URL + myPicture} className=" float-left myPic" alt="Rama Santyana Head Shot" />
      <img height = "500px" src={process.env.PUBLIC_URL + myPicture} className=" float-left myPic" alt="Rama Santyana Head Shot" />
    </div>
  );
}
