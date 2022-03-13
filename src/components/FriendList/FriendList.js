import FriendListItem from './FriendListItem';
import styles from './FriendList.module.css';

import PropTypes from 'prop-types';

function FriendList({ friends }) {

    return (
            <ul className={styles.friend__list}>
                {friends.map(({id, avatar, name, isOnline}) => (
                    <FriendListItem
                        key={id}
                        avatar={avatar}
                        name={name}
                        isOnline={isOnline}
                    />
                    
                        ))}
        </ul>
    )}

FriendList.propTypes = {
    isOnline: PropTypes.bool,
    avatar: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.number,
}

export default FriendList;