import React from "react";
import { NavLink, Route } from "react-router-dom";
import Profile from "./Profile";
import WithRouterSample from "./WithRouterSample";
const Profiles = () => {
  return (
    <div>
      <h3>유저목록:</h3>
      <ul>
        <li>
          <NavLink
            to="/profiles/first"
            activeStyle={{ background: "black", color: "white" }}
          >
            first
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profiles/second"
            activeStyle={{ background: "black", color: "white" }}
          >
            second
          </NavLink>
        </li>
      </ul>
      <Route
        exact
        path="/profiles"
        render={() => <div>유저를 선택해주세요.</div>}
      />
      <Route path="/profiles/:username" component={Profile} />
      <WithRouterSample />
    </div>
  );
};

export default Profiles;
