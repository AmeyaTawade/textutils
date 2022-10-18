import "./App.css"
import About from "./components/About";
import Navbar from "./components/Navbar"; 
import TextForm from "./components/TextForm"; 
import React, {useState} from "react";
import Alert from "./components/Alert ";


function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not

  const [alert, setAlert] = useState(null); 

  const showAlert =(message, type)=>{
    setAlert({
      msg: message,
      type :type
    })
  }
  
  
  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor='grey'
      showAlert('Dark Mode has been enabled', 'success')
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white' 
      showAlert('Dark Mode has been disabled', 'success')
    }
  }
  return (
    <>
    {/*  <Navbar title="TextUtils" aboutText="About TextUtils"/>  */ }
   <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert} />
   <div className="container my-3" >
   <TextForm  heading="Enter the text to analyze" mode={mode} />
   {/* <About/> */}
    </div>
   </> 
  );
}

export default App;
