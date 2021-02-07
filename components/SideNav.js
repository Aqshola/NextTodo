import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTag, addTag } from "../redux/actions/tags";

const SideNav = ({ nav, handleNav, parentButton }) => {
  const [inputLabel, setinputLabel] = useState(false);
  const [inputTag, setinputTag] = useState("");

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const tags = useSelector((state) => state.tag);

  const ref = useRef(0);

  useEffect(() => {
    document.addEventListener("click", _handleClickOutside, false);
    return () => {
      document.removeEventListener("click", _handleClickOutside, false);
    };
  }, []);

  const _handleInputLabel = (e) => {
    setinputLabel(!inputLabel);
    e.preventDefault();
  };

  const _addTag = (e) => {
    if (e.key === "Enter") {
      if (inputTag !== "" && inputTag !== " ") {
        dispatch(addTag(auth.user.id, inputTag));
        setinputTag("");
      }
    }
  };

  const _handleChange = (e) => {
    setinputTag(e.target.value);
  };

  const _handleClickOutside = (event) => {
    if (
      ref.current &&
      !ref.current.contains(event.target) &&
      !parentButton.current.contains(event.target)
    ) {
      handleNav(false);
    }
  };

  return (
    <div
      className={
        "transition-all flex flex-col transform absolute pr-3 z-10 h-full shadow-xl bg-yellow-primary ease-out duration-100  rounded-tr-lg py-10  sideNavBG " +
        (nav
          ? " opacity-100 translate-x-0 w-max "
          : "  -translate-x-10 w-0  opacity-0")
      }
      ref={ref}
    >
      <div className="flex flex-col pl-3 space-y-3 mb-10">
        <ul className="space-y-6">
          {!auth.loading &&
            auth.user &&
            auth.user.tags !== undefined &&
            auth.user.tags.map((tag, i) => (
              <li
                className={
                  "relative p-1 " + (tag === tags.current_tags ? " " : " w-max")
                }
                key={i}
              >
                <button
                  className={
                    "transition-all text-2xl focus:ring-0 outline-none text-left focus:outline-none animation-fadeIn-fromRight" +
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
        onChange={_handleChange}
        className={
          "p-2 mt-10 border-0 rounded-r-2xl transition-all transform w-min outline-none  focus:outline-none focus:ring- focus:ring-black md:visible" +
          (inputLabel
            ? nav
              ? " visible opacity-100"
              : " invisible"
            : " -translate-x-10 invisible opacity-0")
        }
        onKeyPress={_addTag}
        value={inputTag}
      />

      <button
        className={
          "mt-10 bg-white w-max p-3 rounded-tr-3xl px-8 focus:outline-none md:visible" +
          (nav ? " visible" : " invisible")
        }
        onClick={_handleInputLabel}
      >
        Add Label
      </button>
    </div>
  );
};

export default SideNav;
