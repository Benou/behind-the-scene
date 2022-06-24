import styles from './HelloWorld.module.scss';

export default function HelloWorld() {
  const clickHandler = () => {};

  return (
    <section>
      <h1 className={styles['hello-world']}>Hello World!</h1>
      <button type="button" onClick={clickHandler}>
        click me!
      </button>
    </section>
  );
}
