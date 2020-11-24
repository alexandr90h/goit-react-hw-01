import Profile from './components/profile';
import user from './user.json';

export default function App() {
    return (<Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
    />)
}