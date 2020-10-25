import React from 'react';

const Search = ({ handleChange, espera }) => {
  return (
    <>
      <form>
        <label>Escriba en el formulario:</label>
        <input
          type="text"
          id="autor"
          placeholder="Autor"
          name="autor"
          onChange={espera}
        />
        <button type="button" onClick={handleChange}>
          Buscar
        </button>
      </form>
    </>
  );
};

export default Search;
