import clsx from "clsx";
import styles from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table>
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
            <td>{el.type}</td>
            <td>{el.amount}</td>
            <td>{el.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
