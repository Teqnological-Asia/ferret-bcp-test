import { LOAD_MARGIN_SUCCESS, LOAD_STOCK_MARGIN_SUCCESS, CHANGE_STOCK_MARGIN_POSITION } from '../constants/margin';

const initialState = {
  marginPositions: [],
  stock: null
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
    default:
      return state;
  }
}

export default marginReducer;
