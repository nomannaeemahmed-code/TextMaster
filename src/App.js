import 'bootstrap/dist/css/bootstrap.min.css';
import  { ColorSchemesExample, FormFloatingTextareaExample } from './component/Navbar'
import Alert from './component/Alert'
import { useState } from 'react';
// import About  from './component/About';
import { Button, Container } from 'react-bootstrap'; 
import About from './component/About';
import  Router  from './component/Router';


function App() {
const [text , setText]=useState('')
const [mode , setMode]=useState(false)
const[showAlert , setShowAlert]=useState(false)
const modehandleBtn=()=>{
if (!mode) {
   document.body.className="Dark"
} else {
  document.body.className="light"
}
setMode(!mode)
  console.log('yes handle btn mood work ')
}


  const clickbtn =()=>{
console.log(text)
let newText=text.toUpperCase()
setText(newText);
}
const inputField=(e)=>{
 setText(e.target.value)
}
const capitallizebtn=()=>{
      
  let capText=text.split(" ").map( word=>( word.charAt(0).toUpperCase()+word.slice(1))).join(" ");
  setText(capText);
}
 const lowercasebtn=()=>{
 let lowerCase=text.toLowerCase();
 setText(lowerCase);
 }
  const clear=()=>{
    // let newclear=text("")
    setText("")
  }
  const CopyBtn=()=>{
    navigator.clipboard.writeText(text)
   
    setShowAlert(true);
     setTimeout(() => {
      setShowAlert(false)
     }, 1500);

  }
  

  return ( 
    <div>
      <ColorSchemesExample onClick={modehandleBtn} mode={mode} />
      {showAlert && <Alert />}

      <br />
       <div className='body-div'>
      <h2  className={!mode ? 'text-color-dark':'text-color-light'}>Enter Text</h2>
      <p  className={!mode? 'text-color-dark': 'text-color-light'}>Copy and paste, or type text into the box below. Then click ANALYSE. You can also analyse multiple documents by separating them with '#' or any other delimiter token. If you want to do this, tick split and choose the delimiter in the options below.</p>
      <FormFloatingTextareaExample value={text} onChange={inputField} mode={mode}  />
      <br />
      <div  style={{display:'flex', gap:'10px'}}>
      <Button variant="primary" onClick={clickbtn}>Convert to UpperCase</Button>
      <Button variant="info" onClick={capitallizebtn}>Convert to capitilize</Button>
      <Button variant="success" onClick={lowercasebtn}>Convert to lowerCase</Button>
      <Button variant="danger" onClick={clear}>Clear Text</Button>
      <Button variant="info" onClick={CopyBtn}>Copy Text</Button>

 </div>
 <br />
 
 <h5 className={!mode ? "text-color-dark":"text-color-light"}>Words Count : {text.split(" ").length} </h5>
      
      <h5 className={!mode ? "text-color-dark":"text-color-light"} > characters count : {text.length}</h5>
       </div>
      



      {/* <SwitchExample /> */}
      {/* <About /> */}
      <Router />
    </div>
  );
}

export default App;
