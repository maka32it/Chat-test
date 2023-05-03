import React, { useState } from "react";
import "./MessageField.scss";
import { BsFillSendFill } from "react-icons/bs";
import { BiPlusMedical } from "react-icons/bi";
import { AiOutlineBell } from "react-icons/ai";
export default function MessageField({
  selectedChat,
  setSelectedChat,
  setData,
}) {
  const [inputValue, setInputValue] = useState("");
  function addMessage(e) {
    e.preventDefault();
    const newMessage = { from: "me", message: inputValue, time: "Now" };
    if (inputValue) {
      setSelectedChat((prev) => {
        return {
          ...prev,
          messages: [...prev.messages, newMessage],
        };
      });
    }
    setData((prev) => {
      const chatIndex = prev.findIndex(
        (chat) => chat.name === selectedChat.name
      );
      const chatToUpdate = prev[chatIndex];
      const updatedChat = {
        ...chatToUpdate,
        messages: [...prev[chatIndex].messages, newMessage],
      };
      const updatedData = [...prev];
      updatedData.splice(chatIndex, 1, updatedChat);
      return updatedData;
    });

    setInputValue("");
  }
  return (
    <div className="messageField">
      <div className="header">
        <div className="left">
          <img
            className="profile-pic"
            src={selectedChat.avatar}
            alt="profilePic"
          />
          <h3 className="name">{selectedChat.name}</h3>
          <p className="status">{selectedChat.last_online}</p>
        </div>

        <div className="right">
          <AiOutlineBell className="bell" />
        </div>
      </div>
      <div className="messages">
        {selectedChat.messages.map((message, i) => (
          <div
            key={i}
            className={
              message.from === "contact" ? "message customer" : "message"
            }
          >
            <div className="message-outer">
              <div
                className={
                  message.from === "contact"
                    ? "message-inner customer"
                    : "message-inner"
                }
              >
                <span>{message.time}</span>
                <div
                  className={
                    message.from === "contact"
                      ? "message-bubble customer"
                      : "message-bubble"
                  }
                >
                  <span>{message.message}</span>
                </div>
                <div className="message-spacer"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="textField">
        <form onSubmit={(e) => addMessage(e)}>
          <label htmlFor="plus">
            <button className="plus">
              <BiPlusMedical className="icon" />
            </button>
          </label>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            id="plus"
            type="text"
            placeholder="Type a message"
          />
          <button type="submit" disabled={!inputValue} className="send">
            <BsFillSendFill className="icon" />
          </button>
        </form>
      </div>
    </div>
  );
}
