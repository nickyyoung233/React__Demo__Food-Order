import Wrapper from "../UI/Wrapper";
import styles from "./Intro.module.css";

const Intro = () => {
  return (
    <Wrapper className={styles.intro}>
      <h2>餐厅简介</h2>
      <p>餐厅简介01</p>
      <p>餐厅简介02</p>
    </Wrapper>
  );
};
export default Intro;
