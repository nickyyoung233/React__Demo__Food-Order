import ReactDOM from "react-dom";
import { useContext } from "react";
import AmountContext from "../../context/amount-text";
import Wrapper from "../UI/Wrapper";
import styles from "./Header.module.css";

const Header = ({ setCargo }) => {
  const amountContext = useContext(AmountContext);
  const header = (
    <Wrapper className={styles.header} onClick={() => setCargo(true)}>
      <h1>订餐Demo</h1>
      <Wrapper className={styles["cart-button"]}>
        <i></i>
        <span>购物车</span>
        <div className={styles["cart-num"]}>
          {amountContext.totalAmount > 99 ? "99+" : amountContext.totalAmount}
        </div>
      </Wrapper>
    </Wrapper>
  );
  return ReactDOM.createPortal(header, document.getElementById("fixed-root"));
};

export default Header;
