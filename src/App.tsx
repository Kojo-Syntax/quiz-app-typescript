import React from 'react';
import './App.css';
import PatternBackground from "./assets/pattern-background-desktop-light.svg";
import HtmlLogo from "./assets/icon-html.svg";
import CssLogo from "./assets/icon-css.svg";
import JsLogo from "./assets/icon-js.svg";
import accessLogo from "./assets/icon-accessibility.svg"


function App() {
  return (
    <body>
      <section id='home' className='home'>
        <div className='main'>
          <div className='text'>
              <div className='headers'>
                <h3>Welcome to the</h3>
                <h2>Frontend Quiz!</h2>
              </div>
              
            
            <p>Pick a subject to get started!</p>
          </div>
          <div className='nav'>
                <a href="#">
                  <img src={HtmlLogo} alt="Html Logo" />
                  HTML
                </a>
                <a href="#">
                  <img src={CssLogo} alt="Css Logo" />
                  CSS
                </a>
                <a href="#">
                  <img src={JsLogo} alt="Javascript Logo" />
                  Javascript
                </a>
                <a href="#">
                  <img src={accessLogo} alt="Accessibility Logo" />
                  Accessibility
                </a>
            </div>
          </div>       
          
      </section>
    </body>
  );
}

export default App;
