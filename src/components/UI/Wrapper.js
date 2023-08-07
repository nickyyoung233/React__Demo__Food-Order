import styles from "./Wrapper.module.css";

const Wrapper = ({ children, className, onClick }) => {
  return (
    <div onClick={onClick} className={`${styles.flex} ${className}`}>
      {children}
    </div>
  );
};
export default Wrapper;
