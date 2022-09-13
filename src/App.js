
import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  const [contador, setContador] = useState(0)
  const [frutas, cantidadFrutas] = useState(0);
  const [frutaFavorita, nombreFrutaFavorita] = useState('Banana');

  useEffect(() =>{
    setContador(contador + 1,console.log('Se monto') )
    return () => {
      console.log('Se desmonto')
    }
  }, [])

  return (
    <div className="App">
      <button onClick={() => cantidadFrutas(frutas + 1)}>Comprar Fruta</button>
      <button onClick={() => cantidadFrutas(frutas - 1)}>Sacar Fruta</button>
      <h1>Total de {frutas} compradas</h1>
      <p>{frutaFavorita}</p>
      <h1>{contador}</h1>
    </div>
  );
}

export default App;
