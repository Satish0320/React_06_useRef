// import { useState } from "react"
// import { useRef } from "react"


// // useRef
// // reference to a value, such that when u change the value,
// //  the component DOES NOT RE-RENDER

// function App() {
// // a clock with start  ad stop button
// const[timer, settimer] = useState(0);
// const stoptimer  = useRef();

// function starttimer(){
//   let value = setInterval(()=>{
//     settimer(c => c + 1)
//   }, 1000)
// stoptimer.current = value
// }

// function Stoptimer(){
//   clearInterval(stoptimer.current)
// }

//   return (
//     <>
//     {timer} <br />
//     <button onClick={starttimer}>Start</button>   
//     <button onClick={Stoptimer}>Stop</button>   
//     </>
//   )
// }

// export default App

import React, { useEffect, useRef, useState } from 'react';

function Chat() {
  const [messages, setMessages] = useState(["Hello!", "How are you?"]);
  const chatBoxRef = useRef(null);

  // Function to simulate adding new messages
  const addMessage = () => {
    setMessages((prevMessages) => [...prevMessages, "New message!"]);
  };

  // Scroll to the bottom whenever a new message is added
  useEffect(() => {
    chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
  }, [messages]);

  return (
    <div>
      <div 
        ref={chatBoxRef} 
        style={{ height: "200px", overflowY: "scroll", border: "1px solid black" }}
      >
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <button onClick={addMessage}>Add Message</button>
    </div>
  );
}

export default Chat;
