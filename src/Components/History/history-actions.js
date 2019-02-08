export const HistoryActions = {
  ADD: "[user] wants to add a result to history"
}

export function addToHistory(item) {
  return {
    type: HistoryActions.ADD,
    payload: {
      item
    }
  };
}