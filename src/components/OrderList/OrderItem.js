import { useRef, useContext, useEffect } from "react";
import AmountContext from "../../context/amount-text";
import Wrapper from "../UI/Wrapper";
import Button from "../UI/Button";
import Input from "../UI/Input";
import styles from "./OrderItem.module.css";

const OrderItem = ({ title, description, price, id }) => {
  const amountContext = useContext(AmountContext);
  // //设置初次价格
  useEffect(() => {
    amountContext.initOrderMoney(id, price);
  }, [amountContext, id, price]);

  const num = useRef();
  const amountHandler = () => {
    if (+num.current.value > 0) {
      amountContext.addOrderNum(id, +num.current.value);
      num.current.value = "";
    }
  };
  return (
    <Wrapper className={styles["order-item"]}>
      <div className={styles["order-info"]}>
        <h3>{title}</h3>
        <p>{description}</p>
        <p className={styles.price}>￥{price}</p>
      </div>
      <Wrapper className={styles["order-num"]}>
        <div className={styles["order-count"]}>
          <Input
            labelClass={styles.label}
            labelName="数量"
            inputs={{
              className: styles.input,
              type: "number",
              min: "0",
              max: "5",
              step: "1",
              id: id,
              ref: num,
            }}
          />
        </div>
        <Button
          className={styles.button}
          type="button"
          btnName="+ 添加"
          onClick={amountHandler}
        />
      </Wrapper>
    </Wrapper>
  );
};
export default OrderItem;
