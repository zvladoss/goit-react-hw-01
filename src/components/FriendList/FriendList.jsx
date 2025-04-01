import FriendListItem from "../FriendListItem/FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map(({ id, ...rest }) => {
        return (
          <li key={id}>
            <FriendListItem {...rest} />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
