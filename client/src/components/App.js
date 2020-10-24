import React from 'react';

import Footer from './footer.js';
import Header from './header.js';
import Search from './search';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Search />
      </main>
      <Footer />
    </div>
  );
}

export default App;
