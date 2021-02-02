import { useState } from "react";

const WrapperTodo = ({ children, title }) => {
  const [viewChild, setviewChild] = useState(true);
  const _handleView = () => {
    setviewChild(!viewChild);
  };
  return (
    <div className="flex flex-col mt-5 w-full">
      <button
        className="w-max flex items-center space-x-3 focus:outline-none"
        onClick={_handleView}
      >
        <p className="text-lg">{title || "Default title"}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          width="20px"
          height="20px"
          className={
            "transform transition " + (viewChild ? " rotate-0" : " rotate-180")
          }
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={
          "mt-3 transition transform" +
          (viewChild
            ? " opacity-100 visible h-auto ease-in"
            : " opacity-0 invisible h-0 -translate-y-5 ease-out")
        }
      >
        {children}
      </div>
    </div>
  );
};

export default WrapperTodo;
