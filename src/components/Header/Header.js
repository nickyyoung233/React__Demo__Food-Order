import ReactDOM from "react-dom";
import Wrapper from "../UI/Wrapper";
import styles from "./Header.module.css";

const Header = () => {
  const header = (
    <Wrapper className={styles.header}>
      <h1>订餐Demo</h1>
      <Wrapper className={styles["cart-button"]}>
        <i></i>
        <span>购物车</span>
        <div className={styles["cart-num"]}>99+</div>
      </Wrapper>
    </Wrapper>
  );
  return ReactDOM.createPortal(header, document.getElementById("fixed-root"));
};

export default Header;
