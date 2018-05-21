import React from 'react';

const ShomenRow = ({edocument, handleClickLink}) => {
  return (
    <div>
      <a className="cursor" onClick={handleClickLink.bind(this, edocument)}>
        {edocument.name}
      </a>
      <br/>
    </div>
  );
}

export default ShomenRow;
