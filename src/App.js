import 'bootstrap/dist/css/bootstrap.min.css';
import  { ColorSchemesExample, FormFloatingTextareaExample } from './component/Navbar'

import { useState } from 'react';
import { Button, Container } from 'react-bootstrap'; 



function App() {
const [text , setText]=useState('')

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
  return ( 
    <div>
      <ColorSchemesExample />
      <br />

      <h1>Text</h1>
      <br />
      <FormFloatingTextareaExample value={text} onChange={inputField}  />
      <br />
      <Container  style={{display:'flex', gap:'10px'}}>
      <Button variant="primary" onClick={clickbtn}>Convert to UpperCase</Button>
      <Button variant="info" onClick={capitallizebtn}>Convert to capitilize</Button>
      <Button variant="success" onClick={lowercasebtn}>Convert to lowerCase</Button>
      <Button variant="danger" onClick={clear}>Clear Text</Button>
 </Container>
 <br />
      <p>Word Count {text.split(" ").length} character count {text.length}</p>



      
    </div>
  );
}

export default App;
