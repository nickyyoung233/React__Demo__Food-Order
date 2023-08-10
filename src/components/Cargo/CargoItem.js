import { useContext } from "react";
import AmountContext from "../../context/amount-text";
import Wrapper from "../UI/Wrapper";
import Button from "../UI/Button";
import Input from "../UI/Input";
import styles from "./CargoItem.module.css";

const CargoItem = ({ title, price, id }) => {
  const amountContext = useContext(AmountContext);

  return (
    <Wrapper className={styles["cargo-item"]}>
      <div className={styles["item-info"]}>
        <h4>{title}</h4>
        <Wrapper>
          <Input
            labelClass={styles.price}
            labelName={`¥${price}`}
            inputs={{
              className: styles.input,
              type: "text",
              value: `x${amountContext.orderNum[id]}`,
              readOnly: true,
            }}
          />
        </Wrapper>
      </div>
      <Wrapper className={styles["item-count"]}>
        <Button
          className={styles.button}
          type="button"
          btnName="-"
          onClick={() => amountContext.declineOrderNum(id, 1)}
        />
        <Button
          className={styles.button}
          type="button"
          btnName="+"
          onClick={() => amountContext.addOrderNum(id, 1)}
        />
      </Wrapper>
    </Wrapper>
  );
};

export default CargoItem;
