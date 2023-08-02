import Wrapper from "../UI/Wrapper";
import styles from "./CargoBottom.module.css";

const CargoBottom = () => {
  return (
    <Wrapper className={styles["cargo-total"]}>
      <h4>总价</h4>
      <p>￥100</p>
    </Wrapper>
  );
};

export default CargoBottom;
