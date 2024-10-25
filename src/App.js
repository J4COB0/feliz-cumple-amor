import './App.css';
import colors from './json/colors'
import hanniaMessage from'./json/hannia-message.json'
import { useState } from 'react';
import HanniaMessage from './components/HanniaMessage';

/* Funtions */
const getRamdonNumber = (maxLimit) => Math.floor(Math.random() * maxLimit);

function App() {

  /* UseState */
  const [message, setMessage] = useState(0);
  const handleMessage = () => {
    if (message < (hanniaMessage.length - 1)) {
      setMessage(message+1);
    }
  };

  const color = colors[getRamdonNumber(colors.length)];

  /* UseEffect */
  document.body.style = `background: ${color}`;

  return (
    <>
      <HanniaMessage 
        color    = {color}
        tittle   = {hanniaMessage[message].tittle} 
        text     = {hanniaMessage[message].text}
        image    = {hanniaMessage[message].image}
        handleMessage={handleMessage}
      />
    </>
  );
}

export default App;
