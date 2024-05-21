import { useRef, useState } from "react";

export default function Player() {
const [playerName, setPlayerName] = useState('');
const [isSubmitted, setIsSubmitted] = useState(false);

function handleName(event) {
  setPlayerName(event.target.value);
}

function handleSubmit(){
  setIsSubmitted(prev => !prev);
}

  return (
    <section id="player">
      <h2>Welcome {isSubmitted ? playerName : 'Unknown entity'} </h2>
      <p>
        <input type="text" onChange={handleName}/>
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}
