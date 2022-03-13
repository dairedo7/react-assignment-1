import styles from './FriendListItem.module.css';
import PropTypes from 'prop-types';

function FriendListItem({avatar, name, isOnline, id}) {
    // const { friend } = props;
    return (<li key={id} className={styles.item}>
        {isOnline ? (
            <span className={styles.isOnline}>{isOnline}</span>
        ) : (
                <span className={styles.isOffline}>{isOnline}</span>
        )}
        <img className={styles.avatar} src={avatar} alt="User avatar" />
        <p className={styles.name}>{name}</p>
    </li>
    )}

FriendListItem.propTypes = {
    isOnline: PropTypes.bool,
    avatar: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.number,
}

export default FriendListItem;