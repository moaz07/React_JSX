import "./App.css";
import ProfilePhoto from "./component/profile/ProfilePhoto";
import FullName from "./component/profile/FullName";
import Address from "./component/profile/Address";
import Comment from "./component/profile/Comment";

function App() {
  return (
    <div className="App">
      <div className="p1">
        <ProfilePhoto />
        <div className="inf">
          <FullName />
          <Address />
          <Comment />
          <div className="btn">
            <button type="button" className="b1">
              Follow
            </button>
            <button type="button" className="b2">
              Visit Full Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
