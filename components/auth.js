import { useState } from "react";
import Login from "../components/AuthSection/Login";
import SignUp from "../components/AuthSection/SignUp";

export default function auth() {
  const [register, setregister] = useState(false);

  const _switchAuth = () => {
    setregister(!register);
  };

  return (
    <div className="max-w-screen-2xl min-h-screen h-screen relative">
      <h1 className="text-yellow-primary text-center md:hidden text-xl absolute w-full">
        Todo Next
      </h1>
      <div className="flex justify-center flex-col md:grid grid-cols-2 grid-rows-1 h-full">
        <div className="hidden row-span-1 bg-yellow-primary col-span-1 md:flex items-center justify-center">
          <div className="text-center animation-fadeIn-fromBottom">
            <h1 className="md:text-5xl comfortaa font-bold text-white">
              Todo Next
            </h1>
            <h4 className="text-3xl text-white comfortaa mt-5">a todo list</h4>
          </div>
        </div>
        <div className="row-span-1 col-span-1 relative flex flex-col items-center justify-center overflow-hidden animation-fadeIn-fromBottom">
          <h2 className="text-5xl comfortaa text-center">
            {register ? "Sign Up" : "Log In"}
          </h2>
          <div className="mt-16  flex flex-col relative ">
            {register ? (
              <SignUp switchAuth={_switchAuth} />
            ) : (
              <Login switchAuth={_switchAuth} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
