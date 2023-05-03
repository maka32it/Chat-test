import React from "react";
import { NavLink } from "react-router-dom";
import "./SideBar.scss";
import {
  BsFillChatLeftFill,
  BsFillChatDotsFill,
  BsStar,
  BsPerson,
  BsInfoCircle,
} from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
export default function SideBar() {
  return (
    <div className="sidebar">
      <h1 className="logo">
        <BsFillChatDotsFill className="dots" />
        <span>Chat</span>
      </h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/">
              <BsFillChatLeftFill className="icon" /> <span>Chat</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacts">
              <BsPerson className="icon" /> <span>Contacts</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/favorite">
              <BsStar className="icon" /> <span>Favorite</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings">
              <FiSettings className="icon" /> <span>Settings</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="about">
              <BsInfoCircle className="icon" /> <span>About Us</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
