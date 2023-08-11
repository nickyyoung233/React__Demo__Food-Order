import React, { useReducer } from "react";
const AmountContext = React.createContext({
  totalMoney: 0,
  totalAmount: 0,
  addOrderNum: () => {},
  declineOrderNum: () => {},
});

const defaultTotals = {
  totalMoney: 0,
  totalAmount: 0,
  items: [],
};
const totalsReducer = (state, action) => {
  if (action.type === "add") {
    const _index = state.items.findIndex((item) => item.id === action.item.id);
    let updateItem = {};
    if (_index > -1) {
      updateItem = [...state.items];
      updateItem[_index].amount += action.item.amount;
    } else {
      updateItem = state.items.concat(action.item);
    }
    return {
      totalMoney: state.totalMoney + action.item.price * action.item.amount,
      totalAmount: state.totalAmount + action.item.amount,
      items: updateItem,
    };
  } else if (action.type === "remove") {
    const _index = state.items.findIndex((item) => item.id === action.id);
    const updateItem = [...state.items];
    updateItem[_index].amount = updateItem[_index].amount - action.amount;
    return {
      totalMoney: state.totalMoney - updateItem[_index].price * action.amount,
      totalAmount: state.totalAmount - action.amount,
      items: updateItem,
    };
  }
};

export const AmountContextProvider = ({ children }) => {
  const [totals, dispatchTotals] = useReducer(totalsReducer, defaultTotals);

  console.log("re-run");
  const addOrderNumHandler = (item) => {
    dispatchTotals({ type: "add", item: item });
  };
  const declineOrderNumHandler = (id, amount) => {
    dispatchTotals({ type: "remove", id: id, amount: amount });
  };

  const contextValue = {
    totalMoney: totals.totalMoney,
    totalAmount: totals.totalAmount,
    items: totals.items,
    addOrderNum: addOrderNumHandler,
    declineOrderNum: declineOrderNumHandler,
  };
  return (
    <AmountContext.Provider value={contextValue}>
      {children}
    </AmountContext.Provider>
  );
};

export default AmountContext;
