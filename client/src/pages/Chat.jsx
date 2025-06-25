import { BASE_URL } from "@/service/api.service";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Chat = () => {
  const [chat, setChat] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/api/chat`);
      setChat(data);
      console.log("res ", res);
    } catch (error) {
      console.error("fetchData error: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log("chat ", chat);
  return (
    <div>
      <h1>Chat page</h1>
    </div>
  );
};

export default Chat;
