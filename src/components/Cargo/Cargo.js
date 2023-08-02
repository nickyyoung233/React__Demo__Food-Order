import Wrapper from "../UI/Wrapper";
import Button from "../UI/Button";
import CargoItem from "./CargoItem";
import CargoBottom from "./CargoBottom";
import styles from "./Cargo.module.css";

const Cargo = () => {
  return (
    <Wrapper className={styles.cargo}>
      <CargoItem />
      <CargoBottom />
      <Wrapper className={styles.buttons}>
        <Button className={styles.button} type="button" btnName="关闭" />
        <Button className={styles.button} type="submit" btnName="下单" />
      </Wrapper>
    </Wrapper>
  );
};

export default Cargo;
