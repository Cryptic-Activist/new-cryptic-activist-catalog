import Link from 'next/link';
import { FC } from 'react';

import styles from './index.module.scss';
import { LinksProps } from './types';

const Links: FC<LinksProps> = ({ links }) => {
  return (
    <div className={styles.sideLinks}>
      {links.map(({ heading, links }) => (
        <div className={styles.linksContainer}>
          <h3 className={styles.heading}>{heading}</h3>
          <ul className={styles.list}>
            {links.map(({ label, href }) => (
              <li>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Links;
