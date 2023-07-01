import Link from 'next/link';
import { FC, forwardRef } from 'react';

import styles from './index.module.scss';
import type { MenuListProps } from './types';

const MenuList: FC<MenuListProps> = forwardRef(({ items }, ref: any) => {
  return (
    <ul className={styles.container} ref={ref}>
      {items.map(({ label, href }, index) => (
        <li key={index}>
          <Link href={href}>{label}</Link>
        </li>
      ))}
    </ul>
  );
});

export default MenuList;
