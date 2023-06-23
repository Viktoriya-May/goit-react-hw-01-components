
import { Profile } from './Profile/Profile';
import {Statistics} from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';



import user from '../Main/user.json'
import data from '../Main/data.json';
import friends from '../Main/friends.json'
import transactions from '../Main/transactions.json';

export const App = () => {
    return (
      <div>
      <Profile
  name ={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
<Statistics title="Upload stats" stats={data} />
<FriendList friends={friends} />;
<TransactionHistory items={transactions} />;
</div>
    );
};

