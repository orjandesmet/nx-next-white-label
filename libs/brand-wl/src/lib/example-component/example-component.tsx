import styles from './example-component.module.scss';

/* eslint-disable-next-line */
export interface ExampleComponentProps {
  place: string;
}

export function ExampleComponent(props: ExampleComponentProps) {
  return (
    <div className={styles['container']}>
      <h1>This component is the White label default and loaded from {props.place}!</h1>
    </div>
  );
}

export default ExampleComponent;
