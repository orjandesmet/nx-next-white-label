import { ExampleComponent, exampleFunction, OverrideScssExample } from '@nx-next-white-label/brand';
import { Footer, Header } from '@nx-next-white-label/components';
import styles from './index.module.scss';

export function Index() {
  const result = exampleFunction();
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <div className={styles.page}>
      <Header />
      <div>{result.join(', ')}</div>
      <ExampleComponent place="INDEX" />
      <OverrideScssExample />
      <Footer />
    </div>
  );
}

export default Index;
