import { Container, Nav, Navbar, Form, Button } from 'react-bootstrap';
import Logo from '../assets/images/logoImage.png'
import Speaker from '../assets/images/loud-sound.png'
import { useSpeech } from "react-text-to-speech";
import { useState } from "react";
import { saveAs } from "file-saver";
import { Document, Packer, Paragraph, TextRun } from "docx";
import DownloadIcon from '../assets/images/arrow-icon-28.png';
import RightIcon from '../assets/images/right.png';
import Hamburger from '../assets/images/Hamburger_icon.svg.png'








// import {Link} from 'react-router-dom'
// import Form from 'react-bootstrap/Form';
// import About from './About',
function ColorSchemesExample({ onClick, mode }) {
  // const [click , setClick]= useState(false); 
   const [open , setOpen]=useState(false);
  // const onHandlechage=()=>{
  //     console.log('yes work ')
  //     if (!click) {
  //       document.body.className="Dark";
  //     } else {
  //       document.body.className="light";
  //     }
  //     setClick(!click)

  // }
  const handleOpen = () => {
    setOpen(true);
    console.log('open menu');
  };

  const closebtn=()=>{
    setOpen(false);
    console.log('close menu');
  }

  return (
    <>
      <Navbar style={{ paddingLeft: "30px" }} bg={mode ? "dark" : "light"} data-bs-theme={mode ? "dark" : "light"}>
        < img className={!mode ? "img-dark" : "img-light"} style={{ width: '12%', height: '7vh' }} src={Logo} alt="Logo" />

        <Container>
          {/* <ul className="me-auto" style={{display:'flex', listStyle:'none', gap:'10px', marginTop:'20px' }}> */}

          <Nav className="me-auto nabvar-links">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <div  className='Slider' >
            <div><img onClick={handleOpen} style={{width:'20px'}} src={Hamburger} alt="" />
            
            </div>
            { open && <div className='slider-menu' >
              <button onClick={closebtn} type="button" className="btn-close btn-close-white" aria-label="Close"></button>

              <h1>Hellow</h1>
            </div>

            }
            
           

          </div>
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
            label={mode ? "Light Mood" : "Dark Mode"}
            style={{
              color: mode ? "white" : "Black"
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
  const [active, setActive] = useState(false);
   const [changeIcon, setChangeIcon] = useState(false);
  const {
    text={value}, // Component that renders speech text in a <div> and supports standard HTML <div> props
    speechStatus, // String that stores current speech status
    isInQueue, // Indicates whether the speech is currently playing or waiting in the queue
    start, // Function to start the speech or put it in queue
    pause, // Function to pause the speech
    stop, // Function to stop the speech or remove it from queue
  } = useSpeech({ text:value });

  const changeIconBtn=()=>{
    setChangeIcon(true);
    setTimeout(()=>{
      setChangeIcon(false);
    }, 1500)
    }
  
  const spearker = () => {

    setActive(!active);
    start();

  }
  const handleDownload = () => {
    // 1️⃣ Create document
    const doc = new Document({
      sections: [
        {
          children: [
            new Paragraph({
              children: [
                new TextRun(value || "No text entered."),
              ],
            }),
          ],
        },
      ],
    });

    // 2️⃣ Convert to Blob and download
    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, "text.docx");
    });
  };

  let showImage=false;

  if(value!==null && value!==undefined){
    const trimValue=value.trim();
    if(trimValue.length>0){
      showImage=true;
    }
  }


  

  return (
    <div style={{ position: "relative", width: "100%" }}>

      <Form.Control

        as="textarea"
        value={value}
        onChange={onChange}
        // placeholder="Leave a comment here"
        style={{
          height: '30vh', width: '100%', backgroundColor: mode ? "#282a36" : "white",
          ...(mode && { color: 'white' })

        }}

      />
      {showImage &&<> <img
        src={Speaker}
        onClick={spearker}

        className={!active ? "speaker-icon-inactive" : "speaker-icon-active"}
        style={{
          position: "absolute",
          bottom: "10px",
          right: "20px",
         
          width: "22px",

          cursor: "pointer",
         
        }}
      />
      <i style={{
          position: "absolute",
          bottom: "10px",
          right: "60px",
         
          width: "20px",

          cursor: "pointer",
          
         
        }} onClick={handleDownload} className="bi bi-arrow-down"> {!changeIcon ? <img onClick={changeIconBtn} style={{ width:'25px', filter: mode ? 'invert(100)' : 'none'}}  src={DownloadIcon} alt="Download"  />: <img style={{ width:'20px', filter: mode ? 'invert(100)' : 'none'}} src={RightIcon} /> }</i>
  
        
      </>}
          


    </div>
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