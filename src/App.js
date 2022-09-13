
import './App.css';
import React, {useState} from 'react';

function App() {
  const [frutas, cantidadFrutas] = useState(0);
  return (
    <div className="App">
      <button onClick={() => cantidadFrutas(frutas + 1)}>Comprar Fruta</button>
      <button onClick={() => cantidadFrutas(frutas - 1)}>Sacar Fruta</button>
      <h1>Total de {frutas} compradas</h1>
    </div>
  );
}

export default App;
