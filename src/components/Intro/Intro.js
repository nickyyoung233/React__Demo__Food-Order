import Wrapper from "../UI/Wrapper";
import styles from "./Intro.module.css";

const Intro = () => {
  return (
    <Wrapper className={styles.intro}>
      <h2>餐厅简介</h2>
      <p>
        本店饮食设施种类丰富。既可在店内用餐，也可以利用此快捷外卖服务，或在泳池边的开放场地上，享受烧烤的乐趣。
      </p>
      <p>除此以外，还有应季水果供应。</p>
    </Wrapper>
  );
};
export default Intro;
