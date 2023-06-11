import { Brand, Button } from '@/components';

import styles from './index.module.scss';

const NavigationBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Brand />
        <div className={styles.menu}>
          <Button label="Home" href="/" />
          <Button label="Vendors" href="/vendors" />
          <Button label="Help" href="/help" />
          <Button label="Log in" />
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
