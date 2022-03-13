import styles from './Profile.module.css';
// import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

function Profile({user}) {
    const { stats } = user; 
    return (
        <div className={styles.profile}>
            <div className={styles.description}>
                <img
                    src={user.avatar}
                    alt="User avatar"
                    className={styles.avatar}
                />
                <p className={styles.name}>{user.username}</p>
                <p className={styles.tag}>@{user.tag}</p>
                <p className={styles.location}>{user.location}</p>
            </div>

            <ul className={styles.stats}>
                <li className={styles.stats__item}>
                    <span className={styles.stats__label}>Followers</span>
                    <span className={styles.stats__quantity}>{stats.followers}</span>
                </li>
                <li className={styles.stats__item}>
                    <span className={styles.stats__label}>Views</span>
                    <span className={styles.stats__quantity}>{stats.views}</span>
                </li>
                <li className={styles.stats__item}>
                    <span className={styles.stats__label}>Likes</span>
                    <span className={styles.stats__quantity}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
}

Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.string,
}


export default Profile;

// const profileContainer =
//     <div classNameName="description">
      
//         <img
//         src={user.avatar}
//         alt="User avatar"
//             classNameName="avatar"
//     />
//         <p classNameName="name">{user.username}</p>
//         <p classNameName="tag">{user.tag}</p>
//         <p classNameName="location">{user.location}</p>
   
//     </div>;

// //Markup
// function Painting() {
//     return (<div>
//       <img
//         src={user.avatar}
//         alt="User avatar"
//         classNameName="avatar"
//     />
//         <p classNameName="name">{user.username}</p>
//         <p classNameName="tag">{user.tag}</p>
//         <p classNameName="location">{user.location}</p>
   
//     </div>)
// }

// function StatsContainer() {
//     return (
//        <ul classNameName="stats">
//         <li>
//             <span classNameName="label">Followers</span>
//             <span classNameName="quantity">{user.stats.followers}</span>
//         </li>
//         <li>
//             <span classNameName="label">Views</span>
//             <span classNameName="quantity">{user.stats.views}</span>
//         </li>
//         <li>
//             <span classNameName="label">Likes</span>
//             <span classNameName="quantity">{user.stats.likes}</span>
//         </li>
//     </ul>
//     )
// }

// function ProfileMarkup() {
//     return (
//     <div classNameName="profile">
//             <Painting />
//             <StatsContainer />
//     </div>
//     );
// }

// const profile = ReactDOM.render(<ProfileMarkup />, document.querySelector('#root'));
// console.log(profile);