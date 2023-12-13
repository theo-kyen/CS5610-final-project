import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../reducers/userReducer.js";
import Songs from "../songs.js";
import Nav from "../../Nav.js";
import * as client from "../client.js";
import { FaCircleUser } from "react-icons/fa6";

const UserProfile = () => {
  const account = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getAccount = async () => {
    const acc = await client.account();
    dispatch(setUser(acc));
  };
  const signout = async () => {
    await client.signout();
    navigate("/signin");
  };

  useEffect(() => {
    getAccount();
  }, []);

  return (
    <div>
      <Nav />
      <div className=" mt-3 ms-3">
        {account ? (
          <div>
            <FaCircleUser style={{ width: "100px", height: "100px" }} />
            <h2>{account.username}</h2>
            <h4>
              {account.firstName} {account.lastName}
            </h4>
            <div className="mb-3">
              <Songs inProfile={true} />
            </div>
            <div>
              <button
                onClick={() => navigate("/profile/edit")}
                className="btn btn-warning me-1"
              >
                Edit Account
              </button>
              <button onClick={signout} className="btn btn-danger">
                Sign Out
              </button>
            </div>
          </div>
        ) : (
          <div>
            <label className="ms-2 mb-1">You are not signed in</label>
            <br />
            <Link to="/signin" className="btn btn-primary me-2">
              Sign In
            </Link>
            <Link to="/signup" className="btn btn-primary">
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
