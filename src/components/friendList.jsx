export default function FriendList({ friends }) {
    return (friends.map(obj => {
        return (<li class="item" key={obj.id}>
            <span class="status" data-status={obj.isOnline}></span>
            <img class="avatar" src={obj.avatar} alt="" width="48" />
            <p class="name">{obj.name}</p>
        </li>);
    })
        );
}