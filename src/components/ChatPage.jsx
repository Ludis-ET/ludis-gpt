import { Header } from "./Header";
import { Footer } from "./Footer";
import { Chat } from "./Chat";
import { useState, useEffect } from "react";

export const ChatPage = ({ ss, s }) => {
  const [mes, setMes] = useState([]);
  const [res, setRes] = useState([]);
  const addMessage = (message) => {
    setMes((prevMessages) => [...prevMessages, message]);
  };
  const addMessage2 = (message) => {
    setRes((prevMessages) => [...prevMessages, message]);
  };
  const url = "https://chatgpt-api8.p.rapidapi.com/";
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "1f10b6705bmshaf0b3cb273be1afp1490aejsn6c2625540b7d",
      "X-RapidAPI-Host": "chatgpt-api8.p.rapidapi.com",
    },
    body: [
      {
        content: mes.slice(-1),
        role: "user",
      },
    ],
  };
  useEffect(() => {
    async function ludis() {
      const response = await fetch(url, options);
      const result = await response.json();
      addMessage2(result);
      console.log(result);
    }
    ludis();
  }, [mes]);
  // console.log(mes);

  return (
    <div className="p-4 sm:ml-64">
      <Header ss={ss} s={s} addMessage={addMessage} />
      <div className="chat dark:bg-gray-900 ml-[-20px] absolute w-full  md:w-[83.5%] min-h-screen p-5">
        <div className="chat-page mt-[80px] mb-[80px] p-4">
          <Chat mes={mes} res={res} />
        </div>
      </div>
      <Footer />
    </div>
  );
};
