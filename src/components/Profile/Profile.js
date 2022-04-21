import styles from './Profile.module.css';
// import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

function Profile({ username, tag, location, avatar, stats }) {
  const { followers, views, likes } = stats;
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt="User avatar" className={styles.avatar} />
        <p className={styles.name}>{username}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.stats__item}>
          <span className={styles.stats__label}>Followers</span>
          <span className={styles.stats__quantity}>{followers}</span>
        </li>
        <li className={styles.stats__item}>
          <span className={styles.stats__label}>Views</span>
          <span className={styles.stats__quantity}>{views}</span>
        </li>
        <li className={styles.stats__item}>
          <span className={styles.stats__label}>Likes</span>
          <span className={styles.stats__quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
