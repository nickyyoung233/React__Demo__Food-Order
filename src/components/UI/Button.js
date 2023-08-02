import styles from "./Button.module.css";

const Button = ({ className, type, btnName }) => {
  return (
    <button className={`${styles.button} ${className}`} type={type}>
      {btnName}
    </button>
  );
};
export default Button;
