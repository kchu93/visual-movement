import React from 'react';
import { NavLink }  from 'react-router-dom';

export const ProfileTabs = ({user}) => {
  return (
    <div className="profile-tabs-container">
      <NavLink
        className="profile-tab"
        activeClassName="profile-tab-active"
        to={`/users/${user.id}`}>
        Images
      </NavLink>

      <NavLink
        className="profile-tab"
        activeClassName="profile-tab-active"
        to={`/users/${user.id}/likes`}>
        Likes
      </NavLink>
    </div>
  );
};
