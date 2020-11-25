import Profile from './components/profile';
import Statistical from './components/statistical';
import user from './user.json';
import statisticalData from './statistical-data.json';
import friends from './friends.json';

export function Prof() {
    return (<Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
    />);
}
export function Stats() {
    return (<Statistical stats={statisticalData} />);
}
export function FriendList() {
    return (<FriendList friends={friends} />);
}