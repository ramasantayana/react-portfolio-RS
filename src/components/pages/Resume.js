import React from 'react';

export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <p> Please find <a target="_blank" rel="noopener noreferrer" className="tab4" href={process.env.PUBLIC_URL + "/images/Rama Santayana Resume 031821.pdf"}>  My resume</a> Here </p>
      <p>
        Proficiencies: HTML, CSS, Javascript
      </p>
    </div>
  );
}
