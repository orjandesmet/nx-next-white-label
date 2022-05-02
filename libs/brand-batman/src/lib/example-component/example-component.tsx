import { ExampleComponentProps } from '@nx-next-white-label/brand-wl';
import styles from './example-component.module.scss';

export function ExampleComponent(props: ExampleComponentProps) {
  return (
    <div className={styles['container']}>
      <h1>This is some real BAT-tech in {props.place}!</h1>
    </div>
  );
}

export default ExampleComponent;
