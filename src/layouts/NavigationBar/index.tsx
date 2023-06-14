import { Brand } from '@/components';

import styles from './index.module.scss';
import Menu from './Menu';

const NavigationBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Brand />
        <Menu />
      </div>
    </nav>
  );
};

export default NavigationBar;
