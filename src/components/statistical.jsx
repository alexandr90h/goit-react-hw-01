import styles from './statistical.module.css';
export default function Statistical({ stats }) {
    return (<section className={styles.statistics}>
  <h2 className={styles.title}>Upload stats</h2>
        <ul className={styles.statList}>
            {stats.map(obj => {
                return (<li className={styles.item} key={obj.id}>
                <span className={styles.label}>{obj.label}</span>
                    <span className={styles.percentage}>{obj.percentage}%</span>
                </li>)
            })}
  </ul>
</section>)
} 