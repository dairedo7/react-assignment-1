import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function Statistics(props) {
    const { stats } = props;

    const view = stats.map(({ id, label, percentage }) => (
        <li key={id} className={styles.item} style={{ background: getRandomHexColor() }}>
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}</span>
        </li>
    ));

    return (
        <section className = {styles.statistics}>
            {props.title && <h2 className={styles.title}>{props.title}</h2>}
            <ul className={styles.stat__list}>{view}</ul>
        </section>

  );
}

Statistics.propType = {
    id: PropTypes.number,
    label: PropTypes.string,
    percentage: PropTypes.number,
}

export default Statistics;