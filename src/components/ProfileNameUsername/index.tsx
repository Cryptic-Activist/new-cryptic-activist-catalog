import { FC } from 'react';

import styles from './index.module.scss';
import { ProfileNameUsername } from './types';

const ProfileNameUsername: FC<ProfileNameUsername> = ({ names, username }) => {
  const fullname = [names?.firstName ?? '', names?.lastName ?? ''].join(' ');
  return (
    <div className={styles.container}>
      <h1 className={styles.name}>{fullname}</h1>
      <h2 className={styles.username}>{username}</h2>
    </div>
  );
};

export default ProfileNameUsername;
