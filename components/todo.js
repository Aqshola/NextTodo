import { useEffect, useRef, useState } from "react";
import TodoBox from "../components/TodoBox";
import SideNav from "../components/SideNav";
import WrapperTodo from "./TodoSection/WrapperTodo";
import { logOut } from "../redux/actions/auth";
import { getTodo, addTodo } from "../redux/actions/todo";
import { removeTag } from "../redux/actions/tags";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const [nav, setnav] = useState(false);
  const [todoValue, settodoValue] = useState("");

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const tags = useSelector((state) => state.tag);
  const todos = useSelector((state) => state.todo);

  const buttonSide = useRef(null);

  useEffect(() => {
    if (!auth.loading && auth.user) {
      dispatch(getTodo(auth.user.id, tags.current_tags));
    }
  }, [auth.loading, auth.user, getTodo, tags.current_tags]);

  const _inputTodo = (e) => {
    settodoValue(e.target.value);
  };

  const _addTodo = (e) => {
    if (todoValue !== "" || todoValue !== " ") {
      dispatch(addTodo(auth.user.id, todoValue, tags.current_tags));
      settodoValue("");
    }
  };
  const _addTodoEnter = (e) => {
    if (e.key === "Enter") {
      if (todoValue !== "" || todoValue !== " ") {
        dispatch(addTodo(auth.user.id, todoValue, tags.current_tags));
        settodoValue("");
      }
    }
  };

  const _handleLogOut = async () => {
    dispatch(logOut());
  };

  const _handleNav = () => {
    setnav(!nav);
  };

  return (
    <>
      <nav className="w-full grid grid-rows-2 grid-cols-3 md:grid-cols-10  justify-center  p-2 items-center col-span-10 col-start-2 px-3">
        <div className="flex items-center col-span-1 md:col-span-5">
          <button
            onClick={_handleNav}
            className="focus:outline-none"
            ref={buttonSide}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className={
                "transition transform stroke-current stroke-1 md:hidden " +
                (nav ? " rotate-90" : "rotate-0")
              }
              width="30px"
              height="30px"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="hidden stroke-current text-yellow-400 stroke-1 md:block"
            width="30px"
            height="30px"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
            />
          </svg>
          <h5 className="hidden md:block font-semibold ">Todo</h5>
        </div>
        <p className="font-bold col-span-1 md:col-span-1 text-center comfortaa ">
          1 february 2021
        </p>
        <button
          className="transition font-bold col-span-1 md:col-span-4 text-right w-min justify-self-end p-1 rounded hover:bg-yellow-300 comfortaa"
          onClick={_handleLogOut}
        >
          Logout
        </button>
      </nav>
      <div className="max-w-screen-2xl min-h-screen h-screen overflow-x-hidden">
        <div className="flex md:grid md:grid-cols-10 md:grid-rows-1 h-full relative">
          <SideNav nav={nav} handleNav={setnav} parentButton={buttonSide} />
          <div className="w-full mt-5 md:mt-0 p-5 md:col-start-5 items-center md:col-span-3 flex flex-col relative">
            <div className="w-full flex mb-4 items-center">
              <h2 className="flex-grow font-semibold text-yellow-400 text-xl visible md:invisible">
                {tags.current_tags}
              </h2>
              <button
                className="w-max p-2 text-sm -right-0  top-0 bg-red-primary text-white font-bold rounded-xl md:-right-20 hover:bg-red-700  focus:outline-none focus:ring-0"
                onClick={() =>
                  dispatch(removeTag(auth.user.id, tags.current_tags))
                }
              >
                Delete {tags.current_tags}
              </button>
            </div>
            <h3 className="text-3xl comfortaa">Hi User!</h3>

            <div className="flex items-center justify-center mt-5 w-full">
              <input
                type="text"
                name="inputTodo"
                onChange={_inputTodo}
                className="transition-all outline-none border-0 border-b-2 border-yellow-300 text-xl pb-3 w-full focus:border-b-4 focus:border-yellow-primary focus:outline-none focus:ring-0"
                placeholder="create task..."
                onKeyPress={_addTodoEnter}
                value={todoValue}
              />
              <button
                className="focus:outline-none transition transform focus:rotate-180"
                onClick={_addTodo}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  className=" transition fill-current text-yellow-primary hover:text-yellow-500"
                  width="40px"
                  height="40px"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <WrapperTodo title="OnGoing">
              {!auth.loading &&
                auth.user &&
                todos.todo.map((todo) => {
                  if (!todo.data().done) {
                    return (
                      <TodoBox
                        key={todo.id}
                        id={todo.id}
                        finish={todo.data().done}
                        value={todo.data().value}
                      />
                    );
                  }
                })}
            </WrapperTodo>
            <WrapperTodo title="Finish">
              {!auth.loading &&
                auth.user &&
                todos.todo.map((todo) => {
                  if (todo.data().done) {
                    return (
                      <TodoBox
                        key={todo.id}
                        id={todo.id}
                        finish={todo.data().done}
                        value={todo.data().value}
                      />
                    );
                  }
                })}
            </WrapperTodo>
          </div>
        </div>
      </div>
    </>
  );
}
