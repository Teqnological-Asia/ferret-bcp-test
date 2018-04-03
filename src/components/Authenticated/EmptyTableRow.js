import React from 'react';

const EmptyTableRow = ({message}) => (
  <tr>
    <td className="center" colSpan="10">{message}</td>
  </tr>
);

export default EmptyTableRow;