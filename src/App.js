import React from 'react';
import './App.css';
import ContadorLoco from './componentes/ContadorLoco';    
import ChisteAleatorio from './componentes/ChisteAleatorio';

function App() {
  return (
    <div className="App">
      <h1>Componentes</h1>
      <ContadorLoco />    
      <ChisteAleatorio />
    </div>
  );
}

export default App;