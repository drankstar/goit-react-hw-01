import clsx from "clsx";
import styles from "./FriendListItem.module.css";
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={styles.item}>
      <img className={styles.img} src={avatar} alt="Avatar" width="48" />
      <p className={styles.name}>{name}</p>
      <p className={clsx(styles.status, { [styles.online]: isOnline })}>{isOnline ? "online" : "offline"}</p>
    </div>
  );
};

export default FriendListItem;
