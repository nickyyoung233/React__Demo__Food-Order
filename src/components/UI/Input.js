import { Fragment } from "react";
import styles from "./Input.module.css";
const Input = ({ labelClass, labelName, inputs }) => {
  return (
    <Fragment>
      <label className={labelClass} htmlFor={inputs.id}>
        {labelName}
      </label>
      <input {...inputs} />
    </Fragment>
  );
};
export default Input;
