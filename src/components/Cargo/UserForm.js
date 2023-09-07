import styles from "./UserForm.module.css";

const UserForm = ({ onCancel }) => {
  const confirmHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form className={styles.form}>
      <div className={styles.control}>
        <label htmlFor="username">昵称</label>
        <input type="text" id="username" name="username" required />
      </div>
      <div className={styles.control}>
        <label htmlFor="address">地址</label>
        <input type="text" id="address" name="address" required />
      </div>
      <div className={styles.control}>
        <label htmlFor="postal">邮编</label>
        <input type="text" id="postal" name="postal" required />
      </div>
      <div className={styles.control}>
        <label htmlFor="city">城市</label>
        <select name="city" id="city">
          <option value="Shanghai">上海</option>
          <option value="Beijing">北京</option>
          <option value="Shenzhen">深圳</option>
          <option value="Dalian">大连</option>
        </select>
      </div>
      <div className={styles.actions}>
        <button type="button" onClick={onCancel}>
          取消
        </button>
        <button className={styles.submit} onClick={confirmHandler}>
          确认信息
        </button>
      </div>
    </form>
  );
};
export default UserForm;
