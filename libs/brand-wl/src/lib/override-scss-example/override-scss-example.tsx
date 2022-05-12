import styles from '@nx-next-white-label/brand/lib/override-scss-example/override-scss-example.module.scss';

/* eslint-disable-next-line */
export interface OverrideScssExampleProps {
  // styles?: Record<string, string>;
}

export function OverrideScssExample(props: OverrideScssExampleProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to OverrideScssExample!</h1>
    </div>
  );
}

export default OverrideScssExample;
