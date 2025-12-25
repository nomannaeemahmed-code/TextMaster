import { click } from '@testing-library/user-event/dist/click';
import {Container,Nav,Navbar} from 'react-bootstrap';
import {useState} from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function ColorSchemesExample() {
const [click , setClick]= useState(false); 

    const onHandlechage=()=>{
        console.log('yes work ')
        setClick(! click)
    }
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"> Text Analysis

          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
            <button onClick={onHandlechage}
            
            >{click ? "Dark Mood ": "Light Mood"} </button>

        </Container>
      </Navbar>
    </>
  );
}


function FormFloatingTextareaExample({ value, onChange }) {
  return (
    <>
            
        <Form.Control
            as="textarea"
          value={value}
           onChange={onChange} 
          // placeholder="Leave a comment here"
          style={{ height: '200px', width:'60%' }}
        />
     
    </>
  );
}


export {
  ColorSchemesExample,
 FormFloatingTextareaExample,
} 