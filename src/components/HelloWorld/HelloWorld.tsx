import styles from './HelloWorld.module.scss';

export default function HelloWorld() {
  return (
    <section>
      <header>
        <h1 className={styles['hello-world']}>Hello World!</h1>
      </header>
    </section>
  );
}
