import React from "react";
const profileData = {
  first: {
    name: "신희태",
    descrption: "Frontend Engineer . Happy Codding",
  },
  second: {
    name: "신희똥",
    descrption: "만화영화 주인공",
  },
};

const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = profileData[username];
  if (!profile) {
    return <div>존재하지 않는 유저입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.descrption}</p>
    </div>
  );
};
export default Profile;
