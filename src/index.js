import ReactDOM from 'react-dom';
import { Prof, Stats, Friends, Transaction } from './App.jsx';

const ROOT = document.querySelector('#root');

ReactDOM.render(<div><Prof /><Stats /><Friends /><Transaction/></div>, ROOT);
// ReactDOM.render(<Stats />, ROOT);
// ReactDOM.render(<FriendList />, ROOT);