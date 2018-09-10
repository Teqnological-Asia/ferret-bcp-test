import React from 'react';

const EmptyTableRow = ({message}) => (
  <tr>
    <td className="center" colSpan="14">{message}</td>
  </tr>
);

export default EmptyTableRow;