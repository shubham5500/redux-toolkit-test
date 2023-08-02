import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchNotifications,
  getNotificationSelector
} from "../features/notifications/notifications";

export const Navbar = () => {
  const dispatch = useDispatch();

  const newNotificationCount = useSelector(getNotificationSelector);
  const fetchNewNotifications = () => {
    dispatch(fetchNotifications());
  };
  return (
    <nav>
      <section>
        <h1>
          <Link to="/">Redux Essentials Example</Link>
        </h1>

        <div className="navContent">
          <div className="navLinks">
            <Link to="/">Posts</Link>
            <Link to="/users">Users</Link>{" "}
            <Link to="/notifications">
              Notifications{" "}
              <span className="badge">{newNotificationCount}</span>
            </Link>
          </div>
          <button className="button" onClick={fetchNewNotifications}>
            Refresh Notifications
          </button>
        </div>
      </section>
    </nav>
  );
};
