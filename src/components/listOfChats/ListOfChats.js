import React from "react";
import "./ListOfChats.scss";
import { AiOutlineSearch } from "react-icons/ai";
export default function ListOfChats({ data, setSelectedChat }) {
  function selectChat(chatInfo) {
    setSelectedChat(chatInfo);
  }
  return (
    <div className="listOfChats">
      <div className="searchBar">
        <input placeholder="Search here" type="text"></input>
        <span>
          <AiOutlineSearch className="icon" />
        </span>
      </div>
      <div className="chats">
        {data.map((info) => (
          <div
            onClick={() => selectChat(info)}
            key={info.name}
            className="chat-container"
          >
            <div className="top">
              <div className="left">
                <img
                  src={info.avatar}
                  alt="profilePic"
                  className="profile-pic"
                />
                <h3 className="name">{info.name}</h3>
              </div>
              <p className="active">{info.last_online}</p>
            </div>
            <div className="bottom">
              <p className="message">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
