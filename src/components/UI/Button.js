import styles from "./Button.module.css";

const Button = ({ className, type, btnName, onClick }) => {
  return (
    <button
      className={`${styles.button} ${className}`}
      type={type}
      onClick={onClick}
    >
      {btnName}
    </button>
  );
};
export default Button;
