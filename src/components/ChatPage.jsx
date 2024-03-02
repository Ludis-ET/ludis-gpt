import { Header } from "./Header";
import { Footer } from "./Footer";
import { Chat } from "./Chat";

export const ChatPage = ({ ss, s }) => {
  return (
    <div className="p-4 sm:ml-64">
      <Header ss={ss} s={s} />
      <div className="chat dark:bg-gray-900 ml-[-20px] absolute w-full  md:w-[83.5%] min-h-screen p-5">
        <div className="chat-page mt-[80px] mb-[80px] p-4">
          <Chat />
        </div>
      </div>
      <Footer />
    </div>
  );
};
