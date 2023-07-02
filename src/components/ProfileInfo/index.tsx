'use client';
import { useUser } from '@/hooks';
import { formatFullDate } from '@/utils';
import styles from './index.module.scss';

const ProfileInfo = () => {
  const { user } = useUser(false);

  return (
    <div className={styles.container}>
      <div className={styles.header}>Profile Information</div>
      <ul className={styles.list}>
        <li>
          Languages:{' '}
          {user.data?.languages.map((language, index) => (
            <span key={index}>{language.name}</span>
          ))}
        </li>
        <li>
          Joined on: <span>{formatFullDate(user.data?.createdAt)}</span>
        </li>
      </ul>
    </div>
  );
};

export default ProfileInfo;
