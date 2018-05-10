import React from 'react';

const ShomenRow = ({edocument, handleClickLink}) => {
  return (
    <a className="cursor" onClick={handleClickLink.bind(this, edocument)}>
      {edocument.name} </a>
  );
}

export default ShomenRow;
