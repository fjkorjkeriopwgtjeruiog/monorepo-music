import React from 'react';

const Header = ({ autor, longitud }) => {
  let texto;
  if (autor === '') texto = 'Todas las canciones';
  else texto = 'Canciones de ' + autor;
  return (
    <h1>
      {texto} ({longitud} resultado/s)
    </h1>
  );
};

export default Header;
