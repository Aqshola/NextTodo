import { useRef, useState } from "react";
import data from "./api/data";
import TodoBox from "../components/TodoBox";
import SideNav from "../components/SideNav";
import WrapperTodo from "../components/TodoSection/WrapperTodo";

export default function Home() {
  const slidNav = useRef(null);
  const [nav, setnav] = useState(false);

  const _handleNav = () => {
    setnav(!nav);
  };
  return (
    <>
      <nav className="w-full grid grid-rows-2 grid-cols-3 md:grid-cols-10  justify-between  p-2 items-center col-span-10 col-start-2 px-3">
        <div className="flex items-center col-span-1 md:col-span-5">
          <button onClick={_handleNav} className="focus:outline-none">
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
          <h5 className="hidden md:block">Todo</h5>
        </div>
        <p className="font-bold col-span-1 md:col-span-1 text-center">
          1 february 2021
        </p>
        <a className="font-bold col-span-1 md:col-span-4 text-right">Logout</a>
      </nav>
      <div className="max-w-screen-2xl min-h-screen h-screen">
        <div className="flex md:grid md:grid-cols-10 md:grid-rows-1 h-full relative">
          <SideNav nav={nav} reference={slidNav} />
          <div className="w-full mt-5 md:mt-0 p-5 md:col-start-5 items-center md:col-span-3 flex flex-col">
            <h3 className="text-3xl">Hi User!</h3>
            <div className="flex items-center justify-center mt-10 w-full">
              <input
                type="text"
                name=""
                id=""
                className="transition-all border-b-2 border-yellow-300 text-xl pb-3 w-full focus:border-b-4 focus:border-yellow-400"
                placeholder="create task..."
              />
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  className="fill-current text-yellow-300"
                  width="35px"
                  height="35px"
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
              {data.map((todo, i) => {
                if (!todo.finish) {
                  return (
                    <TodoBox key={i} finish={todo.finish} value={todo.todo} />
                  );
                }
              })}
            </WrapperTodo>
            <WrapperTodo title="Finish">
              {data.map((todo, i) => {
                if (todo.finish) {
                  return (
                    <TodoBox key={i} finish={todo.finish} value={todo.todo} />
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
