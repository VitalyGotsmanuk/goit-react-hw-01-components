import { FriendListItem } from './FriendListItem';

export const FriendList = ({friends}) => {
    return (
        <ul className="friend-list">
            {friends.map(friends => (
                <FriendListItem friend={friends} />
            ))}          
        </ul>
    )
}