import React from 'react';
let myPicture = "/images/FB0E4CA2-7EE0-4857-B78A-70FD6E81963C.jpg"
export default function AboutMe() {
  return (
    <div>
      <h1>About Me</h1>
      <img height = "150px" src={process.env.PUBLIC_URL + myPicture} className=" float-left myPic" alt="Rama Santyana Head Shot" />
      <p>
        My name is Rama Santayana, and I am an accounting professional hoping to transition into the field of Software Development.
      </p>
    </div>
  );
}
