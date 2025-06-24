import styles from '../components/Square.module.css';

function Square({ size = '200px', color = '#6C5CE7', children }) {
  return (
    <div
      className={styles.square}
      style={{ width: size, height: size, backgroundColor: color }}
    >
      {children}
    </div>
  );
}

export default Square;
