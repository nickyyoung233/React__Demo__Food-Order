import { useContext } from "react";
import AmountContext from "../../context/amount-text";
import Wrapper from "../UI/Wrapper";
import styles from "./CargoBottom.module.css";

const CargoBottom = () => {
  const amountContext = useContext(AmountContext);
  return (
    <Wrapper className={styles["cargo-total"]}>
      <h4>总价</h4>
      <p>￥{amountContext.totalMoney}</p>
    </Wrapper>
  );
};

export default CargoBottom;
