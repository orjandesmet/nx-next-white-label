import { componentConfig, ExampleComponent } from '@nx-next-white-label/brand';
import { A } from 'test';
import styles from './footer.module.scss';

/* eslint-disable-next-line */
export interface FooterProps {}

export function Footer(props: FooterProps) {
  return (
    <div className={styles['container']}>
      <div>Footer component is brand-agnostic in @nx-next-white-label/components lib</div>
      <div style={componentConfig.footer}>This span-block in the footer uses brand-specific styling.</div>
      <ExampleComponent place="FOOTER" />
      <A />
    </div>
  );
}

export default Footer;
