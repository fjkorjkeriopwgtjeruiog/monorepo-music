import React from 'react';

const Search = ({
  handleChange,
  espera,
  actualizar,
  incluir,
  autor,
  sonido,
}) => {
  return (
    <>
      <form>
        <label>Escriba en el formulario:</label>
        <input
          type="text"
          id="cancion"
          placeholder="Cancion"
          name="cancion"
          onChange={actualizar}
          value={sonido}
        />
        <input
          type="text"
          id="autor"
          placeholder="Autor"
          name="autor"
          onChange={espera}
          value={autor}
        />
        <button type="button" onClick={handleChange}>
          Buscar por autor
        </button>
        <button type="button" onClick={incluir}>
          Crear cancion
        </button>
      </form>
    </>
  );
};

export default Search;
