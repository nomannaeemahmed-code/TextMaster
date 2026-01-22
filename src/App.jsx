import 'bootstrap/dist/css/bootstrap.min.css';
import { ColorSchemesExample, FormFloatingTextareaExample } from './component/Navbar'
import Alert from './component/Alert'
import { useState } from 'react';
// import About  from './component/About';
import { Button, Container } from 'react-bootstrap';
import About from './component/About';
// import TextToSpeech from './component/TextToSpeech';
// import  Router  from './component/Router';
// import { Document, Packer, Paragraph, TextRun } from "docx";
// import saveAs from "filesaver.js";
// import { saveAs } from "file-saver";
// import Spearker from './assets/images/loud-sound.png';




function App() {
  const [text, setText] = useState('')
  const [mode, setMode] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  
  const modehandleBtn = () => {
    if (!mode) {
      document.body.className = "Dark"
    } else {
      document.body.className = "light"
    }
    setMode(!mode)
    console.log('yes handle btn mood work ')
  }
  
  // const handleDownload = () => {
  //   // 1️⃣ Create document
  //   const doc = new Document({
  //     sections: [
  //       {
  //         children: [
  //           new Paragraph({
  //             children: [
  //               new TextRun(text || "No text entered."),
  //             ],
  //           }),
  //         ],
  //       },
  //     ],
  //   });

  //   // 2️⃣ Convert to Blob and download
  //   Packer.toBlob(doc).then((blob) => {
  //     saveAs(blob, "text.docx");
  //   });
  // };


  const clickbtn = () => {
    console.log(text)
    let newText = text.toUpperCase()
    setText(newText);
  }
  const inputField = (e) => {
    setText(e.target.value)
  }
  const capitallizebtn = () => {

    let capText = text.split(" ").map(word => (word.charAt(0).toUpperCase() + word.slice(1))).join(" ");
    setText(capText);
  }
  const lowercasebtn = () => {
    let lowerCase = text.toLowerCase();
    setText(lowerCase);
  }
  const clear = () => {
    // let newclear=text("")
    setText("")
  }
  const CopyBtn = () => {
    navigator.clipboard.writeText(text)

    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false)
    }, 1500);

  }
  const removeExtraSpaces = () => {
    let extraSpaces = text.split(' ').filter((element) => { return element != "" }).join(' ')
    setText(extraSpaces);
  }


  return (
    <div>
      <div>
        <ColorSchemesExample onClick={modehandleBtn} mode={mode} />
      </div>
      <div style={{ width: '100%', height: '10vh' }}>
        {showAlert ? <Alert /> : ''}
      </div>
      <div className='body-div' style={{ marginTop: '10px' }}>
        <h2 className={!mode ? 'text-color-dark' : 'text-color-light'}>Enter Text</h2>
        <p className={!mode ? 'text-color-dark' : 'text-color-light'}>Copy and paste, or type text into the box below. Then click ANALYSE. You can also analyse multiple documents by separating them with '#' or any other delimiter token. If you want to do this, tick split and choose the delimiter in the options below.</p>
        <FormFloatingTextareaExample value={text} onChange={inputField} mode={mode} />
        <br />
        <div style={{ display: 'flex', gap: '10px' , flexWrap: 'wrap' }}>
          <div><Button disabled={text.trim() === ""} variant="primary" onClick={clickbtn}>UpperCase</Button></div>
          <div><Button disabled={text.trim() === ""} variant="info" onClick={capitallizebtn}>capitilize</Button></div>
          <div><Button disabled={text.trim() === ""} variant="success" onClick={lowercasebtn}>lowerCase</Button></div>
          <div><Button disabled={text.trim() === ''} variant="danger" onClick={clear}>Clear </Button></div>
          <div><Button disabled={text.trim() === ""} variant="info" onClick={CopyBtn}>Copy </Button></div>
          <div><Button disabled={text.trim() === ''} variant="info" onClick={removeExtraSpaces}>Remove Extra spaces</Button></div>
          

        </div>
        <br />

        <h5 className={!mode ? "text-color-dark" : "text-color-light"}>Words Count : {text.trim().split(/\s+/).filter(word => word.length > 0).length}   </h5>

        <h5 className={!mode ? "text-color-dark" : "text-color-light"} > characters count : {text.length}</h5>
      </div>




      {/* <SwitchExample /> */}
      {/* <About /> */}
      {/* <Router /> */}
    </div>
  );
}

export default App;
