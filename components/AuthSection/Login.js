import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../redux/actions/auth";

export default function Login({ switchAuth }) {
  const { register, handleSubmit } = useForm();
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const _handleLogin = async (data) => {
    dispatch(logIn(data));
  };

  return (
    <form
      className="flex flex-col space-y-7 w-max justify-self-center"
      onSubmit={handleSubmit(_handleLogin)}
    >
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="text-xl transition border-2 border-black  focus:border-yellow-primary focus:ring-0"
        ref={register}
      />
      <input
        type="password"
        name="password"
        placeholder="Enter your password"
        className="text-xl transition border-2 border-black  focus:border-yellow-primary focus:ring-0"
        ref={register}
      />
      <div className=" flex flex-col space-y-3">
        <button
          className="transition w-full  bg-yellow-primary px-5 py-2 rounded-md font-bold text-lg text-white focus:outline-none focus:ring-0 hover:shadow-md hover:bg-yellow-500 flex items-center md:w-max justify-center disabled:opacity-50"
          disabled={auth.loading}
        >
          <div
            className={
              "rounded-full h-10 w-10 border-4 border-t-4 border-yellow-primary animate-spin  " +
              (auth.loading ? " block" : " hidden")
            }
            style={{ borderTopColor: "white" }}
          >
            {" "}
          </div>
          <p className={auth.loading ? " hidden" : " block"}>Login</p>
        </button>
        <p>
          Didnt Have Account?{" "}
          <span>
            <button
              onClick={switchAuth}
              className="transition text-yellow-primary border-b-2 border-transparent font-bold hover:border-black focus:outline-none focus:ring-0"
            >
              Sign Up
            </button>
          </span>
        </p>
      </div>
    </form>
  );
}
