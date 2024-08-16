import styles from './styles';

function Card({ nombre, marca }) {
  return (
    <div style={styles.card}>
      <h2 style={styles.cardTitle}>Hola {nombre}!</h2>
      <p style={styles.cardText}>Gracias por contestar nuestro form</p>
      <p style={styles.cardText}>¡A nosotros también nos gusta mucho <span>{marca}!</span></p>
    </div>
  );
}

export default Card;
