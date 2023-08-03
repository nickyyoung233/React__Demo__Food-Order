import Wrapper from "../UI/Wrapper";
import OrderItem from "./OrderItem";
import styles from "./OrderList.module.css";

const OrderList = ({ list }) => {
  return (
    <Wrapper className={styles["order-list"]}>
      {list.map((item) => (
        <OrderItem
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          price={item.price}
        />
      ))}
    </Wrapper>
  );
};
export default OrderList;
