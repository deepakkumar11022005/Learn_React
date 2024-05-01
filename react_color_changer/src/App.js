
import './App.css';
import ColorBox from './ColorBox';
import ColorInput from './ColorInput';
import ToggleTextColor from './ToggleTextColor';
import { useState } from 'react';

function App() {
  const [color1, setColor1] = useState('')
  const [font, setFont] = useState('')
  const [text,setText]=useState(0)

  const colorSet = [
    {
      color: "red",
      hexCode: "#FF0000"
    },
    {
      color: "green",
      hexCode: "#00FF00"
    },
    {
      color: "blue",
      hexCode: "#0000FF"
    }

  ];
  
  const handleColorInput = (e) => {
    let input = e.target.value;

    let match = colorSet.find(color => color.color.toLowerCase() === input.toLowerCase());
    if (match) {
      setFont(match.hexCode)
    }

    else
      setFont('');
    setColor1(e.target.value)
  }
  return (
    <div>
      <ColorBox
        font={font}
        text={text}
      />
      <ColorInput
        color1={color1}
        handleColorInput={handleColorInput}
      
      />
      <ToggleTextColor 
       text={text}
       setText={setText}
      />
    </div>
  );
}

export default App;
