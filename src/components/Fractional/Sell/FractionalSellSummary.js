import React from 'react';
import { formatDate, formatCurrency } from '../../../utils';

const FractionalSellSummary = ({numberOfRow, numberOfStock, totalCommissionAmount}) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>申請日<br/><span className="u-11px">当日受付分24時まで</span></th>
          <td>
            {formatDate(new Date())}
          </td>
        </tr>
        <tr>
          <th>支払い方法</th>
          <td>請求から1～2週間ほどで弊社へ届出済みの金融機関口座へお振込み（ゆうちょ銀行を指定している場合、貯金事務センターから振替払出証書が送付されます）</td>
        </tr>
        <tr>
          <th>合計買取請求件数</th>
          <td>{numberOfRow} 件</td>
        </tr>
        <tr>
          <th>合計株数</th>
          <td>{numberOfStock} 株</td>
        </tr>
        <tr>
          <th>合計手数料金額</th>
          <td>{formatCurrency(totalCommissionAmount)} 円</td>
        </tr>
        <tr>
          <th> </th>
          <td>特定口座外での譲渡</td>
        </tr>
      </tbody>
    </table>
  );
}

export default FractionalSellSummary;
