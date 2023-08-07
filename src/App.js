import { useState } from "react";
import { AmountContextProvider } from "./context/amount-text";
import Wrapper from "./components/UI/Wrapper";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import OrderList from "./components/OrderList/OrderList";
import Cargo from "./components/Cargo/Cargo";

function App() {
  const orderList = [
    {
      title: "北海道寿司",
      description: "寿司简介",
      price: 48,
      id: "food1",
    },
    {
      title: "新疆牛肉拉面",
      description: "牛肉拉面简介",
      price: 68,
      id: "food2",
    },
    {
      title: "地方康家燃面",
      description: "康家燃面简介",
      price: 48,
      id: "food3",
    },
    {
      title: "应季水果",
      description: "应季水果简介",
      price: 88,
      id: "food4",
    },
  ];
  const [showCargo, setCargo] = useState(false);
  const setCargoState = (isShowing) => {
    console.log("in");
    setCargo(!!isShowing);
  };

  return (
    <AmountContextProvider>
      <Header setCargo={setCargoState} />

      <Wrapper className="background">
        <Intro />
        <OrderList list={orderList} />
      </Wrapper>

      {showCargo && <Cargo setCargo={setCargoState} list={orderList} />}
    </AmountContextProvider>
  );
}

export default App;
