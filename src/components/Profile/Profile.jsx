import ProfileList from "../ProfileList/ProfileList";

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div>
      <div>
        <img src={avatar} alt="User avatar" />
        <p>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>
      <ul>
        <ProfileList {...stats} />
      </ul>
    </div>
  );
};

export default Profile;
