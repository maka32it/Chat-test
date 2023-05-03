import React, { useState } from "react";
import "./Chat.scss";
import ListOfChats from "../listOfChats/ListOfChats";
import MessageField from "../messageField/MessageField";
export default function Chat() {
  const [data, setData] = useState([
    {
      name: "Kyrie Irving",
      last_online: "5 minutes",
      avatar: "/images/kyrie.png",
      messages: [
        { from: "contact", message: "Hello, how was your day?", time: "12:30" },
        { from: "me", message: "Hi, it was bad.", time: "12:32" },
        { from: "contact", message: "What happened?", time: "12:33" },
      ],
    },
    {
      name: "Vince Carter",
      last_online: "55 minutes",
      avatar: "/images/vince.png",
      messages: [
        {
          from: "contact",
          message: "Did you see my last game?",
          time: "09:08",
        },
        { from: "me", message: "Yes, you were amazing", time: "09:09" },
        { from: "contact", message: "Thanks!", time: "09:09" },
      ],
    },
    {
      name: "Lebron James",
      last_online: "15 minutes",
      avatar: "/images/lebron.png",
      messages: [
        {
          from: "contact",
          message: "I am going back to the Finals",
          time: "06:19",
        },
        { from: "me", message: "Good luck", time: "06:20" },
        { from: "contact", message: "I dont need luck:)", time: "06:29" },
      ],
    },
    {
      name: "Steph Curry",
      last_online: "25 minutes",
      avatar: "/images/steph.png",
      messages: [
        {
          from: "contact",
          message: "Cant lose to Lebron this time",
          time: "05:12",
        },
        {
          from: "me",
          message: "It is going to be hard, he is not slowng dowon this year",
          time: "05:14",
        },
        { from: "contact", message: "I see...", time: "05:16" },
      ],
    },
  ]);
  const [selectedChat, setSelectedChat] = useState(data[0]);
  return (
    <div className="chat">
      <ListOfChats data={data} setSelectedChat={setSelectedChat} />
      <MessageField
        setData={setData}
        selectedChat={selectedChat}
        setSelectedChat={setSelectedChat}
      />
    </div>
  );
}
