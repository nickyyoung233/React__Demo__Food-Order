import { Fragment } from "react";
import Wrapper from "./components/UI/Wrapper";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import OrderList from "./components/OrderList/OrderList";
import Cargo from "./components/Cargo/Cargo";

function App() {
  return (
    <Fragment>
      <Header />

      <Wrapper className="background">
        <Intro />
        <OrderList />
      </Wrapper>

      <Cargo />
    </Fragment>
  );
}

export default App;
