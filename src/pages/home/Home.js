import React from "react";
import "./Home.scss";
import SideBar from "../../components/sidebar/SideBar";
import ListOfChats from "../../components/listOfChats/ListOfChats";
import Chat from "../../components/chat/Chat";
import { Outlet } from "react-router-dom";
export default function Home() {
  return (
    <div className="home">
      <SideBar />
      <Outlet />
    </div>
  );
}
