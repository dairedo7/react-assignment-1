import styles from './FriendListItem.module.css';
import PropTypes from 'prop-types';

function FriendListItem({ avatar, name, isOnline }) {
  const status = isOnline ? styles.isOnline : styles.isOffline;

  return (
    <li className={styles.item}>
      <span className={status}></span>
      <img className={styles.avatar} src={avatar} alt="User avatar" />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendListItem;
