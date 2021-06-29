import React from "react";
import { Link, Route } from "react-router-dom";
import Profile from "./Profile";

const Profiles = () => {
  return (
    <div>
      <h3>유저목록:</h3>
      <ul>
        <li>
          <Link to="/profiles/first">first</Link>
        </li>
        <li>
          <Link to="/profiles/second">second</Link>
        </li>
      </ul>
      <Route
        exact
        path="/profiles"
        render={() => <div>유저를 선택해주세요.</div>}
      />
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
};

export default Profiles;
