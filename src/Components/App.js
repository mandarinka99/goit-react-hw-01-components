import Profile from "./profile/Profile";
import data from "../data";

const App = () => {
  const { user } = data;
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </>
  );
};

export default App;
