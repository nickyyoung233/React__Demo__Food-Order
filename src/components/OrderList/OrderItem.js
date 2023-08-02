import Wrapper from "../UI/Wrapper";
import Button from "../UI/Button";
import styles from "./OrderItem.module.css";

const OrderItem = () => {
  return (
    <Wrapper className={styles["order-item"]}>
      <div className={styles["order-info"]}>
        <h3>寿司</h3>
        <p>寿司简介</p>
        <p className="price">￥100</p>
      </div>
      <Wrapper className={styles["order-num"]}>
        <div className={styles["order-count"]}>
          <label htmlFor="food1">数量</label>
          <input type="number" min="0" id="food1" />
        </div>
        <Button className={styles.button} type="button" btnName="+ 添加" />
      </Wrapper>
    </Wrapper>
  );
};
export default OrderItem;
