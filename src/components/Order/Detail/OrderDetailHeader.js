import React from 'react';
import moment from 'moment';
import { tradeTypes, statuses } from '../common';
import { formatDate, formatDateTime, formatNumber } from '../../../utils';

const OrderDetailHeader = ({order}) => {
  const renderOrderDetailExpirationDate = (order) => {
    return (order.expiration_type === 'day') ?
      "..."  :
      formatDate(moment(order.expiration_date));
  }

  const renderOrderDetailSideTradeType = (order) => {
    return (order.side === "sale") ?
      tradeTypes[order.trade_type] + "売" :
      tradeTypes[order.trade_type] + "...";
  }

  const renderOrderDetailTypePrice = (order) => {
    return (order.order_type === "limit") ?
      "... " + formatNumber(order.order_price) + "..." :
      "...";
  }

  return (
    <div className="p-section_info">
      <div className="p-section_info_head">
        <div className="p-section_info_number">({order.stock_code})</div>
        <div className="p-section_info_title">{order.stock_name}</div>
        <div className="p-section_info_date">
          <div className="p-section_info_attr">発注時間:</div>
          <div className="p-section_info_value">
            {formatDateTime(order.order_time)}
          </div>
          <div className="p-section_info_attr">有効期限:</div>
          <div className="p-section_info_value">
            {renderOrderDetailExpirationDate(order)}
          </div>
        </div>
      </div>
      <div className="p-section_info_body">
        <div className="p-section_info_section">
          <div className="p-section_info_attr">区分</div>
          <div className="p-section_info_value">
            <span className="u-sell">
              {renderOrderDetailSideTradeType(order)}
            </span>
           </div>
        </div>
        <div className="p-section_info_val">
          <div className="p-section_info_attr">取引数量</div>
          <div className="p-section_info_value en">
            <span className="num">{formatNumber(order.order_quantity)}</span>
          </div>
        </div>
        <div className="p-section_info_val_done">
          <div className="p-section_info_attr">出来済</div>
          <div className="p-section_info_value en">
            <span className="num">{formatNumber(order.filled_quantity)}</span>
          </div>
        </div>
        <div className="p-section_info_status">
          <div className="p-section_info_attr">取引状況</div>
          <div className="p-section_info_value">
            {statuses[order.order_status]}
          </div>
        </div>
        <div className="p-section_info_condition">
          <div className="p-section_info_attr">取引条件</div>
          <div className="p-section_info_value">
            {renderOrderDetailTypePrice(order)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetailHeader;
