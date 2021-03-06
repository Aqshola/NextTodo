import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../redux/actions/auth";
import { removeAlert } from "../../redux/actions/alert";

export default function Login({ switchAuth }) {
  const { register, handleSubmit, errors } = useForm();
  const auth = useSelector((state) => state.auth);
  const alert = useSelector((state) => state.alert);
  const dispatch = useDispatch();

  const _handleLogin = async (data) => {
    dispatch(logIn(data));
  };

  return (
    <form
      className="flex flex-col space-y-7 w-max justify-self-center"
      onSubmit={handleSubmit(_handleLogin)}
    >
      <div className="w-72">
        <label htmlFor="email" className="font-semibold mb-2 text-lg">
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          id="email"
          className="text-xl transition border-2 border-black  focus:border-yellow-primary focus:ring-0 w-full"
          ref={register({
            required: "please input email",
          })}
          required
          onClick={() => dispatch(removeAlert())}
        />
        {alert.alert && alert.alert.code === "user" && (
          <p className="text-red-primary font-semibold">! {alert.alert.msg}</p>
        )}
      </div>

      <div className="w-72">
        <label htmlFor="password" className="font-semibold mb-2 text-lg">
          Password
        </label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          id="password"
          className="text-xl transition border-2 border-black  focus:border-yellow-primary focus:ring-0 w-full"
          ref={register({
            minLength: {
              value: 6,
              message: "password should more than 6 character",
            },
          })}
          required
          onClick={() => dispatch(removeAlert())}
        />
        {alert.alert && alert.alert.code === "password" && (
          <p className="text-red-primary font-semibold">! {alert.alert.msg}</p>
        )}
        {errors.password && (
          <p className="text-red-primary font-semibold text-sm">
            ! {errors.password.message}
          </p>
        )}
      </div>

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
