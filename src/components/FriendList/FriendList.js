import FriendListItem from './FriendListItem/FriendListItem';
import styles from './FriendList.module.css';

import PropTypes from 'prop-types';

function FriendList({ friends }) {
  return (
    <ul className={styles.friend__list}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
