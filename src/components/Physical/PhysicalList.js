import React from 'react';
import EmptyTableRow from '../Authenticated/EmptyTableRow';
import PhysicalRow from './PhysicalRow';

const PhysicalList = ({physicals}) => {
  const renderPhysicals = (physicals) => {
    if (physicals.length > 0) {
      return physicals.map((physical, key) => (
        <PhysicalRow {...{ physical, key }} />
      ));
    } else {
      return <EmptyTableRow message="明細はありません。" />;
    }
  }

  return (
    <div className="u-mt20p">
      <table className="c-table_list">
        <thead>
          <tr>
            <th className="c-l">銘柄コード</th>
            <th className="c-l">銘柄</th>
            <th className="c-l">区分</th>
            <th>数量/（取引中）</th>
            <th>取得単価</th>
            <th>評価額</th>
            <th>評価損益</th>
            <th className="c-c">発注</th>
          </tr>
        </thead>
        <tbody>
          {renderPhysicals(physicals)}
        </tbody>
      </table>
    </div>
  );
}

export default PhysicalList;