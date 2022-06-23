import styles from './HelloWorld.module.scss';

export default function HelloWorld() {
  return <h1 className={styles['hello-world']}>Hello World!</h1>;
}
