import { useState } from  'react';
import './App.css'


function App() {
  const [ num, setNum ] = useState(0);

  function contar(){
    setNum(num + 1);
  }

  return (
    <>
        <h1>Aula Hook</h1> 
        <h3>O valor do contador = {num}</h3>
        <button
            onClick={contar}
        >Contar</button>
    </>
  )
}

export default App
