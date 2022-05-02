import { componentConfig, Logo } from '@nx-next-white-label/brand';
import styles from './header.module.scss';

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <div className={styles['container']}>
      <Logo />
      <div style={componentConfig.header}>
        <span>This span-block in the header uses brand-specific styling.</span>
      </div>
      <div className={styles['subheader']}>Header component is brand-agnostic in @nx-next-white-label/components lib</div>
    </div>
  );
}

export default Header;
