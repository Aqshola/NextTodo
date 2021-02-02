const TodoBox = ({ value = "", finish = true }) => {
  return (
    <div
      className={
        "p-3 rounded-lg flex space-x-3 mb-3 transition-transform transform hover:scale-110" +
        (finish ? " bg-yellow-200" : " bg-yellow-300")
      }
    >
      <button className="rounded-full border-2 border-black">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          width="20px"
          height="20px"
          className={
            "transition ease-in" + (finish ? " opacity-100" : " opacity-0")
          }
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </button>
      <div className={"flex-grow " + (finish ? " opacity-50" : " opacity-100")}>
        <p className={"w-min font-semibold " + (finish ? " strike" : "")}>
          {value}
        </p>
      </div>
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          width="25px"
          height="25px"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </button>
    </div>
  );
};

export default TodoBox;
