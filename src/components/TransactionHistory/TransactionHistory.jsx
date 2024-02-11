import clsx from "clsx";
import styles from "./TransactionHistory.module.css";

const firstLetterToUppercase = (type) => {
  return type.charAt(0).toUpperCase() + type.slice(1);
};

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.container}>
      <thead className={styles.thead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((el, index) => (
          <tr key={el.id} className={clsx(styles.trow, { [styles.trowDoubles]: index % 2 !== 0 })}>
            <td>{firstLetterToUppercase(el.type)}</td>
            <td>{el.amount}</td>
            <td>{el.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
