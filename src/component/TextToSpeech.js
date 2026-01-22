// import React from "react";
// import { useSpeech } from "react-text-to-speech";

// export default function TextToSpeech({setText}) {
//   const {
//     Text, // Component that renders speech text in a <div> and supports standard HTML <div> props
//     speechStatus, // String that stores current speech status
//     isInQueue, // Indicates whether the speech is currently playing or waiting in the queue
//     start, // Function to start the speech or put it in queue
//     pause, // Function to pause the speech
//     stop, // Function to stop the speech or remove it from queue
//   } = useSpeech({ text: {setText}, stableText: true });

//   return (
//     <div style={{ display: "flex", flexDirection: "column", rowGap: "1rem" }}>
//       <Text />
//       <div style={{ display: "flex", columnGap: "0.5rem" }}>
//         {speechStatus !== "started" ? <button onClick={start}>Start</button> : <button onClick={pause}>Pause</button>}
//         <button onClick={stop}>Stop</button>
//       </div>
//     </div>
//   );
// }