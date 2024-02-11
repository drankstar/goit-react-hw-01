import styles from "./Profile.module.css";
const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles.containerBody}>
      <div className={styles.container}>
        <img className={styles.img} src={image} alt="User avatar" />
        <p className={styles.textTitle}>{name}</p>
        <p className={styles.text}>{tag}</p>
        <p className={styles.text}>{location}</p>
      </div>

      <ul className={styles.list}>
        <li className={styles.listItem}>
          <span>Followers</span>
          <span className={styles.item}>{stats.followers}</span>
        </li>
        <li className={styles.listItem}>
          <span>Views</span>
          <span className={styles.item}>{stats.views}</span>
        </li>
        <li className={styles.listItem}>
          <span>Likes</span>
          <span className={styles.item}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
