import React from 'react';

const Cancion = ({ can }) => {
  return (
    <>
      <hr />
      <article>
        <dl>
          <div>
            <dt>Canción:</dt>
            <dd>{can.title}</dd>
          </div>
          <div>
            <dt>Autor:</dt>
            <dd>{can.artist}</dd>
          </div>
          <div>
            <dt>ID:</dt>
            <dd>{can._id}</dd>
          </div>
        </dl>
      </article>
    </>
  );
};

export default Cancion;
