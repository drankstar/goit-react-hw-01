import FriendListItem from "../FriendListItem/FriendListItem";
import styles from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.container}>
      {friends.map((el) => (
        <li key={el.id}>
          <FriendListItem key={el.id} avatar={el.avatar} name={el.name} isOnline={el.isOnline} />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
