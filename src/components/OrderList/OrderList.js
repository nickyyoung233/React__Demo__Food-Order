import Wrapper from "../UI/Wrapper";
import OrderItem from "./OrderItem";
import styles from "./OrderList.module.css";

const OrderList = () => {
  return (
    <Wrapper className={styles["order-list"]}>
      <OrderItem />
      <OrderItem />
      <OrderItem />
      <OrderItem />
      <OrderItem />
    </Wrapper>
  );
};
export default OrderList;
