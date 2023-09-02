import { useState, useCallback, useEffect } from "react";
import { AmountContextProvider } from "./context/amount-text";
import Wrapper from "./components/UI/Wrapper";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import OrderList from "./components/OrderList/OrderList";
import Cargo from "./components/Cargo/Cargo";

function App() {
  const [orderList, setOrderList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState();

  const fetchData = useCallback(async () => {
    const res = await fetch(
      "https://food-order-b74c2-default-rtdb.asia-southeast1.firebasedatabase.app/orderList.json"
    );
    const data = await res.json();
    console.log(res);
    if (!res.ok || !data) {
      setIsError(true);
      setIsLoading(false);
      // throw new Error("出错了");
      return;
    }
    setOrderList(data);
    setIsLoading(false);
    setIsError(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const [showCargo, setCargo] = useState(false);
  const setCargoState = (isShowing) => {
    setCargo(!!isShowing);
  };

  return (
    <AmountContextProvider>
      <Header setCargo={setCargoState} />

      <Wrapper className="background">
        <Intro />
        {!isError && !isLoading && <OrderList list={orderList} />}
        {!isError && isLoading && <p style={{ color: "#fff" }}>加载中...</p>}
        {isError && !isLoading && <p style={{ color: "#fff" }}>暂无数据</p>}
      </Wrapper>

      {showCargo && <Cargo setCargo={setCargoState} list={orderList} />}
    </AmountContextProvider>
  );
}

export default App;
