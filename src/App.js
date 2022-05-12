import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform'; 
import { useState } from 'react';
import Alert from './Components/Alert';
function App() {
  const [mode, setmode] = useState('light')
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

  }
  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert('Disabled light Mode', 'warning')
      setTimeout(() => {
        setAlert(null)
      }, 2000);
    }
    else {
      setmode('light')
      document.body.style.backgroundColor = "white"
      showAlert('Enabled Light Modes', 'success')
      setTimeout(() => {
        setAlert(null)
      }, 2000);
    }
  }
  return (
    <>
   <Router>
        <Navbar brand="Vision & Lens" events="Events" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
    
        
      <div className="container my-3">
        <Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          <Route exact path="/textform">
        <Textform heading="Text Area" mode={mode} />
        
          </Route>
         
        </Switch>
      </div>
    </Router>

    </>
  );
}

export default App;
