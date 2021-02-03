import { useRef } from "react";

const SideNav = ({ nav, reference }) => {
  return (
    <div
      className={
        "transition-all transform absolute pr-3 z-10 h-full shadow-xl bg-yellow-300 ease-out duration-100  rounded-tr-lg py-10  sideNavBG " +
        (nav
          ? " opacity-100 translate-x-0 visible "
          : "  -translate-x-10 invisible  opacity-0")
      }
    >
      <div className="flex flex-col pl-3 space-y-3 mb-10">
        <ul className="space-y-6">
          <li className="relative p-1">
            <a href="" className="text-2xl relative active block font-semibold">
              Personal
            </a>
          </li>
          <li className="w-max relative p-1">
            <a href="" className="text-2xl animation-hover">
              Work
            </a>
          </li>
        </ul>
      </div>

      <button className="mt-10 bg-white w-max p-3 rounded-tr-3xl px-8">
        Add Label
      </button>
    </div>
  );
};

export default SideNav;
