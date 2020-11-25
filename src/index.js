import ReactDOM from 'react-dom';
import { Prof, Stats, FriendList } from './App.jsx';

const ROOT = document.querySelector('#root');

ReactDOM.render(<Prof />, ROOT);
ReactDOM.render(<Stats />, ROOT);
ReactDOM.render(<FriendList />, ROOT);