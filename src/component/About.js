import React, {useState} from 'react';

export default function About(props) {

let mystyle = {
    color : props.mode === 'dark' ? 'white' : '#042743',
    backgroundColor : props.mode === 'dark' ? 'rgb(36 74 104)' : 'white'
}
  
  return (
    <div>
        <div className="container">
            <h1 className='my-3' style={{color : props.mode === 'dark' ? 'white' : '#042743'}}>About Us</h1>
                <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={mystyle}>
                    # Text Analyzer React App
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={mystyle}>
                    <strong>A lightweight single-page React application</strong> that offers basic yet powerful text manipulation utilities. Built for practicing React concepts like routing, state management, and component composition.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={mystyle}>
                   ✨ Features
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={mystyle}>
                    - 🔠 Convert text to **Uppercase** and **Lowercase** <br/>
                    - 📋 **Copy** text to clipboard <br/>
                    - 🧹 **Clear** entire text input <br/>
                    - 🔢 Count **Words**, **Characters**, and **Estimated Reading Time** <br/>
                    - 🎯 Fully functional **SPA with React Router** <br/>
                    - 📚This is the that Second page includes a simple **Accordion** with 3 toggleable sections <br/>
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={mystyle}>
                    👨‍💻 Developer Info
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={mystyle}>
                          Hi, my name is <strong>Asim Mir</strong>. I’m a React.js and backend developer (MERN stack).  
                          I built this app to practice SPA routing, component design, loading bars, alerts, and real-time text analysis features.  
                          More projects are coming soon!
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false"aria-controls="collapseFour" style={mystyle}>
                        🔧 Tech Stack
                    </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse"  aria-labelledby="headingFour" data-bs-parent="#accordionExample">                              
                    <div className="accordion-body" style={mystyle}>
                        - React.js <br />
                        - React Router DOM <br />
                        - HTML/CSS (basic styling) <br />
                    </div>
                </div>
            </div>

            </div>
        </div>
    </div>
  )
}
