import { Plus } from 'lucide-react';
import { FC } from 'react';

import { Button } from '@/components';
import styles from './index.module.scss';
import { ProfileNameUsername } from './types';

const ProfileNameUsername: FC<ProfileNameUsername> = ({ names, username }) => {
  const fullname = [names?.firstName ?? '', names?.lastName ?? ''].join(' ');
  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <h1 className={styles.name}>{fullname}</h1>
        <h2 className={styles.username}>{username}</h2>
      </div>
      <Button href="/offer/create" theme="ghost">
        <p>Create Offer</p>
        <Plus size={20} />
      </Button>
    </div>
  );
};

export default ProfileNameUsername;
