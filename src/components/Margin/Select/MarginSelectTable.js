import React, { Component } from 'react';
import EmptyTableRow from '../../Authenticated/EmptyTableRow';
import MarginSelectRow from './MarginSelectRow';

class MarginSelectSelect extends Component {
  render() {
    const renderPositions = () => {
      const { positions, handleChangeQuantity } = this.props

      if (positions.length > 0) {
        return positions.map((item, key) => (
          <MarginSelectRow
            position={item}
            handleChangeQuantity={handleChangeQuantity}
            key={key} />
        ));
      } else {
        return <EmptyTableRow message="明細はありません。" />;
      }
    }
    return (
      <table className="c-table_list">
        <thead>
          <tr>
            <th className="c-l">銘柄コード</th>
            <th className="c-l">銘柄</th>
            <th className="c-l">区分</th>
            <th className="c-l">建日</th>
            <th>数量</th>
            <th>返済可能数量</th>
            <th>建値</th>
            <th>評価損益</th>
          </tr>
        </thead>
        <tbody>
          {renderPositions()}
        </tbody>
      </table>
    )
  }
}

export default MarginSelectSelect;