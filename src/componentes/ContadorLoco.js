import React, { useState } from 'react';
import './ContadorLoco.css'; // Importamos el archivo CSS

function ContadorLoco() {
  const [contador, setContador] = useState(0);
  const [color, setColor] = useState('blue');

  const colores = ['red', 'green', 'blue', 'purple', 'orange', 'pink'];
  
  const cambiarColor = () => {
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    setColor(colorAleatorio);
  };

  return (
    <div className={`contadorLoco ${color}`}>
      <p>¡Contador Loco! {contador}</p>
      <button className="botonLoco" onClick={() => {setContador(contador + 1); cambiarColor();}}>
        ¡Hazme Loco!
      </button>
    </div>
  );
}

export default ContadorLoco;