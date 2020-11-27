export default function StaticticalItem({id,label,percentage}) {
    return(<li className={styles.item} key={id}>
                <span className={styles.label}>{label}</span>
                    <span className={styles.percentage}>{percentage}%</span>
                </li>)
}