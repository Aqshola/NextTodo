const SideNav = ({ nav }) => {
  return (
    <div
      className={
        "h-screen  absolute shadow-xl pr-3 transition md:shadow-none md:pr-0 md:h-auto md:relative md:opacity-100 md:visible md:w-auto md:col-span-2 row-span-2 flex flex-col bg-yellow-300 rounded-tr-3xl py-10 z-10" +
        (nav ? " w-auto opacity-100" : " overflow-hidden w-0 opacity-0")
      }
    >
      <div className="flex transition flex-col pl-3 space-y-3 mb-10">
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
