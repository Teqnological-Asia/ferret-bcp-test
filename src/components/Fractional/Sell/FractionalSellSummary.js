import React from 'react';
import { formatDate, formatCurrency } from '../../../utils';

const FractionalSellSummary = ({numberOfRow, numberOfStock}) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>依頼日<br/><span className="u-11px">当日受付分16時まで</span></th>
          <td>
            {formatDate(new Date())}
          </td>
        </tr>
        <tr>
          <th>支払い方法</th>
          <td>約定の4営業日目にお預り金へ入金されます。</td>
        </tr>
        <tr>
          <th>合計買取請求件数</th>
          <td>{numberOfRow} 件</td>
        </tr>
        <tr>
          <th>合計株数</th>
          <td>{formatCurrency(numberOfStock)} 株</td>
        </tr>
        <tr>
          <th>合計手数料金額</th>
          <td>約定代金の1.08%</td>
        </tr>
      </tbody>
    </table>
  );
}

export default FractionalSellSummary;
