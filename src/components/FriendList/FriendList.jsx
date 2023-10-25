import { FriendListItem } from './FriendListItem';

import css from './FriendList.module.css';

export const FriendList = ({friends}) => {
    return (
        <ul className={css.friendList}>
            {friends.map(friends => (
                <FriendListItem
                    avatar={friends.avatar}
                    name={friends.name}
                    isOnline={friends.isOnline}
                    key={friends.id}
                    id={friends.id}
                />
            ))}
        </ul>
    )
}

// FriendList.propTypes = {
//     friends: PropTypes.arrayOf(
//         PropTypes.shape({
//             key: PropTypes.number.isRequired,
//         })
//     )
// };