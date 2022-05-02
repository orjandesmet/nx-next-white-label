import { ExampleComponent as WlExampleComponent, ExampleComponentProps } from '@nx-next-white-label/brand-wl';
import styles from './example-component.module.scss';

export function ExampleComponent(props: ExampleComponentProps) {
  return (
    <div className={styles['container']}>
      <h1>This component is NEUTRAL-specific, replacing white label default and loaded from {props.place}!</h1>
      {props.place !== "FOOTER" && <WlExampleComponent place="NEUTRAL-component" />}
    </div>
  );
}

export default ExampleComponent;
