import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';
import defaultImage from './default.jpeg';

const FriendList = ({ friends }) => (
  <ul className={styles.friendList}>
    {friends.map(friend => (
      <li key={friend.id} className={styles.item}>
        {friend.isOnline ? (
          <span className={styles.statusOnline}> </span>
        ) : (
          <span className={styles.statusOfline}> </span>
        )}

        <img class="avatar" src={friend.avatar} alt={friend.name} width="48" />
        <p class="name">{friend.name}</p>
      </li>
    ))}
  </ul>
);

FriendList.defaultProps = {
  name: '',
  isOnline: '',
  avatar: defaultImage,
};

FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendList;
