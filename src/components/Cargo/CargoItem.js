import Wrapper from "../UI/Wrapper";
import Button from "../UI/Button";
import styles from "./CargoItem.module.css";

const CargoItem = () => {
  return (
    <Wrapper className={styles["cargo-item"]}>
      <div className={styles["item-info"]}>
        <h4>商品名</h4>
        <Wrapper>
          <p className={styles.price}>单价</p>
          <input type="text" value="x2" />
        </Wrapper>
      </div>
      <Wrapper className={styles["item-count"]}>
        <Button className={styles.button} type="button" btnName="-" />
        <Button className={styles.button} type="button" btnName="+" />
      </Wrapper>
    </Wrapper>
  );
};

export default CargoItem;
