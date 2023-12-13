import { HashRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
import { Provider } from "react-redux";
import store from "./store";
import Home from "./Home";
import Search from "./Search";
import Signup from "./User/signup.js";
import Signin from "./User/signin.js";
import Profile from "./User/Profile";
import Users from "./User/users.js";
import ExternalProfile from "./User/Profile/external.js";

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="search/*" element={<Search />} />
            <Route path="signup" element={<Signup />} />
            <Route path="signin" element={<Signin />} />
            <Route path="profile/*" element={<Profile />} />
            <Route path="users/*" element={<Users />} />
            <Route path="users/:userId" element={<ExternalProfile />} />
          </Routes>
        </div>
      </HashRouter>
    </Provider>
  );
}

export default App;
