import Square from '../components/Square';
import styles from '../pages/Home.module.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.map}>
        <div className={styles.central}>
          <Square size="250px" color="#6C5CE7">
            REACT - I
          </Square>
        </div>

        {/* Cuadro superior */}
        <Link to="/nivel-basico" className={styles.link}>
          <Square size="120px" color="#00cec9">Nivel Básico</Square>
        </Link>

        {/* Cuadro izquierdo */}
        <Link to="/nivel-2" className={styles.link}>
          <Square size="120px" color="#00cec9">Tema 1</Square>
        </Link>

        {/* Cuadro derecho */}
        <Link to="/nivel-3" className={styles.link}>
          <Square size="120px" color="#00cec9">Tema 2</Square>
        </Link>

        {/* Cuadro inferior izquierdo */}
        <Link to="/nivel-4" className={styles.link}>
          <Square size="120px" color="#00cec9">Tema 3</Square>
        </Link>

        {/* Cuadro inferior derecho */}
        <Link to="/nivel-5" className={styles.link}>
          <Square size="120px" color="#00cec9">Tema 4</Square>
        </Link>
      </div>
    </div>
  );
}

export default Home;
