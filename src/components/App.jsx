import user from '../data/user.json';
import { Profile } from './Profile';


export const App = () => {
  return (
    <section>
    <h1>Hi ALL!!!</h1>
      
    {/* <Product username={user.username} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats} /> */}
    
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
        
     
         
      
    </section> 
  );
};
