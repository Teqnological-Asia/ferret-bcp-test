import React, { Component } from 'react';
import MarginRow from './MarginRow';

class MarginTable extends Component {
  render() {
    const marginPositions = this.props.marginPositions

    return (
      <div className="u-mt20p">
        <table className="c-table_list">
          <thead>
            <tr>
              <th className="c-l">銘柄コード</th>
              <th className="c-l">銘柄</th>
              <th className="c-l">区分</th>
              <th className="c-l">建日</th>
              <th>数量/（取引中）</th>
              <th>平均建単価</th>
              <th>評価損益</th>
              <th className="c-c">現引/渡</th>
              <th className="c-c">発注</th>
            </tr>
          </thead>
          <tbody>
            {
              marginPositions.map((item, key) => (
                <MarginRow position={item} key={key} />
              ))
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default MarginTable;