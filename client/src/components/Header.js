import React from 'react';

const Header = ({ autor, longitud }) => {
  let texto;
  if (longitud > 0) {
    if (autor === '') texto = 'Todas las canciones';
    else texto = 'Canciones de ' + autor;
    texto += ' (' + longitud + ' resultados)';
  } else texto = 'Pulsa "Buscar por autor" para ver las canciones.';
  return <h1>{texto}</h1>;
};

export default Header;
