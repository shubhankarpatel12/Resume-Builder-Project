import React from 'react';
import './style.css';

const Resume = ({ data }) => {
  const renderProgressBars = (labels, values) => {
    const labelsArray = labels.split(',').map(label => label.trim());
    const valuesArray = values.split(',').map(value => value.trim());
    return labelsArray.map((label, index) => (
      <div key={index} className="box">
        <h4>{label}</h4>
        <div className="percente">
          <div style={{ width: `${valuesArray[index]}%` }}></div>
        </div>
      </div>
    ));
  };

  const handlePrint = () => {
    const printButton = document.getElementById('printButton');
    printButton.style.display = 'none';
    window.print();
    printButton.style.display = 'block';
  };

  return (
    <div className="main">
      <div className="left">
        <div className="profilebox">
          <div className="imgbx">
            <img src={data.photo || '/Ankit image.jpg'} alt="Profile" id="pimage" />
          </div>
          <h2>{data.name} <br /> <span>{data.title}</span></h2>
        </div>
        <div className="contact">
          <h3 className="title">Contact Info</h3>
          <ul>
            <li>
              <span className="icon"><i className="fa fa-phone" aria-hidden="true"></i></span>
              <span className="text">{data.phone}</span>
            </li>
            <li>
              <span className="icon"><i className="fa fa-envelope" aria-hidden="true"></i></span>
              <span className="text">{data.email}</span>
            </li>
            <li>
              <span className="icon"><i className="fa fa-linkedin" aria-hidden="true"></i></span>
              <span className="text">{data.linkedin}</span>
            </li>
            <li>
              <span className="icon"><i className="fa fa-map" aria-hidden="true"></i></span>
              <span className="text">{data.address}</span>
            </li>
          </ul>
        </div>
        <div className="contact education">
          <h3 className="title">Education</h3>
          <p>{data.education}</p>
        </div>
        <div className="contact languages">
          <h3 className="title">Languages</h3>
          {renderProgressBars(data.languages, data.languagesProficiency)}
        </div>
        <div className="contact programming-languages">
          <h3 className="title">Programming Languages</h3>
          {renderProgressBars(data.programmingLanguages, data.programmingLanguagesProficiency)}
        </div>
      </div>
      <div className="right">
        <div className="about">
          <h2 className="title2">Profile</h2>
          <p>{data.about}</p>
        </div>
        <div className="about">
          <h2 className="title2">Training</h2>
          <p>{data.training}</p>
        </div>
        <div className="about skills">
          <h2 className="title2">Skills</h2>
          <p>{data.skills}</p>
        </div>
        <div className="about interest">
          <h2 className="title2">Interests</h2>
          <p>{data.interests}</p>
        </div>
        <button id="printButton" onClick={handlePrint}>Print Resume</button>
      </div>
    </div>
  );
};

export default Resume;
