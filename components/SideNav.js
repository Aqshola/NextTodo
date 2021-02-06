import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTag } from "../redux/actions/tags";

const SideNav = ({ nav }) => {
  const [inputLabel, setinputLabel] = useState(false);
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const tags = useSelector((state) => state.tag);
  const _handleInputLabel = () => {
    setinputLabel(!inputLabel);
  };
  return (
    <div
      className={
        "transition-all flex flex-col transform absolute pr-3 z-10 h-full shadow-xl bg-yellow-primary ease-out duration-100  rounded-tr-lg py-10  sideNavBG " +
        (nav
          ? " opacity-100 translate-x-0 visible "
          : "  -translate-x-10 invisible  opacity-0")
      }
    >
      <div className="flex flex-col pl-3 space-y-3 mb-10">
        <ul className="space-y-6">
          {!auth.loading &&
            auth.user &&
            auth.user.tags.map((tag, i) => (
              <li
                className={
                  "relative p-1 " + (tag === tags.current_tags ? " " : " w-max")
                }
                key={i}
              >
                <button
                  className={
                    "transition-all text-2xl focus:ring-0 outline-none text-left focus:outline-none" +
                    (tag === tags.current_tags
                      ? " relative active block font-semibold w-full"
                      : " animation-hover")
                  }
                  onClick={() => dispatch(changeTag(tag))}
                >
                  {tag}
                </button>
              </li>
            ))}
        </ul>
      </div>

      <input
        type="text"
        placeholder="New Label..."
        className={
          "p-2 mt-10 border-0 rounded-r-2xl transition-all transform w-min outline-none focus:ring-0 focus:outline-none" +
          (inputLabel
            ? nav
              ? " visible opacity-100"
              : " "
            : " -translate-x-10 invisible opacity-0")
        }
      />

      <button
        className="mt-10 bg-white w-max p-3 rounded-tr-3xl px-8 focus:outline-none"
        onClick={_handleInputLabel}
      >
        Add Label
      </button>
    </div>
  );
};

export default SideNav;
