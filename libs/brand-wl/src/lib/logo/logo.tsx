import styles from './logo.module.scss';

/* eslint-disable-next-line */
export interface LogoProps {}

export function Logo(props: LogoProps) {
  return (
    <div className={styles['container']}>
      <img src="http://placekitten.com/g/200/100" width={200} height={100} alt="Logo" />
    </div>
  );
}

export default Logo;
