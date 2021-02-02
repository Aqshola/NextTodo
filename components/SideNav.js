const SideNav = ({ nav }) => {
  return (
    <div
      className={
        "sidenavSM sideNavBG overflow-x-hidden transform md:transform-none transition duration-150 row-span-2 flex flex-col bg-yellow-300 rounded-tr-3xl py-10 z-10" +
        (nav
          ? " w-auto opacity-100 ease-in"
          : " -translate-x-10 opacity-0 w-0 ease-out")
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

        {/* <ul className="space-y-6">
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
        </ul> */}
      </div>

      <button className="mt-10 bg-white w-max p-3 rounded-tr-3xl px-8">
        Add Label
      </button>
    </div>
  );
};

export default SideNav;
