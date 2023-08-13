import ReactDOM from "react-dom";
import { useContext, useEffect, useState } from "react";
import AmountContext from "../../context/amount-text";
import Wrapper from "../UI/Wrapper";
import styles from "./Header.module.css";

const Header = ({ setCargo }) => {
  const amountContext = useContext(AmountContext);
  const [isAnimate, setAnimationHandler] = useState(false);
  const _className = `${styles["cart-button"]} ${isAnimate && styles.bump}`;
  useEffect(() => {
    if (amountContext.totalAmount === 0) return;
    setAnimationHandler(true);
    const timer = setTimeout(() => {
      setAnimationHandler(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [amountContext.totalAmount]);
  const header = (
    <Wrapper className={styles.header}>
      <h1>订餐Demo</h1>
      <Wrapper className={_className} onClick={() => setCargo(true)}>
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
