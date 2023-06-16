import { Brand } from '@/components';

import Search from '@/components/Search';
import Menu from './Menu';
import styles from './index.module.scss';

const NavigationBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Brand />
        <div className={styles.searchMenu}>
          <Search />
          <Menu />
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
