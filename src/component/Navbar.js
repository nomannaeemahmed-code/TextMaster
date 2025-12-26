import { click } from '@testing-library/user-event/dist/click';
import {Container,Nav,Navbar,Form} from 'react-bootstrap';
import {useState} from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
// import Form from 'react-bootstrap/Form';

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
        <Container>
          <Navbar.Brand href="#home"> Text Analysis

          </Navbar.Brand>
          
            
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
             height: '200px', width:'60%' ,backgroundColor : mode ? "black":"white",
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