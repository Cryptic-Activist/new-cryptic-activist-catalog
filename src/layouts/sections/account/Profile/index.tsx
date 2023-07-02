import { ProfileImage, ProfileInfo } from '@/components';
import styles from './index.module.scss';

const Profile = () => {
  return (
    <div className={styles.container}>
      <ProfileImage size="large" />
      <ProfileInfo />
    </div>
  );
};

export default Profile;
