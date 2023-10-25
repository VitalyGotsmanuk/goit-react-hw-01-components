import css from './FriendList.module.css';

export const FriendListItem = ({ avatar, name, isOnline, key, id }) => {
    
    return (
        <li className={css.item} key={key} id={id}>
            <span className={
                isOnline ? `${css.online}` : `${css.offline}`
            }></span>

            <img className={css.avatar} src={avatar} alt={name} width="48"/>
            <p className={css.name}>{name}</p>
        </li>
    )
}