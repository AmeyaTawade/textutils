import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert ";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light"); // whether dark mode is enabled or not

  // const [mode2, setMode2] = useState('light');  whether dark mode is enabled or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0b0e2c";
      showAlert("Dark Mode has been enabled", "success");
      // document.title = "TextUtils-Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Dark Mode has been disabled", "success");
      // document.title = "TextUtils-Light Mode";
    }
  };

  // const toggleMode2 =()=>{
  //   if(mode2 === 'light'){
  //     setMode2('Blue')
  //     document.body.style.backgroundColor='#a486da'
  //     showAlert('Dark Mode has been enabled', 'success')
  //   }
  //   else{
  //     setMode2('light')
  //     document.body.style.backgroundColor='white'
  //     showAlert('Dark Mode has been disabled', 'success')
  //   }
  // }

  return (
    <>
   
        {/*  <Navbar title="TextUtils" aboutText="About TextUtils"/>  */}
        <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
        <Routes>
          <Route exact path="/About" element={<About aboutext="About" mode={mode}/>}/>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>}/>
        </Routes>
        </div>
     </Router>
    </>
  );
}

export default App;
