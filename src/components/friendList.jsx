import styles from './friendList.module.css';
export default function FriendList({ friends }) {
    return (<ul className={styles.friendList}>
        {(friends.map(obj => {
        return (
        <li className={styles.item} key={obj.id}>
            <span className={styles.status} data-status={obj.isOnline}></span>
                <img className={styles.avatar} src={obj.avatar} alt="" width="48" />
                <p className={styles.name}>{obj.name}</p>
        </li>);
    })
        )}
</ul>)
}