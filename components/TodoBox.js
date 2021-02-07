import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../redux/actions/todo";

const TodoBox = ({ id, value = "", finish = true }) => {
  const dispatch = useDispatch();
  const [update, setupdate] = useState(false);
  const [deleted, setdeleted] = useState(false);

  const _handleUpdate = () => {
    setupdate(true);
    setTimeout(() => {
      dispatch(updateTodo(id, !finish));
      setupdate(false);
    }, 200);
  };

  const _handleDelete = () => {
    setdeleted(true);
    setupdate(true);

    setTimeout(() => {
      dispatch(removeTodo(id));
      setdeleted(false);
      setupdate(false);
    }, 200);
  };

  return (
    <div
      className={
        "transition-all p-3 transform rounded-lg flex space-x-3 mb-3 duration-200 animation-fadeIn-bottom " +
        (finish ? " bg-yellow-secondary" : " bg-yellow-primary") +
        (update && !deleted ? " opacity-0 translate-x-10" : "  translate-x-0") +
        (deleted ? " opacity-0 -translate-x-10" : " ")
      }
    >
      <button
        className="rounded-full border-2 border-black focus:outline-none"
        onClick={_handleUpdate}
      >
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
      <button className="focus:outline-none" onClick={_handleDelete}>
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
