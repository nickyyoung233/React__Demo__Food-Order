import { Fragment, useContext, useState } from "react";
import AmountContext from "../../context/amount-text";
import ReactDOM from "react-dom";
import Wrapper from "../UI/Wrapper";
import Button from "../UI/Button";
import CargoItem from "./CargoItem";
import CargoBottom from "./CargoBottom";
import UserForm from "./UserForm";
import styles from "./Cargo.module.css";

const Cargo = ({ setCargo }) => {
  const amountContext = useContext(AmountContext);
  const hasItems = amountContext.totalAmount > 0 ? true : false;
  const [isOrder, setIsOrder] = useState(false);
  const cargo = (
    <Wrapper className={styles.cargo}>
      {/* 下订单 */}
      {!isOrder && (
        <Fragment>
          <Wrapper className={styles["cargo-items"]}>
            {amountContext.items
              .filter((item) => item.amount > 0)
              .map((item) => {
                return (
                  <CargoItem
                    key={item.id}
                    title={item.title}
                    price={item.price}
                    id={item.id}
                  />
                );
              })}
          </Wrapper>
          <CargoBottom />
          <Wrapper className={styles.buttons}>
            <Button
              onClick={() => setCargo(false)}
              className={styles.button}
              type="button"
              btnName="关闭"
            />
            {hasItems && (
              <Button
                onClick={() => setIsOrder(true)}
                className={styles.button}
                type="submit"
                btnName="下单"
              />
            )}
          </Wrapper>
        </Fragment>
      )}
      {/* 确认信息 */}
      {isOrder && <UserForm onCancel={() => setCargo(false)} />}
    </Wrapper>
  );
  const backdrop = <div className={styles.backdrop}></div>;

  return (
    <Fragment>
      {ReactDOM.createPortal(
        backdrop,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(cargo, document.getElementById("overlay-root"))}
    </Fragment>
  );
};

export default Cargo;
