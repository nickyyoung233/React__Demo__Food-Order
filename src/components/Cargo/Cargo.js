import { Fragment } from "react";
import ReactDOM from "react-dom";
import Wrapper from "../UI/Wrapper";
import Button from "../UI/Button";
import CargoItem from "./CargoItem";
import CargoBottom from "./CargoBottom";
import styles from "./Cargo.module.css";

const Cargo = () => {
  const cargo = (
    <Wrapper className={styles.cargo}>
      <CargoItem />
      <CargoBottom />
      <Wrapper className={styles.buttons}>
        <Button className={styles.button} type="button" btnName="关闭" />
        <Button className={styles.button} type="submit" btnName="下单" />
      </Wrapper>
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
