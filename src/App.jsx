import FriendList from "./components/FriendList/FriendList";
import Profile from "./components/Profile/Profile";
import userData from "./data/userData.json";
import friends from "./data/friendList.json";
const App = () => {
  return (
    <div>
      <Profile {...userData} />
      <FriendList friends={friends} />
    </div>
  );
};

export default App;
//         name={userData.username}
//         tag={userData.tag}
//         location={userData.location}
//         image={userData.avatar}
//         stats={userData.stats}
