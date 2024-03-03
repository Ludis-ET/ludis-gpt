import logo from "../assets/logo.png";
export const Chat = ({ mes, res }) => {
  return (
    <div className="w-full px-5 flex flex-col justify-between">
      <div className="flex flex-col mt-5">

        {res.map((r, index) => (
          <div key={index} className="flex justify-start mb-4">
            <img
              src={logo}
              className="object-cover h-8 w-8 rounded-full"
              alt=""
            />
            <div className="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
              {r.message}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
