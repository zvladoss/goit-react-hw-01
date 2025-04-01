import React from "react";

const ProfileList = ({ followers, views, likes }) => {
  return (
    <>
      <li>
        <span>Followers</span>
        <span>{followers}</span>
      </li>
      <li>
        <span>Views</span>
        <span>{views}</span>
      </li>
      <li>
        <span>Likes</span>
        <span>{likes}</span>
      </li>
    </>
  );
};

export default ProfileList;
