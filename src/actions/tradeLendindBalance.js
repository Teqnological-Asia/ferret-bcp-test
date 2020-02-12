import axios from "axios";
import qs from "qs";
import { LOAD_TRADE_LENDING_BALANCE_SUCCESS } from "../constants/tradeLendingBalance";
import { getAuthHeader } from "./auth";
import { setLoading } from "../actions/loading";
import { pickByKeys } from "../utils";

export const loadTradeLendingBalanceSuccess = tradeLendingBalance => {
  return {
    type: LOAD_TRADE_LENDING_BALANCE_SUCCESS,
    tradeLendingBalance
  };
};

export const loadTradeLendingBalanceRequest = params => {
  return dispatch => {
    dispatch(setLoading(true));
    const request = axios.get(
      `${process.env.REACT_APP_STOCK_LENDING_API_HOST}/v1/productLendingBalances`,
      {
        params: params,
        paramsSerializer: params =>
          qs.stringify(params, { arrayFormat: "repeat" }),
        headers: getAuthHeader()
      }
    );

    return request.then(response => {
      const data = response.data.data;
      const dataitems = [
        {
          productCode: "8601",
          lendingSide: "LEND",
          lendingRecallType: "CALLABLE",
          settledQuantity: "1000",
          tradeQuantity: "1000",
          valuationAmount: "100000",
          lendingFee: "0.27"
        },
        {
          productCode: "8602",
          lendingSide: "LEND",
          lendingRecallType: "CALLABLE",
          settledQuantity: "0",
          tradeQuantity: "1000",
          valuationAmount: "0",
          lendingFee: "0.00"
        },
        {
          productCode: "8603",
          lendingSide: "LEND",
          lendingRecallType: "CALLABLE",
          settledQuantity: "1000",
          tradeQuantity: "0",
          valuationAmount: "0",
          lendingFee: "0.00"
        },
        {
          productCode: "8603",
          lendingSide: "LEND",
          lendingRecallType: "CALLABLE",
          settledQuantity: "100",
          tradeQuantity: "100",
          valuationAmount: "10000",
          lendingFee: "0.03"
        }
      ];
      const filtedData = pickByKeys(dataitems, [
        "productCode",
        "tradeQuantity"
      ]);
      const finalData = filtedData.map(item => {
        // const res = await axios.get(
        //   `https://stock-master-api.ikinari-steak.net/masters`,
        //   {
        //     params: {
        //       code: item.productCode,
        //       field: "NAME"
        //     },
        //     // paramsSerializer: params =>
        //     //   qs.stringify(params, { arrayFormat: "repeat" }),
        //     headers: getAuthHeader()
        //   }
        // );
        return {
          ...item,
          name: "hihi"
        }
      });
      console.log(finalData);
      dispatch(loadTradeLendingBalanceSuccess(data.items));
      dispatch(setLoading(false));
    });
  };
};
