import React from 'react';
import { formatCurrency } from '../../../utils';

const OrderInfo = ({stockDetail, orderFormValues}) => {
  const formattedPrice = orderFormValues.orderType === 'Limit' ? `指値${formatCurrency(orderFormValues.price)}円` : '成行';

  return (
    <div className="u-mt20p">
      <div className="c-table-responsive">
        <div className="c-table_inputs">
          <table>
            <tbody>
              <tr>
                <th>銘柄コード</th>
                <td>{stockDetail.code}/{stockDetail.name}</td>
              </tr>
              <tr>
                <th>取引</th>
                <td>現物売却</td>
              </tr>
              <tr>
                <th>取引株数</th>
                <td>{orderFormValues.quantity}株</td>
              </tr>
              <tr>
                <th>執行条件・単価</th>
                <td>{formattedPrice}</td>
              </tr>
              <tr>
                <th>取引期限</th>
                <td>当日限り</td>
              </tr>
              <tr>
                <th>取引執行市場</th>
                <td>東証またはDP</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default OrderInfo;