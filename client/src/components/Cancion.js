import React from 'react';

const Cancion = ({ can }) => {
  return (
    <article>
      <dl>
        <div>
          <dt>Nombre:</dt>
          <dd>{can.title}</dd>
        </div>
        <div>
          <dt>Autor:</dt>
          <dd>{can.artist}</dd>
        </div>
      </dl>
    </article>
  );
};

export default Cancion;
