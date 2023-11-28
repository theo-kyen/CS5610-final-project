import { HashRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
import { Provider } from "react-redux";
import store from "./store";
import Home from "./Home";
import Search from "./Home/Search";
import Profile from "./Profile";

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="search/*" element={<Search />} />
            <Route path="profile/*" element={<Profile />} />
          </Routes>
        </div>
      </HashRouter>
    </Provider>
  );
}

export default App;
