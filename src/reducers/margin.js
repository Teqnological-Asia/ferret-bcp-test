import {
  LOAD_MARGIN_SUCCESS,
  LOAD_STOCK_MARGIN_SUCCESS,
  CHANGE_STOCK_MARGIN_POSITION,
  CLICK_MARGIN_BUTTON,
  NEW_MARGIN_SWAP_SUCCESS,
  CHANGE_MARGIN_ORDER_FORM,
  SAVE_MARGIN_ORDER_SEND_PARAMS,
  LOAD_ACCOUNT_TYPE_SUCCESS
} from '../constants/margin';

const initialState = {
  marginPositions: [],
  buttonType: null,
  stock: null,
  marginOrder: null,
  marginOrderForm: null,
  marginOrderSendParams: null,
  isGeneral: false
};

export const marginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MARGIN_SUCCESS:
      return {
        ...state,
        marginPositions: action.marginPositions
      };
    case LOAD_STOCK_MARGIN_SUCCESS:
      return {
        ...state,
        stock: action.stockMargin
      };
    case CHANGE_STOCK_MARGIN_POSITION: {
      const oldPositions = state.stock.positions
      const pos = oldPositions.findIndex(position => position.position_id === action.newPosition.position_id)
      let newPositions = oldPositions.slice(0, pos)
      newPositions.push(action.newPosition)
      newPositions = newPositions.concat(oldPositions.slice(pos + 1, oldPositions.length))
      return {
        ...state,
        stock: {
          ...state.stock,
          positions: newPositions
        }
      }
    }
    case CLICK_MARGIN_BUTTON: {
      return {
        ...state,
        buttonType: action.buttonType
      }
    }
    case NEW_MARGIN_SWAP_SUCCESS: {
      return {
        ...state,
        marginOrder: action.marginOrder
      }
    }
    case CHANGE_MARGIN_ORDER_FORM: {
      return {
        ...state,
        marginOrderForm: {
          ...action.orderForm
        }
      }
    }
    case SAVE_MARGIN_ORDER_SEND_PARAMS: {
      return {
        ...state,
        marginOrderSendParams: action.orderSendParams
      }
    }
    case LOAD_ACCOUNT_TYPE_SUCCESS: {
      return {
        ...state,
        isGeneral: action.isGeneral
      }
    }
    default:
      return state;
  }
}

export default marginReducer;
