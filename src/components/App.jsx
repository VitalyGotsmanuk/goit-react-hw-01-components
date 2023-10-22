import user from '../data/user.json';
import { Profile } from './Profile';
import data from '../data/data.json';
import { Statistics } from './Statistics';
import friends from '../data/friends.json';
import { FriendList } from './FriendList';


export const App = () => {
  return (
    <section>
    <h1>Hi ALL!!!</h1>
    
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
        
    <Statistics title="Upload stats" stats={data} />
      
    <Statistics stats={data} />
    
    <FriendList friends={friends} /> 
    
    
         
      
    </section> 
  );
};
