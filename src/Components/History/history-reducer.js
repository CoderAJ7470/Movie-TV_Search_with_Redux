import {HistoryActions} from "../History/history-actions";

const defaultState = {
  items: []
}

export function historyReducer(state = 0, action) {
  switch(action.type) {
    case HistoryActions.ADD:
      return {...state, items: [...state.items, action.payload.item]}
    default:
      return state;
  }
}