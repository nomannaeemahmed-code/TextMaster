import { click } from '@testing-library/user-event/dist/click';
import {Container,Nav,Navbar,Form} from 'react-bootstrap';
import Logo from '../assets/images/logoImage.png'
import {useState} from 'react';
import  Router  from 'react-router-dom';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import {Link} from 'react-router-dom'
// import Form from 'react-bootstrap/Form';
// import About from './About',
function ColorSchemesExample({onClick, mode}) {
// const [click , setClick]= useState(false); 

    // const onHandlechage=()=>{
    //     console.log('yes work ')
    //     if (!click) {
    //       document.body.className="Dark";
    //     } else {
    //       document.body.className="light";
    //     }
    //     setClick(!click)
        
    // }
  

  return (
    <>
      <Navbar bg={mode ? "dark" : "light"} data-bs-theme={mode ? "dark":"light"}>
          <img className={!mode? "img-dark" : "img-light"} style={{width:'12%', height:'7vh'}} src={Logo} />

        <Container>
  {/* <ul className="me-auto" style={{display:'flex', listStyle:'none', gap:'10px', marginTop:'20px' }}> */}
            <a href='/about'>Home</a>
            <a href="/about">About </a>
            <li href="#pricing">Pricing</li>
      {/* </ul>     */}
          {/* <Navbar.Brand href="#home"> Text Analysis

          </Navbar.Brand>
           */}
            
{/* <Form> */}
      <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        // onClick={onHandlechage}
        onClick={onClick}
      label={mode? "Light Mood":"Dark Mode"}
      style={{
        color: mode? "white":"Black"
      }}

      />
      
    {/* </Form> */}
        </Container>
      </Navbar>
    </>
  );
}

// text Area 

function FormFloatingTextareaExample({ value, onChange, mode }) {
  return (
    <>
            
        <Form.Control
       
            as="textarea"
          value={value}
           onChange={onChange} 
          // placeholder="Leave a comment here"
          style={{
             height: '30vh', width:'100%' ,backgroundColor : mode ? "#282a36":"white",
            ...(mode &&{color:'white'})

          }}
          
        />
     
    </>
  );
}

// function SwitchExample() {
//   return (
    
//   );
// }


export {
  ColorSchemesExample,
 FormFloatingTextareaExample,
//  SwitchExample
} 