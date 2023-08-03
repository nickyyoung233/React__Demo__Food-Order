import React, { useState, useEffect } from "react";
const AmountContext = React.createContext({
  totalMoney: 0,
  totalAmount: 0,
  orderNum: {},
});

export const AmountContextProvider = ({ children }) => {
  const [totalMoney, setTotalMoney] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [orderNum, setOrderNum] = useState({});
  const addOrderNumHandler = (key, num) => {
    setOrderNum((pre) => {
      if (typeof pre[key] != "undefined") pre[key] += num;
      else pre[key] = num;
      return pre;
    });
  };
  const totalAmountHandler = (amount) => {
    setTotalAmount(amount);
  };
  const totalMoneyHandler = (amount) => {
    setTotalMoney(amount);
  };
  return (
    <AmountContext.Provider
      value={{
        totalMoney: totalMoney,
        totalAmount: totalAmount,
        orderNum: orderNum,
        addOrderNum: addOrderNumHandler,
        setTotalAmount: totalAmountHandler,
        setTotalMoney: totalMoneyHandler,
      }}
    >
      {children}
    </AmountContext.Provider>
  );
};

export default AmountContext;
