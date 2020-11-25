import Profile from './components/profile';
import Statistical from './components/statistical';
import FriendList from './components/friendList';
import TransactionHistory from './components/transactionHistory';
import user from './user.json';
import statisticalData from './statistical-data.json';
import friends from './friends.json';
import transactions from './transactions.json';

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
export function Friends() {
    return (<FriendList friends={friends} />);
}
export function Transaction () {
    return (<TransactionHistory items={transactions} />)
}