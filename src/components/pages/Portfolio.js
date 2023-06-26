import React from 'react';
import "./portfiolio.css";
let project1Picture = "/images/Password Generator.png";
let project2Picture = "/images/WorkDay Scheduler.png";
let project3Picture = "/images/JS Bootcamp Code Quiz.png";
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
        <a target="_blank" href="https://ramasantayana.github.io/Javascript-Password-Generator-By-RS/"> <img height = "500px" src={process.env.PUBLIC_URL + project1Picture} className=" float-left myPic" alt="Rama Santyana Head Shot" /></a>
      <p>For the code click <a target="_blank" href="https://github.com/ramasantayana/Javascript-Password-Generator-By-RS">here</a></p>
      </div>

      <div class = "project"> 
        <h2>Project 2</h2>
        <a target="_blank" href="https://ramasantayana.github.io/Work-Day-Scheduler-RS/"> <img height = "500px" src={process.env.PUBLIC_URL + project2Picture} className=" float-left myPic" alt="Rama Santyana Head Shot" /></a>
      <p>For the code click <a target="_blank" href="https://github.com/ramasantayana/Work-Day-Scheduler-RS">here</a></p>
      </div>

      <div class = "project"> 
        <h2>Project 3</h2>
      <img height = "500px" src={process.env.PUBLIC_URL + project3Picture} className=" float-left myPic" alt="Rama Santyana Head Shot" />
      <p>For the code click <a target="_blank" href="https://github.com/ramasantayana/Work-Day-Scheduler-RS">here</a></p>
      </div>

      <img height = "500px" src={process.env.PUBLIC_URL + project2Picture} className=" float-left myPic" alt="Rama Santyana Head Shot" />
      <img height = "500px" src={process.env.PUBLIC_URL + project2Picture} className=" float-left myPic" alt="Rama Santyana Head Shot" />
      <img height = "500px" src={process.env.PUBLIC_URL + project2Picture} className=" float-left myPic" alt="Rama Santyana Head Shot" />
    </div>
  );
}
