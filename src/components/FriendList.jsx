import { FriendListItem } from './FriendListItem';

export const FriendList = ({friends}) => {
    return (
        <ul className="friendList">
            {friends.map(friends => (
                <FriendListItem friend={friends} />
            ))}          
        </ul>
    )
}