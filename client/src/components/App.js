import React, { useState } from 'react';

import Footer from './Footer.js';
import Header from './Header.js';
import Search from './Search.js';
import Cancion from './Cancion.js';

import { getAllMusic, createNewMusic } from '../lib/music.js';

function App() {
  const [autor, setAutor] = useState('');
  const [autorPrevio, setPrevio] = useState('');
  const [sonidoPrevio, setCante] = useState('');

  const [canciones, setCancion] = useState([]);

  const handleChange = async () => {
    setAutor(autorPrevio);
    const completo = await getAllMusic();
    if (autorPrevio === '') setCancion(completo);
    else {
      const cantos = [];
      completo.forEach((m) => {
        if (m.artist === autorPrevio) cantos.push(m);
      });
      setCancion(cantos);
    }
  };

  const incluir = async () => {
    if (autorPrevio === '' || sonidoPrevio === '')
      alert('¡Error! Los campos de autor y canción no pueden estar vacios.');
    else {
      const completo = await getAllMusic();
      const posicion = completo
        .map(function (e) {
          return e.title;
        })
        .indexOf(sonidoPrevio);

      if (posicion > -1)
        alert('¡' + sonidoPrevio + ' ya existe en nuestra lista de canciones!');
      else {
        const cantos = { title: sonidoPrevio, artist: autorPrevio };
        createNewMusic(cantos);

        alert('¡La canción "' + sonidoPrevio + '" ha sido creada con exito!');
        setPrevio('');
        setCante('');
        setCancion(await getAllMusic());
      }
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
          autor={autorPrevio}
          sonido={sonidoPrevio}
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
