import React, { useState } from 'react';
import './ChisteAleatorio.css'; // Importamos el archivo CSS

function ChisteAleatorio() {
  const [chiste, setChiste] = useState('');
  const [color, setColor] = useState('blue');

  const chistes = [
    '¿Por qué el libro de matemáticas se deprimió? ¡Porque tenía demasiados problemas!',
    '¿Qué hace una abeja en el gimnasio? ¡Zum-ba!',
    '¿Por qué el perro se sentó en el reloj? ¡Porque quería ser un perro reloj!',
    '¿Cómo se llama un boomerang que no vuelve? ¡Un palo!',
  ];

  const obtenerChiste = () => {
    const chisteAleatorio = chistes[Math.floor(Math.random() * chistes.length)];
    setChiste(chisteAleatorio);
    cambiarColor();
  };

  const cambiarColor = () => {
    const colores = ['red', 'green', 'blue', 'purple', 'orange'];
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    setColor(colorAleatorio);
  };

  return (
    <div>
      <p className={`chiste ${color}`}>{chiste}</p>
      <button className="botonChiste" onClick={obtenerChiste}>
        ¿Tienes un chiste?
      </button>
    </div>
  );
}

export default ChisteAleatorio;