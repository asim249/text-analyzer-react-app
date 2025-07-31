// import './App.css';
import About from './component/About';
import Alert from './component/Alert';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm'
import React, { useState } from 'react'
import Loader from './component/Loader'

import {
  HashRouter as Router,     // yee sirf live karne ka lia hai git hub paa nahi balke internet paa agar koi masla aye routing mee
  Switch,                   // too sirf HashRouter kee jaga BrowserRouter laga  dena hai 
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState();
  const showalert = (message, type) => {
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }

  const toggleMode = (props) => {
    if(mode === 'light'){
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
      showalert("Dark mode has been Enabled", "success");
      document.title = "Dark mode enabled";
      // setInterval(() => {
      //   document.title = "blalaalalallala";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "asim";
      // }, 2000);
    }else{
      setMode("light");
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black";
      showalert("Light mode has been Enabled", "success");
      document.title = "Light mode enabled";
    }

  }
  
  return (
    <>
      {/* <typewritereffect words={['Welcome to My Website!', 'Learn React with Harry!', 'Follow me on GitHub!']} /> */}

{/* <Navbar title="Navbar2" Home="Homee" asim="Asim" asim1 = "Asim Qamar" /> */}

{/* <Navbar /> */}
{/* <TextForm showalert={showalert} heading="Enter the data to analyze" /> */}
{/* <Navbar title="Text Utils" mode={mode} toggleMode = {toggleMode}/>
<Alert alert ={alert}/> */}
{/* <About/> */}
  <Router>
    <Loader/>
    <Navbar title="Text Utils" mode={mode} toggleMode = {toggleMode}/>
    <Alert alert ={alert}/>
      <Switch>
        <Route exact path="/about">
          <About mode={mode}/>
        </Route>
        <Route  path="/">
          <TextForm showalert={showalert} heading="Enter the data to analyze" />
        </Route>
      </Switch>
</Router>
    </>
  );
}

export default App; 
