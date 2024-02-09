import FriendListItem from "../FriendListItem/FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map((el) => (
        <li key={el.id}>
          <FriendListItem key={el.id} avatar={el.avatar} name={el.name} isOnline={el.isOnline} />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
