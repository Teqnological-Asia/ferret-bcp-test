import React from 'react';
import { formatCurrency } from '../../utils';

export const depositAccountTypes = {
  '1': '普通',
  '2': '当座',
  '3': 'その他',
  '4': '貯蓄'
};

export const renderAmount = (amount) => {
  if (amount >= 0) {
    return `${formatCurrency(amount, 0)}円`;
  } else {
    return <span className="u-minus">{formatCurrency(amount, 0)}円</span>;
  }
}