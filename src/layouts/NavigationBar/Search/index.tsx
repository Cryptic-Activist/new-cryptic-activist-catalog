import { FaSearch } from 'react-icons/fa';
import styles from './index.module.scss';

const Search = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {/* <input type="text" className={styles.input} placeholder="Search..." /> */}
        <button className={styles.button}>
          <FaSearch size={18} />
        </button>
      </div>
    </div>
  );
};

export default Search;
