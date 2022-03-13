import './index.css';

import Profile from './components/Profile/Profile';
import userProfile from './components/Profile/user.json';

import Statistics from './components/Statistics/Statistics';
import statsSummary from './components/Statistics/data.json';

import FriendList from './components/FriendList/FriendList';
import friends from './components/FriendList/friends.json';

import TransactionHistory from './components/Transactions/TransactionHistory';
import transaction from './components/Transactions/transactions.json';
console.dir(Statistics)


export default function App() {
    return (
        <div className="App">
            <a className="app_link" href="https://github.com/dairedo7/react-assignment-1">
                <h1 className="main_header">Original project's code</h1>
            </a>
            {/* Task 1 */}
                <h2 className="secondary_header">User Profile</h2>
                <Profile user={userProfile} />
            {/* Task 2 */}
                <h2 className="secondary_header">Statistics</h2>
                <Statistics stats={statsSummary} />
                <Statistics title="UPLOADED STATS TITLE!" stats={statsSummary} />
            {/* Task 3 */}
                <h2 className="secondary_header">Friends List</h2>
                <FriendList friends={friends} />
            {/* Task 4 */} 
                <h2 className="secondary_header">Transaction History</h2>
                <TransactionHistory item={transaction} />
        </div>
    )
}