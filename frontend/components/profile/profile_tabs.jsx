import React from 'react';
import { NavLink }  from 'react-router-dom';

export const ProfileTabs = ({user}) => {
  return (
    <div className="profile-tabs-container">
      <NavLink
        exact
        className="profile-tab"
        activeClassName="profile-tab-active"
        to={`/users/${user.id}`}>
        Images
      </NavLink>

      <NavLink
        exact
        className="profile-tab"
        activeClassName="profile-tab-active"
        to={`/users/${user.id}/likes`}>
        Likes
      </NavLink>
    </div>
  );
};
