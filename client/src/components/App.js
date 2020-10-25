import React, { useState } from 'react';

import getSong from '../lib/get-song.js';
import Footer from './Footer.js';
import Header from './Header.js';
import Search from './Search.js';
import Cancion from './Cancion.js';

function App() {
  const [autor, setAutor] = useState('');
  const [previo, setPrevio] = useState('');
  const [canciones, setCancion] = useState([]);

  const handleChange = () => {
    setAutor(previo);
    setCancion(getSong());
  };

  const espera = (event) => {
    setPrevio(event.currentTarget.value);
  };

  return (
    <div className="App">
      <Header autor={autor} />
      <main>
        <Search handleChange={handleChange} espera={espera} />
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
