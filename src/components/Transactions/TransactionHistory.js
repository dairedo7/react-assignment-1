import styles from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

function TransactionHistory({ item }) {
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr className={styles.table__header}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {item.map(({ id, type, amount, currency }) => (
          <tr key={id} className={styles.table__data}>
            <td className={styles.table__data_type}>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
