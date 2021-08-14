import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';
import defaultImage from './default.jpeg';

const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt="Аватар пользователя" class="avatar" />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li>
          <span class="label">Followers</span>
          <span className={styles.quantity}>{stats.followers}</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span className={styles.quantity}>{stats.views}</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span className={styles.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.defaultProps = {
  avatar: defaultImage,
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
};

export default Profile;
