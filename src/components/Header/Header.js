import Wrapper from "../UI/Wrapper";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <Wrapper className={styles.header}>
      <h1>订餐Demo</h1>
      <Wrapper className={styles["cart-button"]}>
        <i>ICON</i>
        <span>购物车</span>
        <div>NUMBERS</div>
      </Wrapper>
    </Wrapper>
  );
};

export default Header;
