import './App.css';
import Navbar from './componants/Navbar';
import TextForm from './componants/TextForm';
import React, {useState} from 'react' ;
import Alert from './componants/Alert';

function App() {
  const [mode, setMode] = useState('light'); // wheather dark mode is yes or not
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg : message,
      type : type,
    })

    setTimeout(() => {
      setAlert(null)
    },1500);
  }

  const togglemode =()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#4a4b85';
      showAlert("Dark Mode Has Been Enabled" , "success");
    }
    else{
      setMode('light') ;
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Has Been Enabled" , "success");
    }
  }
  return (
    <>
  <Navbar title = "Text-Utils" mode ={mode} togglemode={togglemode} />
  <Alert alert={alert}/>
  <div className="container">
  <TextForm showAlert={showAlert} heading = "Enter Your text Here"  mode ={mode}/>

  </div>
    </>
  );
}

export default App;
