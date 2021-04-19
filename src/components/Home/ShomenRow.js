import React from 'react';

const ShomenRow = ({edocument, handleClickLink}) => {
  return (
    <div>
      <a className="cursor" onClick={handleClickLink.bind(this, edocument)}>
        {
          edocument.name
          || edocument.code // Show code when API doesn't return name
        }
      </a>
      <br/>
    </div>
  );
}

export default ShomenRow;
