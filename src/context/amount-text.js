import React, { useState, useEffect } from "react";
const AmountContext = React.createContext({
  totalMoney: 0,
  totalAmount: 0,
  orderNum: {},
  orderMoney: {},
  initOrderMoney: () => {},
  addOrderNum: () => {},
  declineOrderNum: () => {},
});

export const AmountContextProvider = ({ children }) => {
  const [totalMoney, setTotalMoney] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [orderNum, setOrderNum] = useState({});
  const [orderMoney, setOrderMoney] = useState({});
  console.log("re-run");
  const initOrderMoneyHandler = (id, money) => {
    setOrderMoney((pre) => {
      pre[id] = money;
      return pre;
    });
  };
  const addOrderNumHandler = (key, num) => {
    console.log("add");
    setOrderNum((pre) => {
      let tempKey = typeof pre[key] != "undefined" ? pre[key] + num : num;
      const newObj = { ...pre, [key]: tempKey };
      return newObj;
    });
  };
  const declineOrderNumHandler = (key, num) => {
    console.log("decline");
    setOrderNum((pre) => {
      let tempKey = pre[key] > 0 ? pre[key] - num : 0;
      const newObj = { ...pre, [key]: tempKey };
      return newObj;
    });
  };
  useEffect(() => {
    setTotalAmount(() => {
      let amount = 0;
      for (const key in orderNum) {
        amount += orderNum[key];
      }
      console.log("amount", amount);
      return amount;
    });
    setTotalMoney(() => {
      let money = 0;
      for (const key in orderNum) {
        money += orderMoney[key] * orderNum[key];
      }
      console.log("money", money);
      return money;
    });
  }, [orderNum, orderMoney]);

  const contextValue = {
    totalMoney: totalMoney,
    totalAmount: totalAmount,
    orderNum: orderNum,
    orderMoney: orderMoney,
    initOrderMoney: initOrderMoneyHandler,
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
