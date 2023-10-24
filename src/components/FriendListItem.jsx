

export const FriendListItem = ({ friend }) => {
    const { avatar, name, isOnline, id } = friend;
    return (
        <li className="item" id={id}>
            <span className={
                isOnline ? "online" : "offline"
            }></span>

            <img className="avatar" src={avatar} alt={name} width="48"/>
            <p className="name">{name}</p>
        </li>
    )
}