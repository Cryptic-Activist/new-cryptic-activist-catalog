import Brand from '@/components/Brand';
import styles from './index.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Brand />
      </div>
    </footer>
  );
};

export default Footer;
