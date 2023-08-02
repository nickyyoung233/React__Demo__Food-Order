import styles from "./Wrapper.module.css";

const Wrapper = ({ children, className }) => {
  return <div className={`${styles.flex} ${className}`}>{children}</div>;
};
export default Wrapper;
