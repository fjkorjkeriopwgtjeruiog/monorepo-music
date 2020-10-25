import React from 'react';

const Header = ({ autor }) => {
  let texto;
  if (autor === '') texto = 'Todas las canciones';
  else texto = 'Canciones de ' + autor;
  return <h1>{texto}</h1>;
};

export default Header;
