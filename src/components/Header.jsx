import { useEffect, useState } from "react";

export const Header = ({ ss, s, addMessage }) => {
  const [dark, setDark] = useState(
    JSON.parse(localStorage.getItem("dark")) || true
  );
  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(dark));
    localStorage.setItem("sidebar", JSON.stringify(s));
    dark
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [dark, s]);

  function handleSubmit(e) {
    e.preventDefault();
    let a = e.target.chat.value;
    e.target.chat.value = "";
    addMessage(a);
  }

  return (
    <nav className="fixed top-0 w-full  md:w-[80%] dark:bg-gray-900 shadow-md z-50 pl-0 py-2 ">
      {s && (
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
          <div className="flex w-full md:block md:w-auto" id="navbar-default">
            <button
              type="button"
              onClick={() => setDark(!dark)}
              className={`bi ${
                dark ? "bi-sun-fill" : "bi-cloud-sun"
              }  text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700`}
            ></button>
            <button
              type="button"
              onClick={() => ss(!s)}
              className="bi bi-menu-button-wide-fill block md:hidden text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            ></button>
            <button
              type="button"
              className="bi bi-plus-lg text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            ></button>
          </div>
          <form className="w-[80%]" onSubmit={handleSubmit}>
            <label htmlFor="chat" className="sr-only">
              Your message
            </label>
            <div className="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
              <textarea
                id="chat"
                rows="1"
                name="chat"
                className="block mx-4 p-2.5 w-full outline-none text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your message..."
              ></textarea>
              <button
                type="submit"
                className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
              >
                <svg
                  className="w-5 h-5 rotate-90 rtl:-rotate-90"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
                </svg>
                <span className="sr-only">Send message</span>
              </button>
            </div>
          </form>
        </div>
      )}
    </nav>
  );
};
