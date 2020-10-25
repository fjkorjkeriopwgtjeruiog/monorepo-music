import React, { useState } from 'react';

import Footer from './Footer.js';
import Header from './Header.js';
import Search from './Search.js';
import Cancion from './Cancion.js';
import music from 'server/data/music.js';

function App() {
  const [autor, setAutor] = useState('');
  const [autorPrevio, setPrevio] = useState('');
  const [sonidoPrevio, setCante] = useState('');
  const [canciones, setCancion] = useState(music);

  const handleChange = async () => {
    setAutor(autorPrevio);
    if (autorPrevio === '') setCancion(music);
    else {
      const cantos = [];
      music.forEach((m) => {
        if (m.artist === autorPrevio) cantos.push(m);
      });
      setCancion(cantos);
    }
  };

  const incluir = async () => {
    if (autorPrevio === '' || sonidoPrevio === '')
      alert('¡Error! Los campos de autor y canción no pueden estar vacios.');
    else {
      const cantos = { title: sonidoPrevio, artist: autorPrevio };
      music.push(cantos);
      setCancion(music.concat(cantos));
      alert('¡La canción [' + sonidoPrevio + '] ha sido creada con exito!');
    }
  };

  const espera = (event) => {
    setPrevio(event.currentTarget.value);
  };

  const actualizar = (event) => {
    setCante(event.currentTarget.value);
  };

  return (
    <div className="App">
      <Header autor={autor} longitud={canciones.length} />
      <main>
        <Search
          handleChange={handleChange}
          espera={espera}
          actualizar={actualizar}
          incluir={incluir}
        />
      </main>
      <section>
        {canciones.map((can) => (
          <Cancion key={can.artist} can={can} />
        ))}
      </section>
      <Footer />
    </div>
  );
}

export default App;
